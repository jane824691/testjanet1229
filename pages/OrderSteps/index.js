import { useState } from 'react'

// 子頁面(區域)
import Cart from './sub-pages/Cart'
import Payment from './sub-pages/Payment'
import OrderDetail from './sub-pages/OrderDetail'

// 進度條
import ProgressBar from './components/ProgressBar'

// css樣式
//import '@/styles/OrderSteps.css'

function OrderSteps() {
  const maxSteps = 3

  const [step, setStep] = useState(1)

  const [errors, setErrors] = useState([])

  // 狀態的範例，都集中在這裡接收
  const [cartData, setCartData] = useState([])

  const [payment, setPaymentData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    postcode: '',
  })

  // 動態元件語法
  const components = [Cart, Payment, OrderDetail]
  const BlockComponent = components[step - 1]

  // 進度條使用
  const progressNames = ['購物車', '付款', '明細']

  // 上一步 下一步按鈕
  const next = () => {
    // 運送表單用檢查
    if (step === 2) {
      const { name, address, phone } = Payment

      // 有錯誤訊息會跳出警告，不會到"下一步"
      const errors = []

      if (!name) errors.push('姓名沒填~ ')

      if (!address) errors.push('住址沒填~ ')

      if (!phone) errors.push('電話沒填~ ')

      if (errors.length > 0) {
        alert(errors.join(','))
        return
      }
    }

    // 沒錯誤才會到下一步
    if (step < maxSteps) setStep(step + 1)
    setStep(step + 1)
  }

  // 上一步按鈕
  const prev = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <>
      {/* 進度條 */}
      <div style={{ display: 'none' }}>
        <h1>訂購流程</h1>
        <ProgressBar
          maxSteps={maxSteps}
          step={step}
          progressNames={progressNames}
        />
      </div>
      {/* 子頁面區域 */}
      <div className="order-steps">
        <BlockComponent payment={payment} setPaymentData={setPaymentData} />
      </div>
      {/* 按鈕 */}
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <button
          onClick={prev}
          disabled={step === 1}
          style={{ width: 250, marginRight: 20 }}
          className="btn btn-outline-primary btn-lg"
        >
          回上一頁
        </button>
        <button
          className="btn btn-danger btn-lg text-white"
          onClick={next}
          disabled={step === maxSteps}
          style={{ width: 250 }}
        >
          前往結帳
        </button>
      </div>
    </>
  )
}

export default OrderSteps