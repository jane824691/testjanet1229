import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ORDER_LIST } from '@/components/my-const'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
//import ProductItem from './ProductItem'

import {
  BsChevronRight,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
  BsChevronLeft,
} from 'react-icons/bs'

export default function MemberOrderList() {
  const [data, setData] = useState({})
  const router = useRouter()

  //取page資料
  const getListData = async () => {
    let page = +router.query.page || 1
    if (page < 1) page = 1
    try {
      const r = await fetch(ORDER_LIST + `?page=${page}`)
      const d = await r.json()
      setData(d)
    } catch (ex) {}
  }

  useEffect(() => {
    getListData()
  }, [router.query.page])
  return (
    <>
      <div className="container ">
      <h3>購物清單</h3>
        {data.rows &&
          data.rows.map((v, i) => {
            return (
              <form className="list-form" key={v.oid}>
                <div className="d-flex justify-content-center">
                  <div className="direction-column">
                    <div
                      className="card border-primary"
                      style={{ width: '40rem' }}
                    >
                      <div
                        className="card-header card-big-title border border-0"
                        style={{ backgroundColor: 'transparent ' }}
                      >
                        訂單編號：{v.oid}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title font-grey-title mb-2">
                          訂單成立時間：
                          {dayjs(v.order_date).format('YYYY-MM-DD HH:mm:ss')}
                        </h5>
                        <h5 className="card-title font-grey-title mb-2 ">
                          付款方式：{v.pay_way}
                        </h5>
                        <h5 className="card-title font-grey-title mb-2 text-info">
                          付款情況：
                          {v.order_status === 1
                            ? '已付款'
                            : v.order_status === 0
                            ? '未付款'
                            : ''}
                        </h5>
                        <h5 className="card-title font-grey-title mb-2">
                          交貨方式：{v.delivery_way}
                        </h5>
                        <h5 className="card-title font-grey-title mb-2 text-success">
                          處理情況：{v.delivery_status}
                        </h5>
                        <h5 className="card-title font-grey-title mb-2 text-danger">
                          總金額：NT$ {v.total}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )
          })}
        {/* 頁碼 */}
        <div
          style={{ display: 'flex', justifyContent: 'center' }}
          className="mb-5"
        >
          <div className="pages mx-auto">
            <div className="row">
              <div className="col">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li>
                      <Link
                        className={`page-link ${
                          data.page === 1 ? 'disabled' : ''
                        }`}
                        href={data.page !== 1 ? `?page=${1}` : '#'}
                        style={{
                          background:
                            data.page === 1 ? 'transparent' : 'transparent',
                          border: 'none',
                          color: data.page === 1 ? '#B0B7C3' : '', // 新增此行
                        }}
                      >
                        <BsChevronDoubleLeft />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`page-link ${
                          data.page === 1 ? 'disabled' : ''
                        }`}
                        href={`?page=${data.page - 1}`}
                        style={{
                          background:
                            data.page === 1 ? 'transparent' : 'transparent',
                          border: 'none',
                          color: data.page === 1 ? '#B0B7C3' : '', // 新增此行
                        }}
                      >
                        <BsChevronLeft />
                      </Link>
                    </li>
                    {data.success && data.totalPages
                      ? Array(7)
                          .fill(1)
                          .map((v, i) => {
                            const p = data.page - 3 + i
                            if (p < 1 || p > data.totalPages) return null
                            return (
                              <li
                                key={p}
                                className={
                                  p === data.page
                                    ? 'page-item active'
                                    : 'page-item'
                                }
                                style={{ marginRight: '6px' }}
                              >
                                <Link
                                  className={`page-link ${
                                    p === data.page ? 'active-link' : ''
                                  }`}
                                  href={'?page=' + p}
                                  style={{
                                    borderRadius: '10px',
                                    border:
                                      p === data.page
                                        ? '1px solid #FFB44F'
                                        : '1px solid ',
                                    backgroundColor:
                                      p === data.page
                                        ? '#f8723f'
                                        : 'transparent', // 新增此行
                                    color: p === data.page ? '#fff' : '',
                                    width: '38px',
                                    textAlign: 'center',
                                  }}
                                >
                                  {p}
                                </Link>
                              </li>
                            )
                          })
                      : null}
                    <li>
                      <Link
                        className={`page-link ${
                          data.page === data.totalPages ? 'disabled' : ''
                        }`}
                        href={`?page=${data.page + 1}`}
                        style={{
                          background:
                            data.page === data.totalPages
                              ? 'transparent'
                              : 'transparent',
                          border: 'none',
                          color: data.page === data.totalPages ? '#B0B7C3' : '', // 新增此行
                        }}
                      >
                        <BsChevronRight />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`page-link ${
                          data.page === data.totalPages ? 'disabled' : ''
                        }`}
                        href={
                          data.page !== data.totalPages
                            ? `?page=${data.totalPages}`
                            : '#'
                        }
                        style={{
                          background:
                            data.page === data.totalPages
                              ? 'transparent'
                              : 'transparent',
                          border: 'none',
                          color: data.page === data.totalPages ? '#B0B7C3' : '', // 新增此行
                        }}
                      >
                        <BsChevronDoubleRight />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
