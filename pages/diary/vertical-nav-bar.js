// left vertical nav bar
import styles from '@/css/petcalculator.module.css'
import AuthContext from '@/components/contexts/AuthContext'
import { useContext } from 'react'
import { MdPets } from 'react-icons/md'
import { FaBookMedical } from 'react-icons/fa'
import { ImCalculator } from 'react-icons/im'
import Link from 'next/link'

export default function VerticalNavBar({ focused, pet_name, pet_pic }) {
  const { auther } = useContext(AuthContext)

  return (
    <>
      {/* 左邊欄位 */}
      <div className={styles.leftList}>
        <div className={styles.memberPicOut}>
          <picture>
            <source srcSet="/images/diary/icon-default.png" type="image" />
            <img
              className={styles.memberPic}
              src="/images/diary/icon-default.png"
              alt="Headpic"
              width={150}
              height={150}
            />
          </picture>
        </div>

        <div className={styles.memberItems}>
          <br></br>
          <div className={styles.name}>會員名稱</div>
          <br></br>
          {auther.account ? (
            <>
              <div className={styles.name}>
                <span>{auther.account}</span>
              </div>
            </>
          ) : (
            <>
              <div className={styles.name}>
                <span style={{ color: 'white' }}></span>User
              </div>
            </>
          )}
          <br></br>
        </div>
        {focused == 'diary' && pet_name? (
          <>
            <br></br>
            <div className={styles.petPicOut}>
              <picture>
                <source srcSet="/images/diary/icon-default.png" type="image" />
                <img
                  className={styles.petPic}
                  src={`http://localhost:3002/img/avatar/pet/${pet_pic}`}
                  alt="Headpic"
                  width={150}
                  height={150}
                />
                <div className={styles.petname}>{pet_name}</div>
              </picture>
            </div>
          </>
        ) : (<> </>)
        }
        <div className={styles.iconsOut}>
          <div className={styles.icons}>
            <br></br>
            {focused == 'info' ? (
              <>
                <div className={styles.icon1}>
                  <MdPets className={styles.iconSick1} />
                  <Link className={styles.iconLink1} href="/diary">
                    寵物資訊
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className={styles.icon}>
                  <MdPets className={styles.iconSick} />
                  <Link className={styles.iconLink} href="/diary">
                    寵物資訊
                  </Link>
                </div>
              </>
            )}
            <br></br>
            {focused == 'diary' ? (
              <>
                <div className={styles.icon1}>
                  <FaBookMedical className={styles.iconSick1} />
                  <Link className={styles.iconLink1} href="/diary/status">
                    寵物日記
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* <div className={styles.icon}>
                  <FaBookMedical className={styles.iconSick} />
                  <Link className={styles.iconLink} href="/diary/status">
                    寵物日記
                  </Link>
                </div> */}
              </>
            )}
            <br></br>
            {focused == 'calculator' ? (
              <>
                <div className={styles.icon1}>
                  <ImCalculator className={styles.iconSick1} />
                  <Link className={styles.iconLink1} href="/diary/calculator">
                    營養計算機
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className={styles.icon}>
                  <ImCalculator className={styles.iconSick} />
                  <Link className={styles.iconLink} href="/diary/calculator">
                    營養計算機
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
