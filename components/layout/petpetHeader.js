// import './App.css';
// import styles from "@/styles/Home.module.css"
// import styles from '@/styles/petpetIndex.module.css'
import styles from '@/css/petpetHeader.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import AuthContext from '../contexts/AuthContext'
import { useContext } from 'react'

export default function PetpetHeader() {
  const { auther, logout } = useContext(AuthContext)
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* 網站icon */}
          <div className={styles.logoOut}>
            <Image
              src="/logo.svg"
              alt="Vercel Logo"
              width={130}
              height={80}
              priority
            />
            {/*正規*/}
            {/* <img src='logo.svg' className={styles.logo} /> */}
            {/*不正規*/}
          </div>
          {/* 網站icon */}

          {/* <!-- header中間 --> */}
          <div className={styles.headerMiddle}>
            <div>
              <Link href="/" className={styles.headerMiddleItem}>
                毛首頁
              </Link>
            </div>
            <div>
              <Link href="/product/list" className={styles.headerMiddleItem}>
                毛商城
              </Link>
            </div>
            <div>
              <Link href="/diary" className={styles.headerMiddleItem}>
                毛日記
              </Link>
            </div>
            <div>
              <Link href="/forum" className={styles.headerMiddleItem}>
                毛論壇
              </Link>
            </div>
          </div>
          {/* <!-- header中間 --> */}

          {/* <!-- header右邊 --> */}
          <div className={styles.headerRight}>
            <div className={styles.headerRightIcon}>
              <Link
                className={styles.headerRightIconLink}
                href="/cart/OrderSteps"
              >
                <i className="bi bi-cart fs-1"></i>
              </Link>
            </div>

            <div className={styles.headerRightIcon}>
              <Link className={styles.headerRightIconLink} href="">
                <i className="bi bi-bell fs-1"></i>
              </Link>
            </div>

            <div className={styles.headerRightIcon}>
              <Link className={styles.headerRightIconLink} href="/member">
                <i className="bi bi-person fs-1"></i>
              </Link>
            </div>
            {auther.account ? (
              <>
                <div className={styles.headerRightIcon}>
                  <span>{auther.account}</span>
                </div>
              </>
            ) : (
              <>
                <div className={styles.headerRightIcon}>
                  <Link
                    style={{ color: 'white', textDecoration: 'none' }}
                    href="/member/login"
                  >
                    登入
                  </Link>
                </div>
              </>
            )}
            {/* <div className={styles.headerRightIcon}>
              <a className={styles.headerRightIconLink} href="">
                <i className="bi bi-chevron-down fs-2"></i>
              </a>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle
                className={styles.test}
                style={{ boxShadow: 'none' }}
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={(e) => {
                    e.preventDefault()
                    logout()
                  }}
                >
                  <Link href="/">登出</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* <!-- header右邊 --> */}
        </div>
      </header>
    </>
  )
}