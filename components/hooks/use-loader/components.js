// https://github.com/Gamote/lottie-react
import Lottie from 'lottie-react'
import catAnimation from '@/assets/loader-cat.json'

// 展示用載入元件
export function DefaultLoader({ show = false }) {
  return (
    <div className={`semi-loader ${show ? '' : 'semi-loader--hide'}`}></div>
  )
}

// 展示用載入文字元件
export function LoaderText({ text = 'loading', show = false }) {
  return (
    <div className={`loading-text-bg ${show ? '' : 'loading-text--hide'}`}>
      <div className={`loading-text ${show ? '' : 'loading-text--hide'}`}>
        {text}...
      </div>
    </div>
  )
}

// lottie-react
export function CatLoader({ show = false }) {
  return (
    <div className={`cat-loader-bg ${show ? '' : 'cat-loader--hide'}`}>
      <Lottie
        className={`cat-loader ${show ? '' : 'cat-loader--hide'}`}
        animationData={catAnimation}
        style={{
          width: '400px',
          height: '100%',
          position: 'relative',
          top: '40%',
          left: '400%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  )
}

export function NoLoader({ show = false }) {
  return <></>
}
