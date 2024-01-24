import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '@/css/diary.module.css'
import Link from 'next/link'
import { BsPencilSquare } from 'react-icons/bs'
import AuthContext from '@/components/contexts/AuthContext'
import { useContext } from 'react'
// 載入分頁元件
import BS5Pagination from '@/components/common/bs5-pagination'

import VerticalNavBar from '@/pages/diary/vertical-nav-bar'

import { useRouter } from 'next/router'

export default function Home() {
  // const [data, setData] = useState({})
  const router = useRouter()
  const [owner, setOwner] = useState(1)
  const { auther } = useContext(AuthContext)

  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(5)

  // 最後得到的項目
  const [itemTotal, setItemTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [items, setItems] = useState([])

  //取page資料
  const getPetListData = async (params) => {
    // 用URLSearchParams產生查詢字串
    const searchParams = new URLSearchParams(params)

    // console.log(searchParams.toString())

    const res = await axios.get(
      `http://localhost:3002/diary/pet/list?${searchParams.toString()}`
    )

    if (res.data.status === 'success') {
      // 設定獲取頁數總合
      setItemTotal(res.data.data.total)
      // 設定獲取項目
      setItems(res.data.data.pets)
      setPage(res.data.data.page)
      setPageCount(res.data.data.pageCount)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      // 從router.query得到所有查詢字串參數
      const { page } = router.query
      // 要送至伺服器的query string參數

      // 設定回所有狀態(注意所有從查詢字串來都是字串類型)，都要給預設值
      setPage(Number(page) || 1)
      // setOwner(Number(owner_id) || 1)

      const query = {
        page: page,
        owner_id: auther.sid,
      }
      // 載入資料
      getPetListData(query)
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
          focused='info'
        />
        {/* 左邊欄位 */}

        {/* 右上標題 */}
        <div className={styles.myBody}>
          <div className={styles.mypetList}>
            <div className="d-flex justify-content-between w-100 align-items-baseline p-2">
              <h4>我的毛孩</h4>

              <Link href="diary/pet/add" role="button">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                >
                  新增
                </button>
              </Link>
            </div>
          </div>
          {/* 右上標題 */}
          {/* 中間卡片 */}
          <div>
            <div className="container">
              <div className="row g-2">
                {items.map((v) => {
                  return (
                    <div className="col-4" key={v.pet_id}>
                      <div className="p-3 border border-primary rounded-5">
                        <div className="row g-2 flex-nowrap">
                          <div className="col-4">
                            <Link className={styles.iconLink} href={`/diary/status?pet_id=${v.pet_id}`}>
                              <img
                                className={styles.petCard}
                                src={`http://localhost:3002/img/avatar/pet/${v.pet_avatar}`}
                                alt="PetHeadpic"
                                width={80}
                                height={100}
                              />
                            </Link>
                          </div>
                          <div className="col-7">
                            <p className="card-text note-text">
                              姓名：{v.pet_name}
                            </p>
                            <p className="card-text">
                              生日/領養日：{v.pet_birthday}
                            </p>
                            {/* TODO: 生日換算成年齡 */}
                            <p className="card-text type-text">
                              品種：{v.pet_breed}
                            </p>
                          </div>
                          <div className="col-1" >
                            <Link className={styles.iconLink} href={`/diary/pet/edit?pet_id=${v.pet_id}`}>
                              <BsPencilSquare className={styles.notify} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          {/* 中間卡片 */}
          <br></br>

          <div style={{ display: 'flex', 'justify-content': 'center' }}>
            <BS5Pagination
              forcePage={page - 1}
              onPageChange={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </div>
      </main>
    </>
  )
}
