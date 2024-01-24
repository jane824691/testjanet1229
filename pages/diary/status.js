import { useEffect, useState } from 'react'
import { MdPets } from 'react-icons/md'
import axios from 'axios'
import styles from '@/css/petstatus.module.css'
import { CiForkAndKnife } from 'react-icons/ci'
import { FaRegBell } from 'react-icons/fa'
import { FaPoo } from 'react-icons/fa6'
import { FaBath } from 'react-icons/fa'
import { FaSyringe } from 'react-icons/fa'
import Link from 'next/link'

import VerticalNavBar from '@/pages/diary/vertical-nav-bar'

import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [pet_id, setPetId] = useState(0)
  const [pet, setPet] = useState({
    pet_owner_id: '0',
    pet_name: 'BOM',
    pet_type: '狗', // FIXME: hard code
    pet_breed: '',
    pet_birthday: '',
    pet_chip_id: '',
    pet_gender: '',
    pet_height: '',
    pet_weight: '',
    pet_avatar: 'default.jpg',
  })

  //取寵物資料
  const getPetData = async (pet_id) => {
    const res = await axios.get(
      `http://localhost:3002/diary/pet/list/${pet_id}`
    )

    if (res.data.status === 'success') {
      // 設定獲取項目
      setPet(res.data.data.pet)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      // 從router.query得到所有查詢字串參數
      const { pet_id } = router.query
      setPetId(pet_id)

      // 載入資料
      getPetData(pet_id)
    }
  }, [router.query, router.isReady])

  useEffect(() => {
    setPetId(router.query.pet_id)
  }, [])

  return (
    <>
      <main className={styles.main}>
        {/* 左邊欄位 */}
        <VerticalNavBar
          focused="diary"
          pet_name={pet.pet_name}
          pet_pic={pet.pet_avatar}
        />
        {/* 左邊欄位 */}

        {/* 右上標題 */}
        <div className={styles.myBody}>
          <div className={styles.mypetList}>
            <div className="d-flex justify-content-around w-75 align-items-baseline ">
              <div>
                <h4>
                  <Link className={styles.titleline} href={`/diary/status?pet_id=${pet_id}`}>
                    最新動態
                  </Link>
                </h4>
              </div>
              <div>
                <h4>
                  <Link className={styles.titleline1} href={`/diary/today?pet_id=${pet_id}`}>
                    今日動態
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          {/* 右上標題 */}
          {/* 中間卡片 */}
          <div className={styles.myBody1}>
            <div className={styles.myBodylist}>
              <div className="col-lg-6 border border-primary rounded-5 ">
                <div className="row flex-nowrap p-4 d-flex align-items-center d-flex justify-content-center">
                  <CiForkAndKnife className={styles.statusicon} />
                  <div className="col-lg-5">
                    <h6 className={styles.center1}>1小時30分鐘前</h6>
                    <h6 className={styles.center1}>乾飼料300公克</h6>
                  </div>
                  <FaRegBell className={styles.centericon} />
                </div>
                <div className="row flex-nowrap p-4 d-flex align-items-center d-flex justify-content-center">
                  <FaPoo className={styles.statusicon} />
                  <div className="col-lg-5">
                    <h6 className={styles.center1}>1小時20分鐘前</h6>
                    <h6 className={styles.center1}>大便</h6>
                  </div>
                  <FaRegBell className={styles.centericon} />
                </div>
                <div className="row flex-nowrap p-4 d-flex align-items-center d-flex justify-content-center">
                  <MdPets className={styles.statusicon} />
                  <div className="col-lg-5">
                    <h6 className={styles.center1}>3小時30分鐘前</h6>
                    <h6 className={styles.center1}>散步40分鐘</h6>
                  </div>
                  <FaRegBell className={styles.centericon} />
                </div>
                <div className="row flex-nowrap p-4 d-flex align-items-center d-flex justify-content-center">
                  <FaBath className={styles.statusicon} />
                  <div className="col-lg-5">
                    <h6 className={styles.center1}>6小時前</h6>
                    <h6 className={styles.center1}>洗澡</h6>
                  </div>
                  <FaRegBell className={styles.centericon} />
                </div>
                <div className="row flex-nowrap p-4 d-flex align-items-center d-flex justify-content-center">
                  <FaSyringe className={styles.statusicon} />
                  <div className="col-lg-5">
                    <h6 className={styles.center1}>5小時30分鐘前</h6>
                    <h6 className={styles.center1}>化毛膏</h6>
                  </div>
                  <FaRegBell className={styles.centericon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
