import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { AB_GET_ONE, AB_EDIT_ONE } from '@/components/my-const_forum';
// import { AB_EDIT_ONE } from '@/components/my-const_forum';
import { AB_COMMENT,AB_CREATE2 } from '@/components/my-const_forum';
import CreateComment from '../CreateComment';


import Link from 'next/link';

import styles from "@/css/forum/[article_id].module.css";
import dayjs from 'dayjs';

// icon
import { BsActivity } from "react-icons/bs";
import { BsArchiveFill } from "react-icons/bs";
import { BsCupHotFill } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BsFileEarmarkMusicFill } from "react-icons/bs";

// icon

// 會員名字
import AuthContext from '@/components/contexts/AuthContext'
import { useContext } from 'react'
// 會員名字



export default function ABEditt() {

  const [myForm, setMyForm]= useState({});
  const [comment, setcomment]= useState([]);

  const myForm2 = Object.values(myForm);

console.log(myForm2,2323232123)
const router= useRouter();
    useEffect(()=>{

    const article_id = +router.query.article_id;
    console.log(article_id)
    console.log({article_id, raw: router.query.article_id});

    //有抓到值時
    if(router.query.article_id !== undefined){
      console.log(router.query.article_id,article_id);
      if(!article_id){
        router.push("/address-book");
      }else {
        fetch(AB_COMMENT + "?article_id=" + article_id)
        .then(r=>r.json())
        .then(data=>{
          console.log('eddie',data, typeof(myForm));
            if(! data.success){
              router.push("/address-book"); //沒拿到資料就跳回列表頁
            }else{
              setMyForm(data.data);
              // setMyForm(data.rows[0]);
              console.log(data.data)
              setcomment(data.data.comments);
              // setcomment(data.rows);
             
            }
        })
        .catch(ex=>console.log(ex))
      }

    }


    },[router.query.article_id]);








const [displayInfo, setDisplayInfo] =useState("");

// 彈出來的視窗?



const changeHandler =(e) =>{

        const { name, id, value} =e.target;
        console.log({name, id, value});
        setDisplayInfo("");
        setMyForm({...myForm, [id]: value});
    };

const onSubmit = async (e)=>{
      e.preventDefault();

      const r = await fetch(AB_COMMENT + "/" + myForm.article_id, {
        method: "PUT",
        body: JSON.stringify(myForm),
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(myForm, 787878)
      const responseData= await r.json();
      // responseDate就會拿到資料~
      if(responseData.success){
        setDisplayInfo("succ");
        alert("修改成功了唷!!!!!")
      }else{
        setDisplayInfo("fail");

        alert('沒辦法讓你送出，但是你卻成功了??好啦你很棒')
      }
    };

    // console.log(typeof(myForm),11111)











/////新增留言\




    const [myForm3, setMyForm3]= useState({
    // 字串給空的，數值給0
    // 如果這邊有給值，例如article_id:'22'，就真的會顯示
    // article_id:'',
    // article_member_id:'',
    // article_boardcategory_name:'',
    // article_title_name:'',
    // article_content:'',
    // article_release_date:'',
    // article_update_date:'',
    // article_like_num:'',
    // article_comment_num:'',
    // pic:'',
    comment_id:'',
    member_id:'',
    article_id:'',
    comment_date:'',
    comment_content:'',
    article_member_name:'',
    });
  
  
  // 彈出來的視窗
  
      const [displayInfo3, setDisplayInfo3] =useState("");
  
  // 彈出來的視窗
  
  
  
      const changeHandler3 =(e) =>{
        //這邊也要有設定值，才可以書寫資料上去
          // setMyForm((old)=>{
          //   return {...old, article_id: e.target.value};
  
          // });
          const { name, id, value} =e.target;
          console.log({name, id, value});
          setDisplayInfo3("");
          setMyForm3({...myForm3, [id]: value});
      };
  
      const onSubmit3 = async (e)=>{
        e.preventDefault();
  
  
        const r = await fetch(AB_CREATE, {
          method: "POST",
          body: JSON.stringify(myForm3),
          headers: {
            "Content-Type": "application/json",
          },
        })
        const responseData3= await r.json();
        // responseDate就會拿到資料~
        if(responseData3.success){
          setDisplayInfo("succ");
          alert("新增成功了唷!!!!!")
        }else{
          setDisplayInfo("fail");
  
          alert('來看看你寫的文章吧!~')
        }
      };
  


/////新增留言\






//會員名字
const { auther } = useContext(AuthContext)
//會員名字











































  return (




    
    <>
      <div className={styles.main}>


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
                <div className={styles.icon}><BsActivity              className={styles.iconSick}/><a className={styles.iconLink} href='#'> 毛孩小毛病</a></div>
                <div className={styles.icon}><BsArchiveFill           className={styles.iconSick}/><a className={styles.iconLink} href='#'> 好用家用品</a></div>

                <div className={styles.icon}><BsCupHotFill            className={styles.iconSick}/><a className={styles.iconLink} href='#'> 時髦貓食</a></div>

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























        {/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}
        <div className={styles.article}>
            <div className={styles.articleCard}>
              <h1>{myForm.article_title_name}</h1>
              <div className={styles.articleCardWrAndTime}>
                <div className={styles.articleCategory}>{myForm.article_boardcategory_name}</div>
                <div className={styles.articleCardWriter}>{myForm.article_member_name}</div>
                <div className={styles.articleCardTime}>{ dayjs(myForm.article_release_date).format('YYYY-MM-DD  HH:mm') }</div>
              </div>

              <div className={styles.articleCardContent}>
              {myForm.article_content}
              </div>
              <img className={styles.articleContentPic} src={`/images/forum/articleContent/${myForm.pic}.webp`}></img>
              <div>{console.log(myForm,'22')}</div>
              <div>{console.log(typeof(myForm))}</div>
              <div>{console.log(myForm.pic)}</div>


{/* 文章的按讚 分享 收藏   */}
              <div className={styles.articleCardLCS}>
                <img className={styles.like} src='/images/forum/like.svg'></img>
                <div>{myForm.article_like_num}</div>
                <img className={styles.chat} src='/images/forum/chat.svg'></img>
                <div>{myForm.article_comment_num}</div>
                <img className={styles.save} src='/images/forum/save.svg'></img>
                <div>收藏</div>
              </div>
 {/* 文章的按讚 分享 收藏   */}
            

        </div>
        {/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}{/* 文章 */}







{/* 留言們 */}{/* 留言們 */}{/* 留言們 */}{/* 留言們 */}{/* 留言們 */}




{/* 留言 */}{/* 留言 */}{/* 留言 */}{/* 留言 */}{/* 留言 */}

{comment.map(item => (

<div key={item.comment_id} className={styles.comment}>

  <div className={styles.commentPic}>
    <img src='/images/forum/comment01.svg'></img>
  </div>


  <div className={styles.commentRight}>

    <div        >{dayjs(item.comment_date).format('YYYY-MM-DD  HH:mm')}</div>

    <div className={styles.commentName}   key={item.comment_id}>{item.comment_member_name}</div>
    <div                                  key={item.comment_id}>{item.comment_content}</div>
  </div>

</div>
))}



{/* 輸入留言 */}{/* 輸入留言 */}{/* 輸入留言 */}

{/* <CreateComment></CreateComment> */}
<CreateComment article_id={myForm.article_id} />

{/* 輸入留言 */}{/* 輸入留言 */}{/* 輸入留言 */}



{/* 留言 */}{/* 留言 */}{/* 留言 */}{/* 留言 */}{/* 留言 */}







{/* 留言們 */}{/* 留言們 */}{/* 留言們 */}{/* 留言們 */}{/* 留言們 */}




        </div>





      </div>

      </>
);

}
