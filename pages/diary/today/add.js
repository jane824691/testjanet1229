import { useEffect, useState } from 'react'
import axios from 'axios'
import { CiForkAndKnife } from 'react-icons/ci'
import { MdPets } from 'react-icons/md'
import { FaPoo } from 'react-icons/fa6'
import { FaBath } from 'react-icons/fa'
import { FaSyringe } from 'react-icons/fa'
import styles from '@/css/todayadd.module.css'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'

import VerticalNavBar from '@/pages/diary/vertical-nav-bar'

export default function Home() {
  const [pet, setPet] = useState({
    owner_id: '1', // FIXME: hard code
    name: '',
    type: '狗', // FIXME: hard code
    breed: '',
    birthday: '',
    chip_id: '',
    gender: '',
    height: '',
    weight: '',
  })

  // 輸入帳號 密碼用
  const handleFieldChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value })
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    const res = await axios.post('http://localhost:3001/diary/pet/add', pet)

    if (res.data.status === 'success') {
      toast.success('資訊 - 寵物新增成功')
    } else {
      toast.error(`錯誤 - 寵物新增失敗`)
    }
  }

  return (
    <>
      <main className={styles.main}>
        {/* 左邊欄位 */}
        <VerticalNavBar focused="diary" />
        {/* 左邊欄位 */}
        {/* 右上標題 */}
        <div className={styles.myBody}>
          <div className={styles.mypetList}></div>
          {/* 右上標題 */}
          {/* 中間卡片 */}
          <div className={styles.myBody1}>
            <div className={styles.myBodylist}>
              <div className="col-sm-7 border border-primary rounded-5">
              <Image
                  src="/images/diary/btn-3.png"
                  alt="叉叉"
                  width="60"
                  height="40"
                  className="mb-3"
                  style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '110px',
                    right: '520px',
                  }}
                  onClick={handleClose}
                />
                <div className="row gx-5 border-bottom border-warning m-1">
                  <div className="col  my-3">
                    <CiForkAndKnife className={styles.statusicon} />
                  </div>
                  <div className="col my-3">
                    <FaPoo className={styles.statusicon} />
                  </div>
                  <div className="col my-3">
                    <MdPets className={styles.statusicon} />
                  </div>
                  <div className="col my-3">
                    <FaBath className={styles.statusicon} />
                  </div>
                  <div className="col my-3">
                    <FaSyringe className={styles.statusicon} />
                  </div>
                </div>
                <div className="row flex-nowrap d-flex align-items-center d-flex justify-content-center border-warning">
                  <form>
                    <div className="">
                      <div className="card-body">
                        <div className="col ">
                          <div className="row flex-nowrap p-2 d-flex justify-content-center mt-3">
                            <h6 className={styles.input}>開始時間</h6>
                            <input
                              className="form-control T-18 rounded-5 border border-primary w-50 text-center"
                              type="time"
                              name="starttime"
                              placeholder="開始時間"
                              aria-label="default input example"
                              onChange={handleFieldChange}
                            />
                          </div>
                          <div className="row flex-nowrap p-2 d-flex justify-content-center">
                            <h6 className={styles.input}>飼料種類</h6>
                            <select
                              class="form-select form-control T-18 rounded-5 border border-primary w-50 text-center p-0"
                              name="foodtype"
                              aria-label="default input example"
                              onChange={handleFieldChange}
                              required
                            >
                              <option value="0">飼料種類</option>
                              <option value="1">乾食</option>
                              <option value="2">濕食</option>
                              <option value="3">罐頭</option>
                              <option value="4">點心</option>
                            </select>
                          </div>
                          <div className="row flex-nowrap p-2 d-flex justify-content-center">
                            <h6 className={styles.input}>總量</h6>
                            <input
                              className="form-control T-18 rounded-5 border border-primary w-50 text-center"
                              type="number"
                              name="foodtotal"
                              min="1"
                              step="0.5"
                              required
                              placeholder="總量(g)"
                              aria-label="default input example"
                              onChange={handleFieldChange}
                            />
                          </div>
                          <div className="row flex-nowrap p-2 d-flex justify-content-center">
                            <h6 className={styles.input}>備註</h6>
                            <input
                              className="form-control T-18 rounded-5 border border-primary w-50 text-center"
                              style={{ height: '100px' }}
                              type="text"
                              name="memo"
                              maxLength="100"
                              placeholder="備註"
                              onChange={handleFieldChange}
                            />
                          </div>
                          {/* 下方欄位 */}
                          <div className="text-center m-2 p-2">
                            <div
                              className="d-flex justify-content-center"
                              style={{ gap: '24px' }}
                            >
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-lg"
                                style={{ width: 200 }}
                              >
                                刪除
                              </button>
                              <button
                                type="submit"
                                className="btn btn-danger btn-lg text-white"
                                style={{ width: 200 }}
                              >
                                儲存
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* 土司訊息視窗用 */}
              <Toaster />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
