// Eddy 老師連後端

import {useState} from 'react'

// 自己加的
import { useEffect } from 'react'
// 自己加的



export default function List() {
    const [products, setProducts]= useState([])
    const getProducts =async ()=>{
        const res = await fetch('http://localhost:3002/address-book/api')
        const data =await res.json()
        console.log(data)
        setProducts(data)
    }
    useEffect(()=>{
        getProducts()
    }, [])

    console.log('render')
  return (
    <>
        <h2>列表</h2>
        <ul>
        {products.map((v, i)=>{
            return(
                <li key={v.justnumber}>
                {v.article_title_name} anddd{v.article_content}
            </li>



            )

        })
        }

        
        </ul>

    </>
  )
}
