import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//這裡的css module叫做forum唷
import styles from "../../css/forum/forum.module.css"
//這裡的css module叫做forum唷




// 會員名字
import AuthContext from '@/components/contexts/AuthContext'
import { useContext } from 'react'
// 會員名字


// 時間格式
import dayjs from 'dayjs'
// 時間格式

const inter = Inter({ subsets: ['latin'] })
// import { useState } from 'react';

//引入資料了
import { useEffect, useState } from "react";
import Link from "next/link";
import { AB_LIST5, AB_COUNT_COMMENT } from "@/components/my-const_forum";
import { useRouter } from "next/router";
//引入資料了


// icon
import { BsActivity } from "react-icons/bs";
import { BsArchiveFill } from "react-icons/bs";
import { BsCupHotFill } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
// icon

export default function Home() {


  //要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!

const [data, setData]=useState({});
const router= useRouter();
const getListData= async () =>{
let page= +router.query.page || 1;
  if(page<1) page=1;
  try {
    const r =await fetch(AB_LIST5+`?page=${page}&keyword=${encodeURIComponent(myForm.article_content)}`);
    const d =await r.json();
    console.log(r)
    setData(d);
  } catch (ex) {}
};

useEffect(()=>{
  getListData();
},[router.query.page]);

  //要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!




//夾雜別的//夾雜別的//夾雜別的//夾雜別的//夾雜別的
//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋
const [myForm, setMyForm] = useState({
  article_content: '',
});

useEffect(() => {
  const article_id = +router.query.article_id;
  console.log({ article_id, raw: router.query.article_id });
}, [router.query.article_id]);


const [displayInfo, setDisplayInfo] = useState("");

const changeHandler = (e) => {
  const { name, id, value } = e.target;
  console.log({ name, id, value });
  setDisplayInfo("");
  setMyForm({ ...myForm, [id]: value });
};

const onSubmit = async (e) => {
  e.preventDefault();

  const r = await fetch(AB_EDIT_ONE + "/" + myForm.article_id, {
    method: "PUT",
    body: JSON.stringify(myForm),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await r.json();

  if (responseData.success) {
    setDisplayInfo("succ");
    alert("修改成功了唷!!!!!");
  } else {
    setDisplayInfo("fail");
    alert('沒辦法讓你送出，但是你卻成功了??好啦你很棒');
  }
};

//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋
//夾雜別的//夾雜別的//夾雜別的//夾雜別的//夾雜別的





//會員名字
const { auther } = useContext(AuthContext)
//會員名字



























//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋
const yourSubmitFunction = async (e) => {
  e.preventDefault();
  try {
    const encodedKeyword = encodeURIComponent(myForm.article_content);
    console.log('page',router.query.page,'keyword',encodedKeyword);
      const r = await fetch(AB_LIST5 + `?page=${router.query.page}&keyword=${encodedKeyword}`);
      const d = await r.json();
      setData(d);
  } catch (ex) {
      console.error(ex);
  }
};


//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋
























  return (
    <>


      <main className={styles.main}>

{/* 左邊欄位 */}
          <div className={styles.leftList}>
               <div className={styles.memberPicOut}>
                  <img className={styles.memberPic} src='/images/forum/member01.jpg'></img>
               </div> 

              <div className={styles.memberItems}>
                  <br></br>
                <div className={styles.name}>
                




{/* 會員名稱 */}
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
 {/* 會員名稱 */}
               
                
                
                
                
                
                </div>
                {/* <br></br>
                <div className={styles.name}>memberNameInEng</div> */}
                <br></br>  
                <div className={styles.nowLocationOut}>
                   <div className={styles.nowLocation}>最新文章</div> 
                </div> 
              </div>  

            <div className={styles.iconsOut}>
              <div className={styles.icons}>
                <br></br>
                <div className={styles.icon}>
                  <BsActivity className={styles.iconSick}/>
                  <Link className={styles.iconLink} href={`/forum/index_board_sick`}>毛孩小毛病</Link>
                </div>

                <div className={styles.icon}>
                  <BsArchiveFill className={styles.iconSick}/>
                  <Link className={styles.iconLink} href={`/forum/index_board_cute`}>可愛貓狗</Link>
                </div>

                <div className={styles.icon}>
                  <BsCupHotFill  className={styles.iconSick}/>
                  <Link className={styles.iconLink} href={`/forum/index_board_like`}>浪你喜翻我</Link>
                </div>

                <div className={styles.icon}>
                  <BsCupHotFill  className={styles.iconSick}/>
                  <Link className={styles.iconLink} href={`/forum/index_board_life`}>喵汪生活</Link>
                </div>

                <div className={styles.icon}><BsPencilFill            className={styles.iconSick}/> <div className={styles.iconLink}><Link className={styles.iconLink} href={`/forum/create`}>創作文章</Link></div> 
                </div>

                <div className={styles.icon}><BsFileEarmarkMusicFill  className={styles.iconSick}/> <div className={styles.iconLink}><Link className={styles.iconLink} href={`/forum/creation`}>我的文章</Link></div> 
                </div>


                <div className={styles.icon}><BsFillBookmarkHeartFill  className={styles.iconSick}/> <div className={styles.iconLink}><Link className={styles.iconLink} href={`/forum/collection`}>我的收藏</Link></div> 
                </div>


              </div>
            </div>

          </div>
{/* 左邊欄位 */}




















        {/* 右上標題 */}
        <div className={styles.article}>











  {/* 搜尋 */}{/* 搜尋 */}{/* 搜尋 */}{/* 搜尋 */}{/* 搜尋 */}{/* 搜尋 */}  <div className="">
  <div className={styles.SearchFormOut}>
            <form name="searchForm" className={styles.SearchForm} role="search" onSubmit={yourSubmitFunction}>

              <input className={styles.SearchInput} id="article_content" type="text" name="article_content" value={myForm.  article_content} aria-label="Search" onChange={changeHandler} />

              <button className={styles.searchButton} type="submit">
                Search
              </button>



            </form>
          </div>
        </div>
  {/* 搜尋 */}{/* 搜尋 */}{/* 搜尋 */}{/* 搜尋 */}{/* 搜尋 */}{/* 搜尋 */}












          <div className={styles.articleTitle}>

          <h4 className={styles.titlePopular}>
              <Link href={`/forum/index_board_cute`} className={styles.articleCardLink}>
                <div className={styles.articleCardTitle}>最新</div>
              </Link>
            </h4>



            &nbsp;&nbsp;&nbsp;&nbsp;


            <h4 className={styles.titlePopular}>
              <Link href={`/forum/index_board_cute_popular`} className={styles.articleCardLink}>
                <div className={styles.articleCardTitle}>熱門</div>
              </Link>
            </h4>


          </div>
          <hr></hr>
          <div className={styles.articleWhileContents}>
{/* 右上標題 */}



<div className="row">
          <div className="col">
              { data.rows && data.rows.map((i)=>{

                return(
                  <>

                    <div key={i.article_id} className={styles.articleCard}>
                      <div className={styles.articleCardIcMe}>
                        <BsGithub className={styles.articleCardMemberIcon}/>
                        &nbsp;&nbsp;
                        <div className={styles.articleCardWriter}>{ i.article_member_name }</div>
                        <div className={styles.articleCardTime}>&nbsp;&nbsp;&nbsp;&nbsp;{ dayjs(i.article_release_date).format('YYYY-MM-DD') }</div>
                        &nbsp;&nbsp;<div className={styles.articleCardBoard}>{i.article_boardcategory_name}</div>
                      </div>
                      
                      <Link href={`/forum/articleCommentContent/${i.article_id}`} className={styles.articleCardLink}>
                        <div className={styles.articleCardTitle}>{ i.article_title_name }
                          <div className={styles.articleCardContent}>{ i.article_content }</div>
                        </div>
                        
                      </Link>
                      <div className={styles.articleCardLCS}>
                        <img className={styles.like} src='/images/forum/like.svg'></img>
                        <div>{ i.article_like_num }</div>

                        <img className={styles.chat} src='/images/forum/chat.svg'></img>
                        <div>{ i.article_comment_num }</div>



                        {/* <Link href={`/forum/articleContent/${i.article_id}`} className={styles.articleCardLink}>
                        <div className={styles.articleCardTitle}>
                          <div className={styles.articleCardContent}>看文章~~~~~~~~~~~~~~~~~~~~~</div>
                        </div>
                      </Link> */}


                      </div>
                      {/* <img className={styles.newsPic} src='/images/forum/news.svg'></img> */}
                    </div>
                </>
                );})}

    </div>
</div>

            <br></br>
            <br></br>
            <br></br>




{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}
<div className="row">
          <div className="col">
            <nav aria-label="Page navigation example">
              <ul className="pagination">{data.success && data.totalPages ? Array(11).fill(1).map((v,i)=>{
                const p =data.page -5 +i;
                  if(p<1 || p>data.totalPages) return null;
                    return(
                            <li key={p} className={ p===data.page ?"page-item active" :"page-item"}>
                              <Link className="page-link" href={"?page=" +p }>{p}</Link>
                            </li>
                          )
              }):null}
              </ul>
            </nav>
          </div>
        </div>
{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}{/* 分頁們 */}




          </div>
        </div>















      </main>


    </>
  )
}
