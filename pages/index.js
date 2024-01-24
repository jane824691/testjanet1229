import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../css/home.module.css'
import ReactBsCarousel from '@/components/product/ReactBsCarousel'
import ProductList from './OriginProductList'
import Petpetform from './forum/Petpetforum'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <main>
        <div className="container ">
          <div style={{ display: 'flex' }}>
            <Image src="/pics/homepage.png" width="1000" height="700" alt="" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              height="400"
            >
              <h2 style={{ marginBottom: '50px' }}>專屬的寵物天堂!!</h2>
              <span style={{ marginBottom: '50px' }}>
                在這裡，我們為您和您的寵物提供一站式服務。從最新的寵物用品到專業的寵物日記和論壇,我們致力於打造一個溫馨、有趣且充滿愛的線上社區。立即探索我們的寵物商城。與我們一同與毛孩享受愛與陪伴的美好。
              </span>
              <Link href="/member/login">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg pro-shadow rounded-5"
                  style={{ width: 250 }}
                >
                  加入我們
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.diary}>
            <Link
              href="/diary"
              className={styles.diaryLink}
              style={{ marginBottom: '80px' }}
            >
              <img
                className={styles.image}
                src={`/images/diary/首頁-diary.png`}
              ></img>
            </Link>
          </div>

          <ReactBsCarousel />
          <ProductList />
          <Petpetform></Petpetform>
        </div>
      </main>
    </>
  )
}
