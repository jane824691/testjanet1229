import { useState, useEffect } from 'react'
import { useCart } from '@/components/hooks/use-cart-state'
import { useRouter } from 'next/router'
import { ONE_ORDER } from '@/components/my-const'
export default function OrderUnderMember() {
  //跳轉用
  const router = useRouter()

  const [myOrder, setMyOrder] = useState({
    oid: '',
    img: '',
    name: '',
    price: '',
    quantity: '',
  })
  // 去抓後端處理好的資料
  //取page資料
  const getListData = async () => {
    try {
      const r = await fetch(ONE_ORDER + `?oid=${oid}`)
      const d = await r.json()
      setData(d)
    } catch (ex) {}
  }

  useEffect(() => {
    getListData()
  }, [router.query.page])
  return (
    <>
      <form className="list-form">
        <div className="container" style={{ paddingTop: '2.5rem' }}>
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
                    {/* {items.map((v, i) => {
                      return ( 
                        key={v.oid}
                        */}
                        <div className="row extinct-product">
                          <div className="col-3">
                            <img
                              //src={`../../../image/product/${v.img}`}
                              alt="name of product"
                              className="img-thumbnail"
                            />
                          </div>
                          <div className="col-6">
                            {/* {v.name} */}
                            <div>
                              <span>數量：</span>
                              {/* <span>{v.quantity}</span> */}
                            </div>
                          </div>
                          <div className="col-3 text-end">
                            <div className="dollar">
                              <span>NT$</span>
                              {/* <span>{v.subtotal}</span> */}
                            </div>
                          </div>
                        </div>
                      {/* )
                    })} */}
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
                      <div className="col-9 dollar">本訂單總花費金額</div>
                      <div className="col-3 text-end">
                        <div className="dollar">
                          <span>NT$</span>
                          <span></span>
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
                    <span></span>
                    <br />
                    <label
                      htmlFor="validationCustom01"
                      className="form-label font-grey-title"
                    >
                      電話：
                    </label>
                    <span></span>
                    <br />
                    <label
                      htmlFor="validationCustom01"
                      className="form-label font-grey-title"
                    >
                      Email：
                    </label>
                    <span></span>
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
                      台北市大安區
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
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
