import { useState, useRef } from 'react'
import Link from 'next/link'
import TWZipCode from './TWZipCode'
import { z } from 'zod'
import { ORDER_LIST_ADD } from '@/components/my-const'

export default function Payment(props) {
  // const [payment, setPaymentData] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  //   address: '',
  //   postcode: '',
  // })
  const { payment, setPaymentData } = props

  const [displayInfo, setDisplayInfo] = useState('') // "", "succ", "fail"

  //一次處理多項購物者資訊用
  const changeHandler = (e, postcodeValue) => {
    const { name, id, value } = e.target
    console.log({ name, id, value })
    setDisplayInfo('')
    setPaymentData({ ...payment, [id]: value, postcode: postcodeValue })
  }

  // 更改付款方式的css
  const [selectedOption, setSelectedOption] = useState(null)

  const handleRadioChange = (optionId) => {
    setSelectedOption(optionId)
    // 根据选项设置支付方式
    setPaymentData({
      ...payment,
      pay_way:
        optionId === 'flexRadioDefault1'
          ? '貨到付款'
          : optionId === 'flexRadioDefault2'
          ? '信用卡'
          : '',
    })
  }

  return (
    <>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        <div className="d-flex justify-content-center">
          <img src="/images/product/steps_to_payment.png" alt="" />
        </div>
        {/* onSubmit={onSubmit} */}
        <form className="list-form">
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
                  收貨人資訊
                </div>
                <div className="card-body">
                  <h5 className="card-title font-grey-title">
                    姓名<span className="text-danger">*</span>
                  </h5>
                  <input
                    className="form-control T-18 rounded-5"
                    type="text"
                    placeholder="請填姓名"
                    name="name"
                    id="name"
                    value={payment.name}
                    onChange={changeHandler}
                  />
                  <h5 className="card-title font-grey-title mt-3">
                    電話<span className="text-danger">*</span>
                  </h5>
                  <input
                    className="form-control T-18 rounded-5"
                    type="text"
                    placeholder="請填常用聯絡電話"
                    name="phone"
                    id="phone"
                    value={payment.phone}
                    onChange={changeHandler}
                  />
                  <h5 className="card-title font-grey-title mt-3">郵箱</h5>
                  <input
                    type="email"
                    className="form-control rounded-5"
                    placeholder="name@example.com"
                    id="email"
                    name="email"
                    value={payment.email}
                    onChange={changeHandler}
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
                  收貨地址
                </div>
                <div className="card-body">
                  <TWZipCode
                    onPostcodeChange={(country, township, postcode) => {
                      // 如果需要处理postcode变化，进行相应处理
                      setPaymentData({ ...payment, postcode })
                    }}
                    initPostcode={payment.postcode}
                  />
                  <h5 className="card-title font-grey-title mt-3">
                    收貨地址<span className="text-danger">*</span>
                  </h5>
                  <input
                    className="form-control rounded-5"
                    type="text"
                    placeholder="請填詳細地址"
                    aria-label="default input example"
                    name="address"
                    id="address"
                    value={payment.address}
                    onChange={changeHandler}
                  />
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      onClick={() => {
                        setPaymentData({
                          name: '王小明',
                          phone: '0912345678',
                          email: 'ispan@ispan.com',
                          address: '復興南路一段390號2樓',
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
                  付款方式<span className="text-danger">*</span>
                </div>
                <div className="card-body">
                  <div>
                    <div
                      className={`form-check mb-3 form-control rounded-5 ${
                        selectedOption === 'flexRadioDefault1'
                          ? 'radius-plus-form'
                          : ''
                      }`}
                    >
                      <input
                        className="form-check-input mx-1 rounded-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked={selectedOption === 'flexRadioDefault1'}
                        onChange={() => handleRadioChange('flexRadioDefault1')}
                        value="貨到付款"
                      />
                      <label
                        className="form-check-label mx-2"
                        htmlFor="flexRadioDefault1"
                      >
                        貨到付款
                      </label>
                    </div>
                    <div
                      className={`form-check mb-3 form-control rounded-5 ${
                        selectedOption === 'flexRadioDefault2'
                          ? 'radius-plus-form'
                          : ''
                      }`}
                    >
                      <input
                        className="form-check-input mx-1 rounded-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked={selectedOption === 'flexRadioDefault2'}
                        onChange={() => handleRadioChange('flexRadioDefault2')}
                        value="信用卡"
                      />
                      <label
                        className="form-check-label mx-2"
                        htmlFor="flexRadioDefault2"
                      >
                        信用卡
                      </label>
                    </div>
                    {/* {selectedOption === null && (
                      <p style={{ color: 'red' }}>请选择一个选项</p>
                    )} */}
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
