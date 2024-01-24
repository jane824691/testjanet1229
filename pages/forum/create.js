import { useState } from "react";
import { AB_CREATE } from "@/components/my-const_forum";


import styles from "../../css/forum/create.module.css"


import Link from "next/link";
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





export default function ABAdd() {
  const [myForm, setMyForm]= useState({
    // 字串給空的，數值給0
    // 如果這邊有給值，例如article_id:'22'，就真的會顯示
    // article_id:'',
    // article_member_id:'',
    article_boardcategory_name:'',
    article_title_name:'',
    article_content:'',
    article_release_date:'',
    article_update_date:'',
    article_like_num:'',
    article_comment_num:'',
    pic:'',
  });


// 彈出來的視窗

    const [displayInfo, setDisplayInfo] =useState("");

// 彈出來的視窗



    const changeHandler =(e) =>{
      //這邊也要有設定值，才可以書寫資料上去
        // setMyForm((old)=>{
        //   return {...old, article_id: e.target.value};

        // });
        const { name, id, value} =e.target;
        console.log({name, id, value});
        setDisplayInfo("");
        setMyForm({...myForm, [id]: value});
    };

    const onSubmit = async (e)=>{
      e.preventDefault();


      const r = await fetch(AB_CREATE, {
        method: "POST",
        body: JSON.stringify(myForm),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const responseData= await r.json();
      // responseDate就會拿到資料~
      if(responseData.success){
        setDisplayInfo("succ");
        alert("新增成功了唷!!!!!")
      }else{
        setDisplayInfo("fail");

        alert('來看看你寫的文章吧!~')
      }
    };

//會員名字
const { auther } = useContext(AuthContext)
//會員名字

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


                <div className={styles.icon}>
                  <BsPencilFill  className={styles.iconSick}/>
                   <div className={styles.iconLink}><Link className={styles.iconLink} href={`/forum/create`}>創作文章</Link></div> 
                </div>

                <div className={styles.icon}>
                  <BsFileEarmarkMusicFill  className={styles.iconSick}/>
                  <div className={styles.iconLink}><Link className={styles.iconLink} href={`/forum/creation`}>我的文章</Link></div> 
                </div>


                <div className={styles.icon}>
                  <BsFillBookmarkHeartFill  className={styles.iconSick}/> <div className={styles.iconLink}><Link className={styles.iconLink} href={`/forum/collection`}>我的收藏</Link></div> 
                </div>


              </div>
            </div>

          </div>
{/* 左邊欄位 */}














<div className={styles.writtenOut}>
  <div className={styles.formTitle}>撰寫文章</div>
  {/* <div className={styles.uploadButton}>上傳文章</div> */}

  <form name="form1" onSubmit={onSubmit} className={styles.form}> 

    <div className={styles.writtenTitleAndContent}>

      <div className="mb-3">
        <div>文章標題</div>
          <input type="text" className={styles.writtenTitleInput} id="article_title_name" name="article_title_name" value={myForm.article_title_name} onChange={changeHandler} />
          <div className="form-text"></div>
      </div>

      <select className={styles.boardCategorySelect} id="article_boardcategory_name" name="article_boardcategory_name" value={myForm.article_boardcategory_name} onChange={changeHandler} >
        <option value="">請選擇版面</option>
        <option value="毛孩小毛病">毛孩小毛病</option>
        <option value="可愛貓狗">可愛貓狗</option>
        <option value="浪你喜翻我">浪你喜翻我</option>
        <option value="喵汪生活">喵汪生活</option>
      </select>

    </div>


    <div className="mb-3">
      <div className={styles.writtenContentTitle}>文章內容</div>
      <textarea className={styles.writtenContent} id="article_content" name="article_content" col="10" rows="3" value={myForm.article_content} onChange={changeHandler} ></textarea>
    </div>


                    
    {displayInfo ? ( displayInfo ==="succ" ?(
                                              <div class="alert alert-success" role="alert">資料新增成功</div>
                                            ):(
                                              <div class="alert alert-success" role="alert">資料新增成功</div>
                                            )): null}


    <div className={styles.buttonGiveAndSend}>

      <Link href={`/forum`}>
        <button type="button" className={styles.buttonGive}>返回</button>
      </Link>
        <button type="submit" className={styles.buttonSend}>送出</button>

    </div>

  </form>
</div>

</main>
</>


        );
}
