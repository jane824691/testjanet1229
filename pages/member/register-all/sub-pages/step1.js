import Image from 'next/image'
import { z } from 'zod'
import { register_ADD } from '@/components/my-const'
import { useState } from 'react'

// 註冊第一步
function Step1(props) {
  const { step1, setStep1 } = props

  // 欄位檢查
  const [errors, setErrors] = useState({})

  const changeHandler = (e) => {
    const { name, id, value } = e.target
    console.log({ name, id, value })
    setStep1({ ...step1, [id]: value })
  }

  const validateFields = (step1) => {
    const newErrors = {}

    // 檢查欄位資訊是否未填寫
    if (!step1.lastname.trim()) {
      newErrors.lastname = '姓氏未填寫'
    } else {
      newErrors.lastname = '' // 清空錯誤訊息
    }
    if (!step1.firstname.trim()) {
      newErrors.firstname = '名字未填寫'
    }
    if (!step1.mobile.trim()) {
      newErrors.mobile = '電話號碼未填寫'
    }
    if (!step1.birthday.trim()) {
      newErrors.birthday = '生日未填寫'
    }
    if (!step1.account.trim()) {
      newErrors.account = '帳號未填寫'
    }
    if (!step1.password.trim()) {
      newErrors.password = '密碼未填寫'
    }
    if (!step1.identification.trim()) {
      newErrors.identification = '身分證字號未填寫'
    }
    if (!step1.email.trim()) {
      newErrors.email = '電子信箱未填寫'
    }

    return newErrors
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // 檢查欄位資料
    const newErrors = validateFields(step1)

    // 設定錯誤訊息
    setErrors(newErrors)

    // 檢查是否有錯誤
    if (Object.keys(newErrors).length > 0) {
      // 有錯誤，不執行 API 請求
      return
    }

    // 呼叫後端進行帳號檢查和其他欄位檢查
    const response = await fetch('/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(step1),
    })

    if (!response.ok) {
      console.error('伺服器錯誤:', response.status)
      return
    }

    const result = await response.json()

    if (!result.success) {
      // 如果後端回傳的 success 不是 true，代表有錯誤
      setErrors(result.errors)
    } else {
      // 沒有錯誤，可以執行註冊 API 請求
      const Schema = z.coerce.string().email({ message: '錯誤的 email 格式' })
      console.log('Schema:', Schema.safeParse(step1.email))
      // TODO: 執行註冊 API 請求
    }
  }

  //不送單一表單
  // 串接資料庫:fetch(url)
  // const response = await fetch(register_ADD, {
  //   method: 'POST',
  //   body: JSON.stringify(step1),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })

  // const responseData = await response.json()

  // if (responseData.success) {
  //   // alert('註冊成功');
  //   setSuccessMessage('註冊成功')
  // } else {
  //   // alert('格式錯誤或未填寫');
  //   setErrorMessage('格式錯誤或未填寫')
  // }

  // 在這裡新增 state
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  //成功或失敗顯示不同的<div>內容
  {
    successMessage && <div className="success-message">{successMessage}</div>
  }
  {
    errorMessage && <div className="error-message">{errorMessage}</div>
  }

  return (
    <>
      <h3 className="mx-5 py-3">會員註冊</h3>
      <div className="d-flex justify-content-center">
        <Image src="/pics/sleepcat.png" width="500" height="100" alt="懶懶貓" />
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
                    setStep1({
                      lastname: '林',
                      firstname: '宜君',
                      mobile: '0988352694',
                      account: 'YiJun',
                      password: 'LY851212',
                      birthday: '1996-12-12',
                      identification: 'A226789898',
                      email: 'YiJun@gmail.com',
                    })
                    setErrors({})
                  }}
                />
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h6 className="card-title font-grey-title ">
                      姓氏<span className="text-danger">*</span>
                    </h6>
                    <input
                      className="form-control T-18 rounded-5 border border-primary"
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={step1.lastname}
                      onChange={changeHandler}
                      placeholder="姓氏"
                      aria-label="default input example"
                    />
                    {/* 錯誤訊息的顯示 */}
                    {errors.lastname && (
                      <div className="error-message">{errors.lastname}</div>
                    )}
                  </div>
                  <div className="col">
                    <h6 className="card-title font-grey-title mt-3 mt-md-0">
                      名字<span className="text-danger">*</span>
                    </h6>
                    <input
                      className="form-control T-18 rounded-5 border border-primary"
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={step1.firstname}
                      onChange={changeHandler}
                      placeholder="名字"
                      aria-label="default input example"
                    />
                    {errors.firstname && (
                      <div className="error-message">{errors.firstname}</div>
                    )}
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col">
                    <h6 className="card-title font-grey-title">
                      電話號碼<span className="text-danger">*</span>
                    </h6>
                    <input
                      className="form-control T-18 rounded-5 border border-primary"
                      type="text"
                      id="mobile"
                      name="mobile"
                      value={step1.mobile}
                      onChange={changeHandler}
                      placeholder="請填電話號碼"
                      aria-label="default input example"
                    />
                    {errors.mobile && (
                      <div className="error-message">{errors.mobile}</div>
                    )}
                  </div>
                  <div className="col">
                    <h6 className="card-title font-grey-title mt-3 mt-md-0">
                      出生年月日
                    </h6>
                    <input
                      className="form-control T-18 rounded-5 border border-primary"
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={step1.birthday}
                      onChange={changeHandler}
                      placeholder="請填日期"
                      aria-label="default input example"
                      max="2013-12-31"
                    />
                    {errors.birthday && (
                      <div className="error-message">{errors.birthday}</div>
                    )}
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col">
                    <h6 className="card-title font-grey-title">
                      會員帳號<span className="text-danger">*</span>
                    </h6>
                    <input
                      className="form-control T-18 rounded-5 border border-primary"
                      type="text"
                      id="account"
                      name="account"
                      value={step1.account}
                      onChange={changeHandler}
                      placeholder="請填帳號"
                      aria-label="default input example"
                    />
                    {errors.account && (
                      <div className="error-message">{errors.account}</div>
                    )}
                  </div>
                  <div className="col">
                    <h6 className="card-title font-grey-title mt-3 mt-md-0">
                      密碼<span className="text-danger">*</span>
                    </h6>
                    <input
                      className="form-control T-18 rounded-5 border border-primary"
                      type="text"
                      id="password"
                      name="password"
                      value={step1.password}
                      onChange={changeHandler}
                      placeholder="請填密碼"
                      aria-label="default input example"
                    />
                    {errors.password && (
                      <div className="error-message">{errors.password}</div>
                    )}
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col">
                    <h6 className="card-title font-grey-title">
                      身分證字號<span className="text-danger">*</span>
                    </h6>

                    <input
                      className="form-control T-18 rounded-5 border border-primary"
                      type="text"
                      id="identification"
                      name="identification"
                      value={step1.identification}
                      onChange={changeHandler}
                      placeholder="請填身分證字號"
                      aria-label="default input example"
                    />
                    {errors.identification && (
                      <div className="error-message">
                        {errors.identification}
                      </div>
                    )}
                  </div>
                  <div className="col">
                    <h6 className="card-title font-grey-title mt-3 mt-md-0">
                      電子信箱<span className="text-danger">*</span>
                    </h6>
                    <input
                      className="form-control T-18 rounded-5 border border-primary"
                      type="text"
                      id="email"
                      name="email"
                      value={step1.email}
                      onChange={changeHandler}
                      placeholder="請填電子信箱"
                      aria-label="default input example"
                    />
                    {errors.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                  </div>
                </div>
                <br></br>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary pro-shadow"
            >
              提交
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
export default Step1