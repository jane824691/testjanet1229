import { useEffect, useState } from 'react'
// 解開以下可不接後端 接純假資料
// import data from '@/data/Product.json'
import ReactBsCarousel from '@/components/product/ReactBsCarousel'
import SortBar from './components/SortBar/'
import SearchBar from './components/SearchBar/'
import FilterBar from './components/FilterBar/'
import ProductList from './components/ProductList'

export default function List() {


  // 產品用的資料
  // 1. 從伺服器來的原始資料
  const [products, setProducts] = useState([])
  // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
  const [displayProducts, setDisplayProducts] = useState([])

  // 下面tagTypes是對應到checkbox表單元素
  const [tags, setTags] = useState([])
  const tagTypes = [
    '乾飼料',
    '罐頭',
    '保健食品',
    '寵物衣裝',
    '美容護理',
    '抓板玩具',
    '生活用品',
    '溜繩',
    '寵物外出包',
  ]

  // radio
  const [priceRange, setPriceRange] = useState('所有')
  const priceRangeTypes = [
    '所有',
    '$1 - $999',
    '$1000 - $1999',
    '$2000 - $2999',
    '$3000 - $3999',
  ]

  
  // 四個表單元素的處理方法
  const handleSearch = (products, searchWord) => {
    let newProducts = [...products]
    console.log([...products]);

    if (searchWord.length) {
      newProducts = products.filter((product) => {
        // includes -> String API
        return product.name.includes(searchWord)
      })
    }

    return newProducts
  }

  const [searchWord, setSearchWord] = useState('')
  const [sortBy, setSortBy] = useState('')

  //處理價格排序
  const handleSort = (products, sortBy) => {
    let newProducts = [...products]

    // 以價格排序-由少至多
    if (sortBy === '1') {
      newProducts = [...newProducts].sort((a, b) => a.price - b.price)
    }

    if (sortBy === '2') {
      newProducts = [...newProducts].sort((a, b) => b.price - a.price)
    }

    // 預設用id 小至大
    if (sortBy === '' && newProducts.length > 0) {
      newProducts = [...newProducts].sort((a, b) => a.id - b.id)
    }

    return newProducts
  }

  const handleTags = (products, tags) => {
    let newProducts = [...products]

    // tags = 代表使用者目前勾選的標籤陣列
    //console.log(tags)

    // 處理勾選標記
    if (tags.length > 0) {
      newProducts = [...newProducts].filter((product) => {
        let isFound = false

        // 原本資料裡的tags字串轉為陣列
        const productTags = product.tags.split(',')

        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < tags.length; i++) {
          // includes -> Array api
          if (productTags.includes(tags[i])) {
            isFound = true // 找到設為true
            break // 找到一個就可以，中斷迴圈
          }
        }

        return isFound
      })
    }

    return newProducts
  }

  const handlePriceRange = (products, priceRange) => {
    let newProducts = [...products]

    // 處理價格區間選項
    switch (priceRange) {
      case '1萬以下':
        newProducts = products.filter((p) => {
          return p.price <= 10000
        })
        break
      case '1~2萬':
        newProducts = products.filter((p) => {
          return p.price >= 10000 && p.price <= 20000
        })
        break
      // 指所有的產品都出現
      default:
        break
    }

    return newProducts
  }

    // 當四個過濾表單元素有更動時
  // componentDidUpdate + didMount
  // ps. 一開始也會載入
  useEffect(() => {
    // 搜尋字串太少不需要搜尋
    if (searchWord.length < 3 && searchWord.length !== 0) return

    // 先開起載入指示器
    //    setIsLoading(true)

    let newProducts = []

    // 處理搜尋
    newProducts = handleSearch(products, searchWord)

    // 處理排序
    newProducts = handleSort(newProducts, sortBy)

    // 處理勾選標記
    newProducts = handleTags(newProducts, tags)

    // 處理價格區間選項
    newProducts = handlePriceRange(newProducts, priceRange)

    setDisplayProducts(newProducts)
  }, [searchWord, products, sortBy, tags, priceRange])




  return (
    <>
      <ReactBsCarousel />
      <div className="web-style">
        <div className="row mt-2 mb-3">
          <h5 className="card-text d-flex justify-content-between align-items-center">
            <span className="ps-3">Nike Air Force 1 (91)</span>
            {/* 價格排序 */}
            <SortBar sortBy={sortBy} setSortBy={setSortBy} />
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
                    {/* 搜尋欄 */}
                    <SearchBar />

                    {/* 價格範圍 */}
                    <FilterBar
                      priceRangeTypes={priceRangeTypes}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      tagTypes={tagTypes}
                      tags={tags}
                      setTags={setTags}
                    />
                  </div>
                </div>
              </div>

              <div id="page-content-wrapper">
                <div className="container-fluid">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* 如果想看純前端畫面(X後端)可解開以下帶JSON假資料 */}
                    {/* {data.map((v, i) => { */}
<ProductList/>
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