export default function Test() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          按我來測試跳出視窗(modal)
        </button>
  
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  跳出視窗(modal)標題
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
            </div>
          </div>
        </div>
      </div>
    )
  }



  /////////////////////////////

  {displayInfo ? ( displayInfo ==="succ" ?(
    <div class="alert alert-success" role="alert">
      資料新增成功
    </div>):(
    <div class="alert alert-danger" role="alert">
      資料新增失敗哭哭哭哭
    </div>)): null}



//////////////////////////////////

// 帳號暫定777，會員用sid，純數字

//////////////////////////////////

{/* <div className="col">
    <div>
      {comment.map(item => (
        <>
          <p key={item.comment_id}>{item.comment_id}</p>
          <p key={item.comment_id}>{item.comment_content}</p>
        </>

      ))}
    </div>
</div> */}
// Eddy 幫我改留言
//////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//來商城亂的
//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數
//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數
// const getListDataBuy =async(req)=>{
//   const perPage=5;//每頁有幾筆
//   let page= +req.query.page || 1;

//關鍵字查詢//關鍵字查詢//關鍵字查詢//關鍵字查詢//關鍵字查詢//關鍵字查詢//關鍵字查詢
  // let keyword= (req.query.keyword && typeof req.query.keyword === 'string' ) ? req.query.keyword.trim() : '';
  // let keyword_=db.escape(`%${keyword}%`);

  // let qs ={};

//日期範圍查詢//日期範圍查詢//日期範圍查詢//日期範圍查詢p1 起始日期
  // let startDate= req.query.startDate ? req.query.startDate.trim() : '';
  // const startDateD=dayjs(startDate);
  // if(startDateD.isValid()){
  //     startDate=startDateD.format('YYYY-MM-DD');
  // } else{
  //     startDate='';
  // }
//日期範圍查詢//日期範圍查詢//日期範圍查詢//日期範圍查詢p1 起始日期


//日期範圍查詢//日期範圍查詢//日期範圍查詢//日期範圍查詢 結束的日期
// let endDate= req.query.endDate ? req.query.endDate.trim() : '';
// const endDateD=dayjs(endDate);
// if(endDateD.isValid()){
//   endDate=endDateD.format('YYYY-MM-DD');
// } else{
//   endDate='';
// }
//日期範圍查詢//日期範圍查詢//日期範圍查詢//日期範圍查詢 結束的日期



//多重查詢//多重查詢//多重查詢//多重查詢//多重查詢
  // let where = `WHERE 1 `;//一定要有空白
  // if (keyword){
  //     qs.keyword=keyword;
  //     where +=` AND (\`product_name\` LIKE ${keyword_} OR \`product_description\` LIKE ${keyword_} ) `;
  // }
//多重查詢//多重查詢//多重查詢//多重查詢//多重查詢


//日期範圍查詢//日期範圍查詢//日期範圍查詢p2
// if(startDate){
//   qs.startDate= startDate;
//   where += ` AND article_release_date >='${startDate}' `;
// }
//日期範圍查詢//日期範圍查詢//日期範圍查詢p2

//日期範圍查詢//日期範圍查詢//日期範圍查詢 結束時間
// if(endDate){
//   qs.endDate= endDate;
//   where += ` AND article_release_date <='${endDate}' `;
// }
//日期範圍查詢//日期範圍查詢//日期範圍查詢 結束時間

//關鍵字查詢//關鍵字查詢//關鍵字查詢//關鍵字查詢//關鍵字查詢//關鍵字查詢//關鍵字查詢
// let totalRows =0;
//   let totalPages =0;
//   let rows=[];
//   let output={
//       success: false,
//       page,
//       perPage,
//       rows,
//       totalRows,
//       totalPages,
//       qs,
//       redirect:"",
//       info:"",
//   };





//如果有人手濺把頁數打負數//如果有人手濺把頁數打負數//如果有人手濺把頁數打負數
// if(page<1){
//       output.redirect = `?page=1`;
//       output.info=`頁碼小於1`;
//       return output;
  //方法一    return res.redirect(req.baseUrl);
  /*方法二   return res.redirect(`?page=1`);*/
  // }
  // const t_sql=`SELECT COUNT(1) totalRows From product ${where}`;//${where} 是關鍵字查詢的
  // [[{totalRows}]] =await db.query(t_sql);
  // totalPages=Math.ceil(totalRows/perPage);

  // if(totalRows>0){
  //     if(page>totalPages){
  //         output.redirect = `?page=${totalPages}`;
  //         output.info=`頁碼大於總頁數`;
  //         return {...output, totalRows, totalPages};
  //         // return res.redirect(`?page=${totalPages}`);
  //     }
//如果有人手濺把頁數打負數//如果有人手濺把頁數打負數//如果有人手濺把頁數打負數


// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示
//   const sql=`SELECT * From product ${where} ORDER BY pid DESC
//   LIMIT ${(page - 1)* perPage}, ${perPage}`;//${where} 是關鍵字查詢的
//   [rows] = await db.query(sql);
//   output={... output, success: true, rows, totalRows, totalPages};

