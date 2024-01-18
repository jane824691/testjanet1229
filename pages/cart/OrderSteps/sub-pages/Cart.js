import List from '@/components/cart/list'
import Link from 'next/link'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Cart({netTotal,setNetTotal}) {
  //可從useCart中獲取的各方法與屬性，參考README檔中說明

  return (
    <>
      <List netTotal={netTotal} setNetTotal={setNetTotal} />

      {/* 土司訊息視窗用 */}
      <Toaster />
    </>
  )
}
