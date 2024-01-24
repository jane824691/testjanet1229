import React, { useState } from 'react'
import Image from 'next/image'
import TWZipCode from '@/pages/member/TWZipCode'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { register_ADD } from '@/components/my-const'
//註冊第二步
function Step2(props) {
  //儲存step1狀態
  const [step1, setStep1] = useState({
    lastname: '',
    firstname: '',
    mobile: '',
    birthday: '',
    account: '',
    password: '',
    identification: '',
    email: '',
  })
  const { step2, setStep2 } = props
  const handlePostcodeChange = (country, township, zipcode) => {
    // 根據選單更新狀態與[sid].js相關
    setStep2({
      country,
      township,
      zipcode,
    })
  }
  const [address, setAddress] = useState('')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // 一鍵輸入並保持step2的address的狀態
  const [autoAddress, setAutoAddress] = useState('')
  const [step2Address, setStep2Address] = useState('')

  const onSubmit = async (e) => {
    //串接資料庫:fetch(url)
    const response = await fetch(register_ADD, {
      method: 'POST',
      body: JSON.stringify({ step1, step2 }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const responseData = await response.json()
    if (responseData.success) {
      alert('註冊成功')
    } else {
      alert('格式錯誤或未填寫')
    }
  }
  return (
    <>
      <h3 className="mx-5 py-3">會員註冊</h3>
      <div className="d-flex justify-content-center">
        <Image
          src="/pics/sleepcat2.png"
          width="510"
          height="110"
          alt="懶懶貓"
        />
      </div>
      <form className="list-form" onSubmit={onSubmit}>
        <div className="d-flex justify-content-center">
          <div className="direction-column">
            <div className="card border-danger mb-3" style={{ width: '40rem' }}>
              <div
                className="card-header card-big-title border border-0 py-3"
                style={{ backgroundColor: 'transparent' }}
              >
                會員資訊
                <Image
                  src="/pics/showpassword.png"
                  width="24"
                  height="32"
                  alt="吐舌狗"
                  style={{
                    position: 'absolute',
                    right: '8px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    const newAddress = '復興南路1段390號2樓'
                    setAutoAddress(newAddress)
                    // 同時更新 step2 的 address 值
                    setStep2Address(newAddress)
                  }}
                />
              </div>
              <div className="card-body">
                <div className="row">
                  {/* Integrate TWZipCode component for selecting city */}

                  <div className="col">
                    <TWZipCode
                      initPostcode={step2 ? step2.zipcode : ''}
                      onPostcodeChange={handlePostcodeChange}
                    />
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                  <div className="col">
                    <h6 className="card-title font-grey-title">
                      通訊地址<span className="text-danger">*</span>
                    </h6>

                    <input
                      className="form-control T-18 rounded-5 border border-primary"
                      type="text"
                      value={autoAddress}
                      onChange={(e) => setAutoAddress(e.target.value)}
                      placeholder="詳細地址"
                      aria-label="default input example"
                    />
                  </div>
                </div>
                <br></br>
              </div>
            </div>
            <div className="d-flex justify-content-between py-4">
              {/* <Link href="/member/register">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg btn pro-shadow"
                  style={{ width: 250 }}
                >
                  回到前一頁
                </button>
              </Link>
              <button
                type="submit"
                className="btn btn-outline-primary btn-lg btn pro-shadow"
                style={{ width: 250 }}
                onClick={handleShow}
              >
                完成註冊
              </button> */}
              {/* modal */}
              {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-form">
                  <Modal.Title className="modal-form">
                    註冊成功!!
                    <div>
                      <h5>恭喜您成為佩佩星球的成員~</h5>
                    </div>
                  </Modal.Title>
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
                    onClick={handleClose}
                  />
                </Modal.Header>
                <Modal.Body className="modal-form" style={{ height: 130 }}>
                  <Image
                    src="/pics/nike.png"
                    alt="打勾"
                    width="100"
                    height="100"
                    className="mx-auto"
                  />
                </Modal.Body>
                <Modal.Footer className="modal-form">
                  <Button
                    variant="info"
                    className="mx-auto"
                    style={{
                      width: '120px',
                      cursor: 'pointer',
                      boxShadow: 'none',
                    }}
                    onClick={handleClose}
                  >
                    確定
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
export default Step2