//   }
// return output;
// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示// 資料顯示

/*
const sql ="SELECT * FROM forum_article ORDER BY article_id ASC LIMIT 5"
const [rows] = await db.query(sql);
res.json(rows);
*/
// }

// router.get("/", async (req, res)=>{
//   res.locals.pageName="ab-list";
//      const output = await getListDataBuy(req);
//   if(output.redirect){
//       return res.redirect(output.redirect);
//   }
//   res.render("address-book/list", output);
// });

// router.get("/api3", async(req, res)=>{
//   res.json(await getListDataBuy(req));
// http://localhost:3002/address-book/api3
// });
//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數





//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數//應該是顯示頁數
//來商城亂的

////防止頁碼論調

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

//這裡的css module叫做forum唷
import styles from "../../css/forum/forum.module.css"
//這裡的css module叫做forum唷







// 時間格式
import dayjs from 'dayjs'
// 時間格式

const inter = Inter({ subsets: ['latin'] })
// import { useState } from 'react';


//要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!

// import { Layout1 } from "@/components/Layout1";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AB_LIST2 } from "@/components/my-const";
// import dayjs from "dayjs"; 時間的格式
import { useRouter } from "next/router";

//要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!












// icon
import { BsActivity } from "react-icons/bs";
import { BsArchiveFill } from "react-icons/bs";
import { BsCupHotFill } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BsFileEarmarkMusicFill } from "react-icons/bs";

// icon



export default function Home() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

//要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!要引入資料了!!!!

const [data, setData]=useState({});
const router= useRouter();
const getListData2= async () =>{

let page= +router.query.page || 1;
  if(page<1) page=1;
  try {
    const r =await fetch(AB_LIST2+`?page=${page}`);
    const d =await r.json();
    console.log(r)
    setData(d);
  } catch (ex) {}
};

useEffect(()=>{
  getListData2();
},[router.query.page]);


console.log(typeof(data.rows))

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








//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋//搜尋
const yourSubmitFunction = async (e) => {
  e.preventDefault();

  try {
      const encodedKeyword = encodeURIComponent(myForm.article_content);
      const r = await fetch(AB_LIST2 + `?keyword=${encodedKeyword}`);
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
                <div className={styles.name}>會員名稱</div>
                <br></br>
                <div className={styles.name}>memberNameInEng</div>
                <br></br>  
                <div className={styles.nowLocationOut}>
                   <div className={styles.nowLocation}>熱門文章</div> 
                </div> 
              </div>  

            <div className={styles.iconsOut}>
              <div className={styles.icons}>
                <br></br>
                <div className={styles.icon}><BsActivity              className={styles.iconSick}/><a className={styles.iconLink} href='#'> 毛孩小毛病</a></div>
                <div className={styles.icon}><BsArchiveFill           className={styles.iconSick}/><a className={styles.iconLink} href='#'> 好用家用品</a></div>

                <div className={styles.icon}><BsCupHotFill            className={styles.iconSick}/><a className={styles.iconLink} href='#'> 時髦貓食</a></div>

                <div className={styles.icon}><BsPencilFill            className={styles.iconSick}/> <div className={styles.iconLink}><Link className={styles.iconLink} href={`/forum/create`}>創作文章</Link></div> 
                </div>

                <div className={styles.icon}><BsFileEarmarkMusicFill  className={styles.iconSick}/> <div className={styles.iconLink}><Link className={styles.iconLink} href={`/forum/creation`}>我的文章</Link></div> 
                </div>

                <div className={styles.icon}><BsFillBookmarkHeartFill className={styles.iconSick}/><a className={styles.iconLink} href='#'> 我的收藏</a></div>
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
              <Link href={`/forum/`} className={styles.articleCardLink}>
                <div className={styles.articleCardTitle}>最新</div>
              </Link>
            </h4>



            &nbsp;&nbsp;&nbsp;&nbsp;


            <h4 className={styles.titlePopular}>
              <Link href={`/forum/index_popular`} className={styles.articleCardLink}>
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
                        <img className={styles.articleCardMemberIcon} src='/images/forum/womanIcon.svg'></img>&nbsp;&nbsp;
                        <div className={styles.articleCardWriter}>{ i.article_member_id }</div>
                        <div className={styles.articleCardTime}>&nbsp;&nbsp;&nbsp;&nbsp;{ dayjs(i.article_release_date).format('YYYY-MM-DD') }</div>

                      </div>
                      
                      <Link href={`/forum/articleContent/${i.article_id}`} className={styles.articleCardLink}>
                        <div className={styles.articleCardTitle}>{ i.article_title_name }
                          <div className={styles.articleCardContent}>{ i.article_content }</div>
                        </div>
                      </Link>
                      <div className={styles.articleCardLCS}>
                        <img className={styles.like} src='/images/forum/like.svg'></img>
                        <div>{ i.article_like_num }</div>
                        <img className={styles.chat} src='/images/forum/chat.svg'></img>
                        <div>{ i.article_comment_num }</div>




                        {/* <img className={styles.save} src='/images/forum/save.svg'></img>
                        <div>收藏</div> */}
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
