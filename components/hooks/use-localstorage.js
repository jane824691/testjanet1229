import { useState } from 'react'

export default function useLocalStorage(key, initialValue) {
  // 用來存儲值的狀態
  // 將初始狀態函數傳遞給 useState，以便只執行邏輯一次
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      // 根據鍵（key）從本地存儲中取得資料
      const item = window.localStorage.getItem(key)
      // 解析存儲的 JSON 資料，如果沒有則返回初始值
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // 如果有錯誤，同樣返回初始值
      console.log(error)
      return initialValue
    }
  })
  // 返回 useState 的 setter 函數的包裝版本，該版本...
  // ...將新值持久化到本地存儲中
  const setValue = (value) => {
    try {
      // 允許值是一個函數，以便與 useState 保持相同的 API
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // 存 state
      setStoredValue(valueToStore)
      // 存進 local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // 有更進一步會進到error
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
