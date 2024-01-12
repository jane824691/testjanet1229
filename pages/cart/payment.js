import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import TWZipCode from './TWZipCode'
import { z } from 'zod'
import { AB_ADD } from '@/components/my-const'

export default function ConfirmIndex() {
  const [buyer, setbuyer] = useState({
    order_name: '',
    order_phone: '',
    order_email: '',
    order_address: '',
  })

  // 輸入購物者資訊用
  const handleFieldChange = (e) => {
    setbuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // TODO: 檢查各個欄位的資料
    // coerce 寬鬆的檢查方式
    const emailSchema = z.coerce
      .string()
      .email({ message: '錯誤的 email 格式' })
    console.log('emailSchema:', emailSchema.safeParse(buyer.order_email))

    const r = await fetch(AB_ADD, {
      method: 'POST',
      body: JSON.stringify(buyer),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const responseData = await r.json()
    if (responseData.success) {
      setbuyer('succ')
      // alert("新增成功");
    } else {
      setbuyer('fail')
      // alert("新增發生錯誤!!!");
    }
  }

  console.log('re-render---', new Date())

  return (
    <>
      <div className="container ">
        <div className="d-flex justify-content-center">
          <img src="/images/product/steps_to_payment.png" alt="" />
        </div>
        <form className="list-form" onSubmit={onSubmit}>
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
                  訂購人資訊
                </div>
                <div className="card-body">
                  <h5 className="card-title font-grey-title">
                    姓名<span className="text-danger">*</span>
                  </h5>
                  <input
                    className="form-control T-18 rounded-5"
                    type="text"
                    placeholder="請填姓名"
                    aria-label="default input example"
                    name="order_name"
                    value={buyer.order_name}
                    onChange={handleFieldChange}
                  />
                  <h5 className="card-title font-grey-title mt-3">
                    電話<span className="text-danger">*</span>
                  </h5>
                  <input
                    className="form-control T-18 rounded-5"
                    type="text"
                    placeholder="請填常用聯絡電話"
                    aria-label="default input example"
                    name="order_phone"
                    value={buyer.order_phone}
                    onChange={handleFieldChange}
                  />
                  <h5 className="card-title font-grey-title mt-3">郵箱</h5>
                  <input
                    type="email"
                    className="form-control rounded-5"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="order_email"
                    value={buyer.order_email}
                    onChange={handleFieldChange}
                  />
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
                  取貨地址
                </div>
                <div className="card-body">
                  {/* <TWZipCode></TWZipCode> */}
                  <h5 className="card-title font-grey-title mt-3">
                    取貨地址<span className="text-danger">*</span>
                  </h5>
                  <input
                    className="form-control rounded-5"
                    type="text"
                    placeholder="請填詳細地址"
                    aria-label="default input example"
                    name="order_address"
                    value={buyer.order_address}
                    onChange={handleFieldChange}
                  />
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                      onClick={() => {
                        // 測試帳號 herry/11111
                        setbuyer({
                          order_name: '王小明',
                          order_phone: '0912345678',
                          order_email: 'ispan@ispan.com',
                          order_address: '復興南路一段390號2樓',
                        })
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      勾選帶入同會員資訊
                    </label>
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
                  付款方式
                </div>
                <div className="card-body">
                  <div className="form-check mb-3 form-control rounded-5">
                    <input
                      className="form-check-input mx-1 rounded-5"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label mx-2 "
                      htmlFor="flexRadioDefault1"
                    >
                      信用卡
                    </label>
                  </div>
                  <div className="form-check mb-3 form-control radius-plus-form rounded-5">
                    <input
                      className="form-check-input mx-1 rounded-5"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label mx-2"
                      htmlFor="flexRadioDefault2"
                    >
                      貨到付款
                    </label>
                  </div>
                </div>
              </div>

              <div className="container text-center mt-5">
                <div className="row">
                  <div className="col d-grid">
                    {/* <Link
                      className="nav-link  btn btn-outline-light"
                      href="/cart"
                      role="button"
                    > */}
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-lg btn:active"
                      style={{ width: '300px' }}
                    >
                      回前一頁
                    </button>
                    {/* </Link> */}
                  </div>
                  <div className="col d-grid">
                    {/* <Link
                      className="nav-link  btn btn-outline-light"
                      href="/cart/confirm"
                      role="button"
                    > */}
                    <button
                      type="button"
                      className="btn btn-primary text-white btn-lg btn:active"
                      style={{ width: '300px' }}
                    >
                      確認結帳
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
