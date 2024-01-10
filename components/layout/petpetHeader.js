// import './App.css';
// import styles from "@/styles/Home.module.css"
// import styles from '@/styles/petpetIndex.module.css'
import styles from "@/css/petpetHeader.module.css"
import Image from "next/image"
import Link from "next/link"
import Dropdown from 'react-bootstrap/Dropdown';
export default function PetpetHeader() {
return (
<>  

  <header className={styles.header}>
      <div className={styles.container}>

{/* 網站icon */}
        <div className={styles.logoOut}>
          <Link href="/"><Image src="/logo.svg" alt="Vercel Logo" width={130} height={80} priority /></Link>{/*正規*/}
          {/* <img src='logo.svg' className={styles.logo} /> */}{/*不正規*/}
        </div>
{/* 網站icon */}
        
{/* <!-- header中間 --> */}
        <div className={styles.headerMiddle}>      
          <div><Link href="/" className={styles.headerMiddleItem}>Home</Link></div>
          <div><Link href="/product/list" className={styles.headerMiddleItem}>毛商城</Link></div>
          <div><Link href="/diary" className={styles.headerMiddleItem}>毛日記</Link></div>
          <div><Link href="/forum" className={styles.headerMiddleItem}>毛論壇</Link></div>
        </div>
{/* <!-- header中間 --> */}

{/* <!-- header右邊 --> */}
      <div className={styles.headerRight}>

          <div className={styles.headerRightIcon}>
            <Link className={styles.headerRightIconLink} href="/cart"><i className="bi bi-cart fs-1"></i></Link>
          </div>

          <div className={styles.headerRightIcon}>
            <Link className={styles.headerRightIconLink} href=""><i className="bi bi-bell fs-1"></i></Link>
          </div>

          <div className={styles.headerRightIcon}>
            <Link className={styles.headerRightIconLink} href=""><i className="bi bi-person fs-1"></i></Link>
          </div>

          <Dropdown>
            <Dropdown.Toggle className={styles.test}></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


      </div>
{/* <!-- header右邊 --> */}

      </div>
  </header>
</>
  )
}