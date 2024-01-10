 import { MdPets } from "react-icons/md";
 import { FaBookMedical } from "react-icons/fa";
 import { ImCalculator } from "react-icons/im";

 import Pagination from 'react-bootstrap/Pagination';
import styles from '@/css/diary.module.css'
import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <>
    {/* 左邊欄位 */}
    <div className={styles.leftList}>
              <div className={styles.memberPicOut}>
                  <img className={styles.memberPic} src='/images/diary/icon-default.png'></img>
              </div>

              <div className={styles.memberItems}>
                <br></br>
                <div className={styles.name}>會員名稱</div>
                <br></br>
                <div className={styles.name}>會員綽號</div>
                <br></br>
              </div>

            <div className={styles.iconsOut}>
              <div className={styles.icons}>
                <br></br>
                <div className={styles.icon}><MdPets className={styles.iconSick}/><a className={styles.iconLink} href='#'> 寵物資訊</a></div>
                <div className={styles.icon}><FaBookMedical className={styles.iconSick}/><a className={styles.iconLink} href='#'> 寵物日記</a></div>
                <div className={styles.icon}><ImCalculator className={styles.iconSick}/><a className={styles.iconLink} href='#'> 營養計算機</a></div>
              </div>
            </div>
          </div>
{/* 左邊欄位 */}

{/* 右上標題 */}
        <div className={styles.mypetList}>
          <div className={styles.mypetTitle}>
          <h4>我的毛孩</h4>
          </div>
          <div>
          <button
            type="button"
            className="btn btn-outline-primary btn-lg mb-3 " 
            style={{ width: 100,
            position: 'absolute',
            top: '39%',
            transform: 'translateY(20%)',
            right: '500px'
              }}>新增</button>
          </div>
          <div className="row">
          </div>        
        </div>        
{/* 右上標題 */}

{/* 中間卡片 */}

<div class="container">
  <div class="row g-2">
    <div class="col-4">
      <div class="p-3 border bg-light">
        <div>
          <img className={styles.petCard} src="/images/diary/dogimage1.jpg"/>
          <div>
          <p className="card-text note-text">姓名：</p>
          <p className="card-text">年齡:</p>
          <p className="card-text type-text">品種:</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="p-3 border bg-light"><div>
          <img className={styles.petCard} src="/images/diary/dogimage1.jpg"/>
          <div>
          <p className="card-text note-text">姓名：</p>
          <p className="card-text">年齡:</p>
          <p className="card-text type-text">品種:</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="p-3 border bg-light"><div>
          <img className={styles.petCard} src="/images/diary/dogimage1.jpg"/>
          <div>
          <p className="card-text note-text">姓名：</p>
          <p className="card-text">年齡:</p>
          <p className="card-text type-text">品種:</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="p-3 border bg-light"><div>
          <img className={styles.petCard} src="/images/diary/dogimage1.jpg"/>
          <div>
          <p className="card-text note-text">姓名：</p>
          <p className="card-text">年齡:</p>
          <p className="card-text type-text">品種:</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="p-3 border bg-light"><div>
          <img className={styles.petCard} src="/images/diary/dogimage1.jpg"/>
          <div>
          <p className="card-text note-text">姓名：</p>
          <p className="card-text">年齡:</p>
          <p className="card-text type-text">品種:</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="p-3 border bg-light"><div>
          <img className={styles.petCard} src="/images/diary/dogimage1.jpg"/>
          <div>
          <p className="card-text note-text">姓名：</p>
          <p className="card-text">年齡:</p>
          <p className="card-text type-text">品種:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* 中間卡片 */}

{/* <div className="col">
    <div>
    <Pagination>
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item active>{3}</Pagination.Item>
    <Pagination.Item>{4}</Pagination.Item>
    <Pagination.Item disabled>{5}</Pagination.Item>
    <Pagination.Ellipsis />
    <Pagination.Item>{10}</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
    </Pagination>
    </div> 
</div> */}

  </>
  )
}