import { useEffect, useState } from 'react'
// 解開以下可不接後端 接純假資料
// import data from '@/data/Product.json'
import { PRODUCT } from '@/components/my-const'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ReactBsCarousel from '@/components/product/ReactBsCarousel'
import { BsSearch } from 'react-icons/bs'
import {
  BsChevronRight,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
  BsChevronLeft,
} from 'react-icons/bs'
import Pagination from 'react-bootstrap/Pagination'

export default function List() {
  const [data, setData] = useState({})
  const router = useRouter()

  //取page資料
  const getListData = async () => {
    console.log('router.query:', router.query)
    let page = +router.query.page || 1
    if (page < 1) page = 1
    try {
      const r = await fetch(PRODUCT + `?page=${page}`)
      const d = await r.json()

      setData(d)
    } catch (ex) {}
  }

  useEffect(() => {
    getListData()
  }, [router.query.page])

  return (
    <>
      <ReactBsCarousel />
      <div className="web-style">
        <div className="row mt-2 mb-3">
          <h5 className="card-text d-flex justify-content-between align-items-center">
            <span className="ps-3">Nike Air Force 1 (91)</span>
            <div className="d-flex p-2 justify-content-end align-items-center">
              <div className="dropdown">
                <button
                  className="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  排序依據
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      最新
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      價格：由高至低
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      價格：由低至高
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </h5>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex" id="wrapper">
              <div className="bg-white me-3" id="sidebar-wrapper">
                <div className="scroll" style={{ width: '15rem' }}>
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    {/* 搜尋bar */}
                    <div>
                      <form className="navbar-form navbar-left" role="search">
                        <div className="search-group">
                          <h5 className="mb-3">篩選</h5>
                          <input
                            type="text"
                            className="form-control rounded-5 search-input search-bar mb-3"
                            placeholder="請輸入關鍵字"
                          />
                          <BsSearch
                            className="BsSearch"
                            style={{ color: '#FFB44F' }}
                          />
                        </div>
                      </form>
                    </div>
                    {/* 分類 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          分類
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body px-1">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              男性
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              女性
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              中性
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 價格範圍 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          價格範圍
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body px-1">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              All Price
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              $0 - $999
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              $1000 - $1999
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              $2000 - $2999
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              $3000 - $3999
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="page-content-wrapper">
                <div className="container-fluid">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* 如果想看純前端畫面(X後端)可解開以下帶JSON假資料 */}
                    {/* {data.map((v, i) => { */}
                    {data.rows &&
                      data.rows.map((v, i) => {
                        return (
                          <div className="col" key={v.pid}>
                            <Link href={`/product/${v.pid}`} className="noline">
                              <div className="card border-primary">
                                <img
                                  src="/images/product/638348807730300000 (1).jfif"
                                  alt="name of product"
                                  className="card-img-top"
                                />
                                <div className="card-body no-space-x">
                                  <p className="card-text">{v.product_name}</p>
                                  <span className="h-currency bold h-now">
                                    <span>NT$ </span>
                                    {v.product_price}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                      })}

                    {/* 頁碼 */}
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
                                      data.page === 1
                                        ? 'transparent'
                                        : 'transparent',
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
                                      data.page === 1
                                        ? 'transparent'
                                        : 'transparent',
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
                                      if (p < 1 || p > data.totalPages)
                                        return null
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
                                              p === data.page
                                                ? 'active-link'
                                                : ''
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
                                              color:
                                                p === data.page ? '#fff' : '',
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
                                    data.page === data.totalPages
                                      ? 'disabled'
                                      : ''
                                  }`}
                                  href={`?page=${data.page + 1}`}
                                  style={{
                                    background:
                                      data.page === data.totalPages
                                        ? 'transparent'
                                        : 'transparent',
                                    border: 'none',
                                    color:
                                      data.page === data.totalPages
                                        ? '#B0B7C3'
                                        : '', // 新增此行
                                  }}
                                >
                                  <BsChevronRight />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={`page-link ${
                                    data.page === data.totalPages
                                      ? 'disabled'
                                      : ''
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
                                    color:
                                      data.page === data.totalPages
                                        ? '#B0B7C3'
                                        : '', // 新增此行
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
