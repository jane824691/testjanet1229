import { useEffect, useState } from 'react'
import styles from '@/css/petcalculator.module.css'
import VerticalNavBar from '@/pages/diary/vertical-nav-bar'

export default function Home() {
  const [pet_info, setPetInfo] = useState({
    type: 'cat',
    weight: '0',
    age: '0',
    status: '0',
  })

  const [dailyCalories, setDailyCalories] = useState(0)
  const [dailyWater, setdailyWater] = useState(0)

  const getBaselineMetabolicRate = (animal, weight) => {
    const baseMetabolicRates = {
      dog: {
        small: 40,
        medium: 35,
        large: 25,
      },
      cat: {
        small: 40,
        medium: 35,
        large: 30,
      },
    }

    if (animal == 'dog') {
      return baseMetabolicRates[animal][
        weight < 9 ? 'small' : weight < 22 ? 'medium' : 'large'
      ]
    } else {
      return baseMetabolicRates[animal][
        weight < 4.5 ? 'small' : weight < 9 ? 'medium' : 'large'
      ]
    }
  }

  const getActivityCoefficient = (activityFactor) => {
    return activityFactor === '1.5' ? 1.5 : activityFactor === '2.0' ? 2.0 : 1.0
  }

  const getDailyWater = (weight) => {
    return weight * 2.5
  }

  const handleFieldChange = (e) => {
    setPetInfo({ ...pet_info, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    // 計算基礎代謝率
    const baseMetabolicRate = getBaselineMetabolicRate(
      pet_info.type,
      Number(pet_info.weight)
    )

    // 計算活動係數
    const activityCoefficient = Number(pet_info.age)

    // 計算每日卡路里
    setDailyCalories(
      Math.round(
        Number(pet_info.weight) *
          baseMetabolicRate *
          activityCoefficient *
          Number(pet_info.status)
      )
    )
    // 計算每日所需水分
    setdailyWater(getDailyWater(Number(pet_info.weight)))
  }, [pet_info])

  return (
    <>
      <main className={styles.main}>
        {/* 左邊欄位 */}
        <VerticalNavBar focused="calculator" />
        {/* 左邊欄位 */}

        {/* 右上標題 */}
        <div className={styles.myBody}>
          <div className={styles.mypetList}>
            <div className="d-flex justify-content-around w-75 align-items-baseline mx-5">
              <div>
                <h4 className={styles.titleline}>熱量和水建議攝取量</h4>
              </div>
            </div>
          </div>
          {/* 右上標題 */}
          {/* 中間卡片 */}
          <div className={styles.myBody1}>
            <div className={styles.myBodylist}>
              <div className="col-sm-7 border border-primary rounded-5">
                <div className="row border-bottom border-warning m-1">
                  <div class="col my-1">
                    <h8 className={styles.center}>基本資料</h8>
                  </div>
                </div>
                <div className="row flex-nowrap p-2 m-1 d-flex align-items-center d-flex justify-content-center border-warning">
                  <form>
                    <div className="">
                      <div className="card-body">
                        <div className="col ">
                          <div className="row flex-nowrap p-2 d-flex justify-content-center mt-3">
                            <h6 className={styles.input}>種類</h6>
                            <select
                              class="form-select form-control T-18 rounded-5 border border-primary w-50 text-center p-0"
                              name="type"
                              onChange={handleFieldChange}
                              required
                            >
                              <option value="0">寵物種類</option>
                              <option value="cat">猫</option>
                              <option value="dog">狗</option>
                            </select>
                          </div>
                          <div className="row flex-nowrap p-2 d-flex justify-content-center">
                            <h6 className={styles.input}>體重</h6>
                            <input
                              className="form-control T-18 rounded-5 border border-primary w-50 text-center"
                              type="number"
                              name="weight"
                              max="200"
                              min="1"
                              step="0.1"
                              required
                              placeholder="體重(Kg)"
                              aria-label="default input example"
                              onChange={handleFieldChange}
                            />
                          </div>
                          <div className="row flex-nowrap p-2 d-flex justify-content-center">
                            <h6 className={styles.input}>年齡</h6>
                            <select
                              class="form-select form-control T-18 rounded-5 border border-primary w-50 text-center p-0"
                              name="age"
                              onChange={handleFieldChange}
                              required
                            >
                              <option value="0">選擇類型</option>
                              <option value="2.0">幼年</option>
                              <option value="1.5">成年</option>
                              <option value="1.0">高齡</option>
                            </select>
                          </div>
                          <div className="row flex-nowrap p-2 d-flex justify-content-center">
                            <h6 className={styles.input}>類型</h6>
                            <select
                              class="form-select form-control T-18 rounded-5 border border-primary w-50 text-center p-0"
                              name="status"
                              onChange={handleFieldChange}
                              required
                            >
                              <option value="0">選擇類型</option>
                              <option value="1.0">一般</option>
                              <option value="1.5">懷孕中</option>
                              <option value="2.0">哺乳中</option>
                              <option value="0.7">要減肥的</option>
                              <option value="1.2">要增重的</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 下方欄位 */}
                    {/* <div className="text-center mt-5">
                      <div
                        className="d-flex justify-content-center"
                        style={{ gap: '24px' }}
                      >
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-lg"
                          style={{ width: 100 }}
                        >
                          取消
                        </button>
                        <button
                          type="submit"
                          className="btn btn-danger btn-lg text-white"
                          style={{ width: 100 }}
                        >
                          送出
                        </button>
                      </div>
                    </div> */}
                  </form>
                </div>
              </div>
              <div className="col-sm-7 border border-primary rounded-5 mt-5">
                <div className="row border-bottom border-warning m-1">
                  <div class="col my-1">
                    <h8 className={styles.center}>建議量計算結果</h8>
                  </div>
                </div>
                <div className="row flex-nowrap p-2 m-1 d-flex align-items-center d-flex justify-content-center border-warning">
                  <form>
                    <div className="">
                      <div className="card-body">
                        <div className="col ">
                          <div className="row flex-nowrap p-2 d-flex justify-content-center">
                            <h6 className={styles.input1}>
                              單日水量攝取建議量：
                            </h6>
                            <div className={styles.calcuation}>
                              <span>{dailyWater} 毫升(ml)</span>
                            </div>
                          </div>
                          <div className="row flex-nowrap p-2 d-flex justify-content-center">
                            <h6 className={styles.input1}>
                              單日熱量攝取建議量：
                            </h6>
                            <div className={styles.calcuation}>
                              <span>{dailyCalories} 大卡(kCal)</span>
                            </div>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <h7>計算數值僅供參，考實際攝取量請諮詢專業獸醫師建議</h7>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
