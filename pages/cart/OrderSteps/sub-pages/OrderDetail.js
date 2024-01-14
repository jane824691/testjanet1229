import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/components/hooks/use-cart-state'
import toast, { Toaster } from 'react-hot-toast'
import { z } from 'zod'
import { ORDER_LIST_ADD } from '@/components/my-const'

export default function OrderDetail({ payment, setPaymentData }) {
  // 範例資料
  // type: 'amount'相減，'percent'折扣
  const coupons = [
    { id: 1, name: '折100元', value: 100, type: 'amount' },
    { id: 2, name: '折300元', value: 300, type: 'amount' },
    { id: 3, name: '8折券', value: 0.2, type: 'percent' },
  ]
  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, decrement, increment, removeItem } = useCart()

  const [couponOptions, setCouponOptions] = useState(coupons)
  const [selectedCouponId, setSelectedCouponId] = useState(0)
  const [netTotal, setNetTotal] = useState(0)
  // const { netTotal, setNetTotal } = props

  useEffect(() => {
    // 一開始沒套用折價券，netTotal和cart.totalPrice一樣
    if (!selectedCouponId) {
      setNetTotal(cart.totalPrice)
      return
    }

    const coupon = couponOptions.find((v) => v.id === selectedCouponId)

    // type: 'amount'相減，'percent'折扣
    const newNetTotal =
      coupon.type === 'amount'
        ? cart.totalPrice - coupon.value
        : Math.round(cart.totalPrice * (1 - coupon.value))

    setNetTotal(newNetTotal)
  }, [cart.totalPrice, selectedCouponId])

  // 修正 Next hydration 問題
  // https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }
  // 修正 end

  //  const [displayInfo, setDisplayInfo] = useState('') // "", "succ", "fail"

  return (
    <>
      <div className="container" style={{paddingTop: '2.5rem'}}>
        <div className="d-flex justify-content-center ">
          <img
            src="/images/product/steps_to_complete.png"
            alt="steps_to_complete"
          />
        </div>
        <div className="list-form needs-validation" noValidate="">
          <div className="d-flex justify-content-center">
            <div className="direction-column">
              <div
                className="card border-primary mb-3"
                style={{ width: '40rem' }}
              >
                <div
                  className="card-header card-big-title border border-0"
                  style={{ backgroundColor: 'transparent ' }}
                >
                  購物明細
                </div>
                <div className="card-body">
                  {items.map((v, i) => {
                    return (
                      <div className="row extinct-product" key={v.pid}>
                        <div className="col-3">
                          <img
                            src="/images/product/638348807730300000 (1).jfif"
                            alt="name of product"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-6">
                          {v.name}
                          <div>
                            <span>數量：</span>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="col-3 text-end">
                          <div className="dollar">
                            <span>NT$</span>
                            <span>{v.price}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="row card-padding12">
                    <div className="col-9">折扣金額</div>
                    <div className="col-3 text-end">
                      <div>
                        <span>NT$</span>
                        <span>{[setSelectedCouponId[0]]}</span>
                      </div>
                    </div>
                  </div> */}
                  <div className="row card-padding12">
                    <div className="col-9 dollar">本訂單須付款金額</div>
                    <div className="col-3 text-end">
                      <div className="dollar">
                        <span>NT$</span>
                        <span>{netTotal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card border-primary mb-3"
                style={{ width: '40rem' }}
              >
                <div
                  className="card-header card-big-title border border-0"
                  style={{ backgroundColor: 'transparent ' }}
                >
                  訂購人資訊
                </div>
                <div className="card-body">
                  <label
                    htmlFor="validationCustom01"
                    className="form-label font-grey-title"
                  >
                    姓名：
                  </label>
                  <span>{payment.name}</span>
                  <br />
                  <label
                    htmlFor="validationCustom01"
                    className="form-label font-grey-title"
                  >
                    電話：
                  </label>
                  <span>{payment.phone}</span>
                  <br />
                  <label
                    htmlFor="validationCustom01"
                    className="form-label font-grey-title"
                  >
                    Email：
                  </label>
                  <span>{payment.email}</span>
                </div>
                <div
                  className="card-header card-big-title border border-0"
                  style={{ backgroundColor: 'transparent ' }}
                >
                  取貨資訊
                </div>
                <div className="card-body">

                  <label
                    htmlFor="validationCustom01"
                    className="form-label font-grey-title"
                  >
                    取貨地址：
                  </label>
                  <span>
                    台北市大安區{payment.postcode}
                    {payment.address}
                  </span>
                </div>
                <div
                  className="card-header card-big-title border border-0"
                  style={{ backgroundColor: 'transparent ' }}
                >
                  付款資訊
                </div>
                <div className="card-body">
                  <label
                    htmlFor="validationCustom01"
                    className="form-label font-grey-title"
                  >
                    付款方式：
                  </label>
                  <span>信用卡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}