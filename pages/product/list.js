import { useEffect, useState } from 'react'
// 解開以下可不接後端 接純假資料
// import data from '@/data/Product.json'
import { AB_PRODUCT_LIST } from '@/components/my-const'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function List() {
  const [data, setData] = useState({})
  const router = useRouter()

  const getListData = async () => {
    console.log('router.query:', router.query)
    let page = +router.query.page || 1
    if (page < 1) page = 1
    try {
      const r = await fetch(AB_PRODUCT_LIST + `?page=${page}`)
      const d = await r.json()

      setData(d)
    } catch (ex) {}
  }

  useEffect(() => {
    getListData()
  }, [router.query.page])

  return (
    <>
      <div className="web-style">
        <div className="row mt-2 mb-3">
          <h5 className="card-text d-flex justify-content-between align-items-center">
            <span className="ps-3">Nike Air Force 1 (91)</span>
            <div className="d-flex p-2 justify-content-end align-items-center">
              <div className="toolbar">
                <button className="btn btn-outline-primary" id="sidebarToggle">
                  隱藏篩選條件 <i className="bi bi-toggles"></i>
                </button>
              </div>
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
              <div className="bg-white me-5" id="sidebar-wrapper">
                <div className="scroll">
                  <div className="cats">
                    <div>
                      <button type="button" className="btn">
                        運動生活
                      </button>
                    </div>
                    <div>
                      <button type="button" className="btn">
                        當季新品
                      </button>
                    </div>
                    <div>
                      <button type="button" className="btn">
                        促銷
                      </button>
                    </div>
                  </div>

                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
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
                          性別
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
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          顏色
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body px-1">
                          <div className="d-flex flex-row justify-content-around mb-2">
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-circle"
                                  ></button>
                                </div>
                                <div className="color-f">紫色</div>
                              </div>
                            </div>
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-circle"
                                  ></button>
                                </div>
                                <div className="color-f">紫色</div>
                              </div>
                            </div>
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-circle"
                                  ></button>
                                </div>
                                <div className="color-f">紫色</div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-around mb-2">
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-circle"
                                  ></button>
                                </div>
                                <div className="color-f">紫色</div>
                              </div>
                            </div>
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-circle"
                                  ></button>
                                </div>
                                <div className="color-f">紫色</div>
                              </div>
                            </div>
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-circle"
                                  ></button>
                                </div>
                                <div className="color-f">紫色</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                              $1,500 - $3,000
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
                              $3,001 - $5,999
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
                    <div className="pages">
                      <div className="row">
                        <div className="col">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              {data.success && data.totalPages
                                ? Array(11)
                                    .fill(1)
                                    .map((v, i) => {
                                      const p = data.page - 5 + i
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
                                        >
                                          <Link
                                            className="page-link"
                                            href={'?page=' + p}
                                          >
                                            {p}
                                          </Link>
                                        </li>
                                      )
                                    })
                                : null}
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
