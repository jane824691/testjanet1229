import { useCart } from '@/components/hooks/use-cart-state'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CartList() {
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

  return (
    <div className="container" style={{paddingTop: '2.5rem'}}>
      <div className="only-cart-padding">
        <div className="d-flex justify-content-center ">
          <img src="/images/product/paying_procedure_pic.png" alt="" />
        </div>

        <div className="row list-form">
          <div className="cart-area">
            <div className="card mb-3 border-0">
              <div className="row">
                <div className="col-md-2">
                  <div className="d-flex">
                    <input
                      className="form-check-input cart-select-all"
                      type="checkbox"
                      defaultValue=""
                      id="SelectAll"
                    />
                    <div className="card-big-title w-120-120 text-end">
                      購物車
                    </div>
                  </div>
                </div>
                <div className="col-md-10">
                  <h5 className="card-body to-middle-title row">
                    <div className="col-5 text-center">品名</div>
                    <div className="col-2 text-end">數量</div>
                    <div className="col-2 text-end">價格</div>
                    <div className="col-2 text-end">小計</div>
                    <div className="col-1 text-end">刪除</div>
                  </h5>
                </div>
              </div>
              <hr />
            </div>

            {items.map((v, i) => {
              return (
                <div className="card mb-3 underline" key={v.pid}>
                  <div className="row g-0">
                    <div className="col-3">
                      <input
                        className="form-check-input cart-select"
                        type="checkbox"
                        defaultValue=""
                        id=""
                      />
                      <img
                        src="/images/product/638348807730300000 (1).jfif"
                        alt="name of product"
                        className="img-thumbnail"
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body to-middle ">
                        <h5 className="card-title card-text align-items-center row">
                          <div className="col-5">
                            <Link className="a-link" href={`/product/${v.pid}`}>
                              {v.name}
                            </Link>
                          </div>

                          <div className="col-2">
                            <div className="d-flex amount-btn-group">
                              <button
                                type="button"
                                className="btn btn-outline-secondary amount-btn-L"
                                onClick={() => {
                                  decrement(v.pid)
                                }}
                              >
                                -
                              </button>
                              <div className="form-control rounded-2 text-center amount-form">
                                {v.quantity}
                              </div>

                              <button
                                type="button"
                                className="btn btn-outline-secondary amount-btn-R"
                                onClick={() => {
                                  increment(v.pid)
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="col-2 text-end">{v.price}</div>
                          <div className="col-2 text-end">{v.subtotal}</div>
                          <div className="col-1 text-center">
                            <button
                              type="button"
                              className="btn btn-outline-success amount-btn btn-X"
                              onClick={() => {
                                removeItem(v.pid)
                              }}
                            >
                              X
                            </button>
                          </div>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="card total-card border-0 mt-5">
              <h4 className="mb-3 underline-w">摘要</h4>
              <div className="d-flex justify-content-between align-items-center underline-w">
                <h5>折價券</h5>
                <div>
                  <select
                    className="form-select text-end border-0 coupon"
                    value={selectedCouponId}
                    onChange={(e) => {
                      setSelectedCouponId(Number(e.target.value))
                    }}
                  >
                    <option value="0">選擇折價券</option>
                    {couponOptions.map((v) => {
                      return (
                        <option key={v.id} value={v.id}>
                          {v.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>

              <h5 className="card-text d-flex justify-content-between align-items-center underline-w mt-3">
                處理費/郵資 <span>NT$ 30</span>
              </h5>
              <h5 className="card-text d-flex justify-content-between align-items-center underline-w mt-3">
                總計商品{' '}
                <span>
                  <span>共計</span> {cart.totalItems} 項商品
                </span>
              </h5>

              <h4 className="card-text d-flex justify-content-between align-items-center mt-3">
                總計{' '}
                <span className="dollar" style={{ fontSize: '24px' }}>
                  <span>NT$</span> {netTotal}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
