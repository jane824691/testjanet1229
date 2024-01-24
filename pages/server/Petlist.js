import axiosInstance from './axios-instance'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { useState } from 'react'

/**
 * 載入商品的資料，一般的axios使用get方式
 */
export const getPetlist = async (
  searchCriteria = {},
  pageNow = 1,
  perpage = 5
) => {
  const searchParams = new URLSearchParams(searchCriteria)
  return await axiosInstance.get(
    `/pet/list?&page=${pageNow}&perpage=${perpage}&${searchParams.toString()}`
  )
}

export const fetchPetlist = (url) =>
  axiosInstance.get(url).then((res) => {
    // console.log(res.data)
    if (res.data.status === 'success') {
      const { total, pageCount, petlist } = res.data.data
      return {
        total,
        pageCount,
        petlist,
      }
    }

    return { total: 0, pageCount: 0, pets: [] }
  })

export const fetchRawPetlist = (url) => {
  console.log(url)

  return axiosInstance.get(url).then((res) => {
    // console.log(res.data)
    if (res.data.status === 'success') {
      const { petlist } = res.data.data
      return petlist
    }

    return []
  })
}

export const usePetlist = (searchCriteria = {}, pageNow = 1, perpage = 10) => {
  const searchParams = new URLSearchParams(searchCriteria)

  const { data, error, isLoading } = useSWR(
    `/pet/list?&page=${pageNow}&perpage=${perpage}&${searchParams.toString()}`,
    fetchPetlist
  )

  return {
    pets: data?.petlist,
    pageCount: data?.pageCount,
    total: data?.total,
    error,
    isLoading,
  }
}

export const usePetMore = (searchCriteria = {}, perpage = 10) => {
  const searchParams = new URLSearchParams(searchCriteria)

  const { data, error, isLoading, mutate, size, setSize, isValidating } =
    useSWRInfinite((index, previousPageData) => {
      if (previousPageData && !previousPageData.length) return null
      return `/pet/list?&page=${
        index + 1
      }&perpage=${perpage}&${searchParams.toString()}`
    }, fetchRawPetlist)

  return {
    data,
    error,
    isLoading,
    mutate,
    size,
    setSize,
    isValidating,
  }
}

// 以下為infinite scroll使用
// 常數 最大載入資料筆數
const loadPetItems = async (
  startCursor = 0, // 開始指標 startCursor / perpage + 1 = pageNow
  searchCriteria = {},
  perpage = 20,
  maxItems = 400
) => {
  const searchParams = new URLSearchParams(searchCriteria)

  // startCursor / perpage + 1 = pageNow
  const page = startCursor ? startCursor / perpage + 1 : 1

  const res = await axiosInstance.get(
    `diary/pet/list?&page=${page}&perpage=${perpage}&${searchParams.toString()}`
  )

  // 發生錯誤時，停止無限載入
  if (res.data.status !== 'success') {
    return { hasNextPage: false, data: [] }
  }

  const { petlists, total } = res.data.data

  // total 或 maxITEMS 控制最大載入資料筆數，不能超 maxITEMS 或 total
  if (total >= startCursor + perpage && maxItems >= startCursor + perpage) {
    // 每次載入資料時，回傳 {hasNextPage: 是否有下一頁, data: 新加入的資料}
    return { hasNextPage: true, data: petlists }
  } else {
    return { hasNextPage: false, data: [] }
  }
}

// 這個自訂的 hook 會回傳一個物件，裡面包含了所有 infinite scroll 所需的資料
export function useLoadPetItems(
  searchCriteria = {},
  perpage = 20,
  maxItems = 400
) {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])
  const [hasNextPage, setHasNextPage] = useState(true)
  const [error, setError] = useState()

  async function loadMore() {
    setLoading(true)
    try {
      const { data, hasNextPage: newHasNextPage } = await loadPetItems(
        items.length,
        searchCriteria,
        perpage,
        maxItems
      )
      setItems((current) => [...current, ...data])
      setHasNextPage(newHasNextPage)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { loading, items, hasNextPage, error, loadMore }
}

// 常數
const ARRAY_SIZE = 20 // 每次載入的資料筆數
const RESPONSE_TIME_IN_MS = 1000 // 模擬伺服器回應的時間

// 模擬從伺服器載入資料
function loadItems(startCursor = 0) {
  return new Promise((resolve) => {
    let newArray = []

    setTimeout(() => {
      for (let i = startCursor; i < startCursor + ARRAY_SIZE; i++) {
        const newItem = {
          key: i,
          value: `This is item ${i}`,
        }
        newArray = [...newArray, newItem]
      }

      // 每次載入資料時，回傳 {hasNextPage: 是否有下一頁, data: 新加入的資料}
      console.log({ hasNextPage: true, data: newArray })

      resolve({ hasNextPage: true, data: newArray })
    }, RESPONSE_TIME_IN_MS)
  })
}

// 這個自訂的 hook 會回傳一個物件，裡面包含了所有 infinite scroll 所需的資料
export function useLoadItems() {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])
  const [hasNextPage, setHasNextPage] = useState(true)
  const [error, setError] = useState()

  async function loadMore() {
    setLoading(true)
    try {
      const { data, hasNextPage: newHasNextPage } = await loadItems(
        items.length
      )
      setItems((current) => [...current, ...data])
      setHasNextPage(newHasNextPage)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { loading, items, hasNextPage, error, loadMore }
}
