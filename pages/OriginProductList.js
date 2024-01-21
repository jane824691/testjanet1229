import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { PRODUCT } from '@/components/my-const'
import Link from 'next/link'
//import ProductItem from './ProductItem'
import {
  BsChevronRight,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
  BsChevronLeft,
} from 'react-icons/bs'

function ProductList() {
  const [data, setData] = useState({})
  const router = useRouter()

  //取page資料
  const getListData = async () => {
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

  console.log(data.rows)

  return (
    <>
      <div className="row mt-5 mb-5">
        {data.rows &&
          data.rows.slice(0, 4).map((v, i) => {
            return (
              <div
                className="col"
                key={v.pid}
                style={{ width: '13rem', marginRight: '10px', display: 'flex' }}
              >
                {/* <Link href={`/product/${v.pid}`} className="noline"> */}
                <span
                  className="card border-primary col"
                  style={{
                    width: '12.5rem',
                    marginRight: '10px',
                    display: 'flex',
                  }}
                >
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
                </span>
              </div>
            )
          })}
      </div>
      <div style={{display: 'flex', justifyContent: 'center' }} className='mb-5'>
        {' '}
        <button
          type="button"
          className="btn btn-outline-danger btn-lg rounded-5"
          style={{ width: 250}}
        >
          商城購物去
        </button>
      </div>
    </>
  )
}

export default ProductList
