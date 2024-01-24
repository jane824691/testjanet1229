import { useEffect, useState } from 'react'
import axios from 'axios'
import { MdPets } from 'react-icons/md'
import styles from '@/css/pettoday.module.css'
import { CiForkAndKnife } from 'react-icons/ci'
import { FaPoo } from 'react-icons/fa6'
import { FaBath } from 'react-icons/fa'
import { FaSyringe } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Link from 'next/link'
// 載入分頁元件
import BS5Pagination from '@/components/common/bs5-pagination'

import VerticalNavBar from '@/pages/diary/vertical-nav-bar'

import { useRouter } from 'next/router'

function DiaryIcon({ diaryType }) {
  switch (diaryType) {
    case 1:
      return <CiForkAndKnife className={styles.statusicon} />
    case 2:
      return <FaPoo className={styles.statusicon} />
    case 3:
      return <MdPets className={styles.statusicon} />
    case 4:
      return <FaBath className={styles.statusicon} />
    case 5:
      return <FaSyringe className={styles.statusicon} />
    default:
      return <CiForkAndKnife className={styles.statusicon} />
  }
}

export default function Home() {
  // const [data, setData] = useState({})
  const router = useRouter()
  const [pet_id, setPetId] = useState(1)
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

  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(5)

  // 最後得到的項目
  const [itemTotal, setItemTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [items, setItems] = useState([])

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

  //取page資料
  const getTodayListData = async (params) => {
    // 用URLSearchParams產生查詢字串
    const searchParams = new URLSearchParams(params)

    // console.log(searchParams.toString())

    const res = await axios.get(
      `http://localhost:3002/diary/today/list?${searchParams.toString()}`
    )

    if (res.data.status === 'success') {
      // 設定獲取頁數總合
      setItemTotal(res.data.data.total)
      // 設定獲取項目
      setItems(res.data.data.diary)
      setPage(res.data.data.page)
      setPageCount(res.data.data.pageCount)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      // 從router.query得到所有查詢字串參數
      const { page, pet_id } = router.query
      // 要送至伺服器的query string參數

      // 設定回所有狀態(注意所有從查詢字串來都是字串類型)，都要給預設值
      setPage(Number(page) || 1)
      setPetId(Number(pet_id) || 1)

      const query = {
        page: page,
        pet_id: pet_id,
      }
      // 載入資料
      getTodayListData(query)
    }
  }, [router.query, router.isReady])

  // 點按分頁時，要送至伺服器的query string參數
  const handlePageClick = (event) => {
    router.push({
      pathname: router.pathname,

      query: {
        ...router.query,
        page: event.selected + 1,
      },
    })
  }

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
                <Link className={styles.titleline1} href={`/diary/status?pet_id=${pet_id}`}>
                    最新動態
                  </Link>
                </h4>
              </div>
              <div>
                <h4>
                  <Link className={styles.titleline} href={`/diary/today?pet_id=${pet_id}`}>
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
              <div className="col-sm-7 border border-primary rounded-5">
                <div className="row gx-5 border-bottom border-warning m-1">
                  <div className="col">
                    <div className={styles.center1}>全部</div>
                  </div>
                  <div className="col">
                    <div className={styles.center1}>給食</div>
                  </div>
                  <div className="col">
                    <div className={styles.center1}>便所</div>
                  </div>
                  <div className="col">
                    <div className={styles.center1}>運動</div>
                  </div>
                  <div className="col">
                    <div className={styles.center1}>醫療</div>
                  </div>
                  <div className="col">
                    <div className={styles.center1}>美容</div>
                  </div>
                </div>
                <div className="row flex-nowrap p-2 m-1 d-flex align-items-center d-flex justify-content-center border-bottom border-warning">
                  <div className={styles.date}>
                    <p>
                      <span className={styles.year}>2024</span>16
                      <span className={styles.month}>May</span>
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <h6 className={styles.center1}>乾飼料600公克/2次</h6>
                    <h6 className={styles.center1}>大便1次/小便1次</h6>
                    <h6 className={styles.center1}>運動2小時/2次</h6>
                  </div>
                  <Link
                    href="today/add"
                    role="button"
                    style={{
                      width: '6rem',
                      padding: '0px',
                      justifyContent: 'center',
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm col-lg-6"
                    >
                      新增
                    </button>
                  </Link>
                </div>

                {items.map((v) => {
                  return (
                    <div
                      className="row flex-nowrap p-4 d-flex align-items-center d-flex justify-content-center"
                      key={v.diary_id}
                    >
                      <DiaryIcon diaryType={v['Act.act_parent_id']} />
                      <div className="col-lg-5">
                        <h6 className={styles.center1}>{v.diary_date_time}</h6>
                        <h6 className={styles.center1}>{v.text}</h6>
                      </div>
                      <BsThreeDotsVertical className={styles.centericon} />
                    </div>
                  )
                })}
              </div>
              <div style={{ display: 'flex', 'justify-content': 'center' ,padding:'2rem'}}>
                <BS5Pagination
                  forcePage={page - 1}
                  onPageChange={handlePageClick}
                  pageCount={pageCount}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
