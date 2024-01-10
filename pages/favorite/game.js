import React, { useEffect, useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Link from 'next/link'

const jumpDistance = 150 // 空白鍵的移動距離

export default function Game() {
  const [keyStates, setKeyStates] = useState({})
  const [position, setPosition] = useState({ left: 0, top: 210 })
  const [sunImageVisible, setSunImageVisible] = useState(false)
  const [cloudImageVisible, setCloudImageVisible] = useState(false)
  const [dogImageVisible, setDogImageVisible] = useState(false)
  const [randomImage1Visible, setRandomImage1Visible] = useState(false)
  const [randomImage2Visible, setRandomImage2Visible] = useState(false)
  const animationFrame = useRef(null)
  const gameContainerRef = useRef(null)
  const [gameContainer, setGameContainer] = useState('rect4')
  const [isJumping, setIsJumping] = useState(false) //跳躍狀態
  const [showModal, setShowModal] = useState(false) //觸發Modal
  const [foodEaten, setFoodEaten] = useState(false) // 用於追蹤是否吃到食物的狀態
  const [gameStarted, setGameStarted] = useState(false) //遊戲開始才抓座標

  const easeInOutQuad = (t) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2

  const handleJump = () => {
    const originalTop = position.top
    const jumpStartTime = performance.now()

    const jumpFrame = () => {
      const currentTime = performance.now()
      const progress = (currentTime - jumpStartTime) / 500

      setPosition((prevPosition) => ({
        ...prevPosition,
        top: originalTop - easeInOutQuad(progress) * jumpDistance,
      }))

      if (progress < 1) {
        requestAnimationFrame(jumpFrame)
      } else {
        setPosition((prevPosition) => ({
          ...prevPosition,
          top: originalTop,
        }))
        eatFood() // 在跳躍結束後進行碰撞檢測
        setIsJumping(false)
      }
    }

    requestAnimationFrame(jumpFrame)
  }

  const handleMovement = useCallback(() => {
    setPosition((prevPosition) => {
      let { left, top } = prevPosition

      if (keyStates.ArrowRight) {
        left = Math.min(left + 5, 375)
      }
      if (keyStates.ArrowLeft) {
        left = Math.max(left - 5, 0)
      }
      if (keyStates.ArrowUp) {
        top = Math.max(top - 5, 0)
      }
      if (keyStates.ArrowDown) {
        top = Math.min(top + 5, 208)
      }

      if (keyStates.Space && !isJumping) {
        setIsJumping(true)
        handleJump()
      }
      if (keyStates.ArrowDown) {
        top += 2
      }
      console.log({ left, top })
      eatFood() //呼叫，不可刪除
      return { left, top }
    })
  }, [keyStates, isJumping])

  const downHandler = useCallback(
    (e) => {
      e.preventDefault()
      console.log(e.code)
      setKeyStates((prevKeyStates) => ({
        ...prevKeyStates,
        [e.code]: true,
      }))
      if (e.code === 'Space' && !isJumping) {
        setIsJumping(true)
        handleJump()
      }
    },
    [setKeyStates, setIsJumping]
  )

  const upHandler = useCallback(
    (e) => {
      e.preventDefault()
      setKeyStates((prevKeyStates) => ({
        ...prevKeyStates,
        [e.code]: false,
      }))

      if (e.code === 'Space') {
        setIsJumping(false)
      }
    },
    [setKeyStates, setIsJumping]
  )

  const move = () => {
    if (!gameStarted) {
      //遊戲開始時再抓座標
      return
    }
    handleMovement()
    animationFrame.current = requestAnimationFrame(() => move()) // 呼叫move函式
  }

  const startGame = () => {
    setSunImageVisible(true)
    setCloudImageVisible(true)
    setDogImageVisible(true)
    setRandomImage1Visible(true)
    setRandomImage2Visible(true)

    if (location.hash === '#rect4') {
      setGameContainer('rect4')
    } else {
      setGameContainer('rect3')
    }
    setGameStarted(true) // 設定遊戲已經開始
    animationFrame.current = requestAnimationFrame(move)
  }

  const modalShow = () => {
    setShowModal(true)
    // fetch丟資料回database
  }

  // 吃飼料
  const eatFood = useCallback(() => {
    const dogRect = document.querySelector('#dogImage').getBoundingClientRect()
    const randomImage1Rect = document
      .querySelector('#randomImage1')
      .getBoundingClientRect()
    const randomImage2Rect = document
      .querySelector('#randomImage2')
      .getBoundingClientRect()

    console.log('Dog Rect:', dogRect)
    console.log('Food1 Rect:', randomImage1Rect)
    console.log('Food2 Rect:', randomImage2Rect)

    if (
      (dogRect.right > randomImage1Rect.left &&
        dogRect.left < randomImage1Rect.right &&
        dogRect.bottom > randomImage1Rect.top &&
        dogRect.top < randomImage1Rect.bottom) ||
      (dogRect.right > randomImage2Rect.left &&
        dogRect.left < randomImage2Rect.right &&
        dogRect.bottom > randomImage2Rect.top &&
        dogRect.top < randomImage2Rect.bottom)
    ) {
      console.log('Dog eat the food!')
      setFoodEaten(true) // 更新 foodEaten 狀態
      setShowModal(true) // 顯示 Modal
    }
  }, [setFoodEaten, setShowModal])

  const dogMovement = useCallback(() => {
    let newTop
    setPosition((prevPosition) => {
      let { left, top } = prevPosition

      // ...其他移動邏輯

      eatFood()
      newTop = top

      return { left, top }
    })
    eatFood(newTop)
  }, [eatFood])

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    animationFrame.current = requestAnimationFrame(() => {
      handleMovement()
    })

    return () => {
      cancelAnimationFrame(animationFrame.current)
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [handleMovement])

  return (
    <div>
      <h3>簽到小遊戲</h3>
      <div className="rect">
        <div className="rect2">
          <div
            className={gameContainer}
            ref={gameContainerRef}
            id="gameContainer"
            style={{ position: 'relative' }}
          >
            <div>
              <Image
                src="/pics/dogImage.png"
                alt="狗"
                id="dogImage"
                width="95"
                height="70"
                style={{
                  left: position.left,
                  top: position.top,
                  display: dogImageVisible ? 'block' : 'none',
                  position: 'absolute',
                  zIndex: 2, //狗在圖片上層
                }}
              />
            </div>
            <Image
              src="/pics/pngtree-cat-food-feed-image_2236974.png"
              alt="飼料1"
              width="60"
              height="70"
              style={{
                display: randomImage1Visible ? 'block' : 'none',
                marginLeft: '220px',
                marginTop: '80px',
                zIndex: 1,
              }}
              className="randomImage"
              id="randomImage1"
            />
            <Image
              src="/pics/dog-food.png"
              alt="飼料2"
              width="80"
              height="90"
              style={{
                display: randomImage2Visible ? 'block' : 'none',
                marginLeft: '350px',
                marginTop: '100px',
                zIndex: 1,
              }}
              className="randomImage"
              id="randomImage2"
            />
            <Image
              src="/pics/sun.png"
              alt="太陽"
              width="75"
              height="75"
              style={{
                display: sunImageVisible ? 'block' : 'none',
                marginLeft: '390px',
              }}
              id="sunImage"
            />
            <Image
              src="/pics/cloud.png"
              alt="雲朵"
              width="75"
              height="50"
              style={{
                display: cloudImageVisible ? 'block' : 'none',
                marginLeft: '80px',
              }}
              id="cloudImage"
            />
          </div>
          <span
            style={{
              marginLeft: '200px',
              marginTop: '30px',
              color: '#CA9145',
              fontSize: '22px',
            }}
          >
            佩
            <span style={{ color: '#f8723f' }}>
              佩
              <span style={{ color: '#CA9145' }}>
                星<span style={{ color: '#f8723f' }}>球</span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Image
            src="/pics/keyboard.png"
            alt="方向鍵"
            width="180"
            height="130"
            style={{
              marginTop: '10px',
            }}
            id="cloudImage"
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <button className="start" onClick={startGame}>
              開始遊戲
            </button>
            <button className="end">結束</button>
          </div>
        </div>
      </div>

      {/* Modal 範例 */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="modal-form">
          <Modal.Title className="modal-form py-3">遊戲獎勵!!</Modal.Title>
          <Image
            src="/pics/close.png"
            alt="叉叉"
            width="40"
            height="30"
            className="mb-3"
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: '-22px',
              right: '-20px',
            }}
            onClick={() => setShowModal(false)}
          />
        </Modal.Header>
        <Modal.Body className="modal-form">
          恭喜獲得商品折價50元的優惠券~
        </Modal.Body>

        <Modal.Footer className="modal-form">
          {/* <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            className="pro-shadow"
          >
            關閉
          </Button> */}
          <Link href="/favorite">
            <Button
              variant="success"
              onClick={() => setShowModal(false)}
              className="pro-shadow" //profile.scss的屬性
            >
              觀看優惠券
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
