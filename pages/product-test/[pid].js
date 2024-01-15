import { useEffect, useState } from 'react'
import Carousel from '@/components/product/carousel'
import { useRouter } from 'next/router'
import { ONE_PRODUCT } from '@/components/my-const'
import { useCart } from '@../../../components/hooks/use-cart-state'
// import data from '@/data/Product.json'

export default function Detail() {
  const { addItem } = useCart()

  // 試帶商品QTY傳給Cart
  const [total, setTotal] = useState(1)

  const [myProduct, setMyProduct] = useState({
    pid: '',
    name: '',
    price: '',
    info: '',
  })

  //跳轉用
  const router = useRouter()

  // 去抓後端處理好的單筆資料
  useEffect(() => {
    const fetchData = async () => {
      const pid = +router.query.pid
      console.log({ pid, raw: router.query.pid })

      try {
        const response = await fetch(ONE_PRODUCT + `/${pid}`)
        const productData = await response.json()
        console.log('productData:', productData)
        setMyProduct(productData)
      } catch (error) {
        console.error('Error fetching product data:', error)
      }
    }

    // 呼叫 fetchData 以觸發資料載入
    fetchData()
  }, [router.query.pid])



  return (
    <>
      <div className="row mt-5 mx-2">
        <div className="col-sm-7">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel />
          </div>
        </div>

        <div className="col-sm-5 d-grid gap-2">
          <h4 id="name" name="name">
            {myProduct.product_name}
          </h4>

          <p className="product-desc">{myProduct.product_description}</p>

          <h5 className="text-danger">
            <span>NT$ </span>
            {myProduct.product_price}
          </h5>
          <div className="col-2 ">
            <div className="d-flex amount-btn-group-wide">
              <button
                type="button"
                className="btn btn-outline-secondary amount-btnL"
                onClick={() => {
                  setTotal(total - 1)
                }}
              >
                -
              </button>
              <div className="form-control rounded-2 text-center amount-form">
                {total}
              </div>

              <button
                type="button"
                className="btn btn-outline-secondary amount-btnR"
                onClick={() => {
                  setTotal(total + 1)
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className="d-flex">
            <button
              className="btn btn-outline-primary add-cart"
              onClick={() => {
                addItem({
                  pid: myProduct.pid,
                  name: myProduct.product_name,
                  quantity: total,
                  price: myProduct.product_price,
                })
              }}
            >
              <i className="bi bi-cart"></i> <div> 加入購物車</div>
            </button>
            <button
              className="btn btn-danger text-white add-cart-danger"
              onClick={() => {
                addItem({
                  pid: myProduct.pid,
                  name: myProduct.product_name,
                  quantity: total,
                  price: myProduct.product_price,
                })
                router.push('../cart/OrderSteps')
              }}
            >
              加入並前往結帳
            </button>
          </div>

          <div className="product-info my-5">
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
                    尺寸與版型
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <ul>
                      <li>版型較大，建議訂購小半號</li>
                      <li>尺寸：尺寸指南</li>
                    </ul>
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
                    免費寄送及退貨
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <p>訂單金額滿新臺幣 4,500 元即享免費標準運送服務</p>
                    <p>
                      臺北市:標準運送的商品可於 2-5 個工作天內送達
                      快遞運送的商品可於 2-3 個工作天內送達
                    </p>
                    <p>
                      其它縣市: 標準運送的商品可於 3-6 個工作天內送達
                      快遞運送的商品可於 3-5 個工作天內送達
                    </p>
                    <p>訂單皆於星期一至星期五之間處理與寄送 (國定假日除外)</p>
                    <p>會員享免費退貨服務免費退貨。退貨政策例外情況。</p>
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
                    評價(370){'  '}
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <div className="commet">
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                      </div>
                      <p>great shoes overall Ella579458843 - 2023年6月19日</p>
                      <p>
                        overall one of my favorite shoes at the moment. go with
                        any of my outfits, i can wear sweatpants with them or to
                        a nice dinner with a dress. the only “problem” i have
                        with them is that they’re difficult to break into even
                        if you half size up, it took me a while to break into
                        them. but overall i recommend these shoes if you just
                        want some great shoes for any occasion.... 更多
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-2">
        <div className="col-sm-12">
          <h4 className="text-center mb-5">探索 Nike Air Force 1005 女鞋</h4>
          <img
            className="w-100  my-5 "
            src="/images/product/detail/info-1.webp"
          />
          <p className="text-center my-5 font-weight-light fs-4">
            鞋面採用車縫皮革裝飾片，全面提升經典指標性、耐久性和支撐力。
          </p>
          <img
            className="w-100  my-5 "
            src="/images/product/detail/info-2.webp"
          />
          <p className="text-center my-5 font-weight-light fs-4">
            低筒版型，造型俐落簡練。
          </p>
        </div>
      </div>
    </>
  )
}
