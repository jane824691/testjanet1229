import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AB_COMMENT, AB_CREATE2 } from '@/components/my-const_forum';
// import { useRouter } from 'next/router';


import Link from 'next/link';

import styles from "@/css/forum/CreateComment.module.css";
import dayjs from 'dayjs';







const removeItemReload = async (article_id)=>{
  //抓到值
    console.log({article_id});
  //要到資料，並刪除
    // const r =await fetch(AB_DEL_ONE+"/" + article_id, {
    //   method:"DELETE",
    // })
  //呈現資料
    // const result = await r.json();
  
  
    // if(result.success){
    //   alert('文章很棒! 真的要刪除嗎?')
  
      //重新載入來顯示新的頁面資料
      // router.reload();
  
      // 不用重新載入頁面就更新資料顯示! 酷
      // getListData();
    }
  
  // };
















export default function CreateComment({ article_id}) {
  const router = useRouter();

    const [myForm3, setMyForm3]= useState({

        comment_id:'',
        member_id:'',
        article_id: article_id,
        // article_id: 93,
        comment_date:'',
        comment_content:'',
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
              setMyForm3({ ...myForm3, [id]: value }); // 直接寫死 article_id          };
          };
          const onSubmit3 = async (e)=>{
            e.preventDefault();
      
            console.log('Article ID:', article_id);
            const r = await fetch(AB_CREATE2, {
              method: "POST",
              body: JSON.stringify(myForm3),
              headers: {
                "Content-Type": "application/json",
              },
            })
            const responseData3= await r.json();
            // responseDate就會拿到資料~
            if(responseData3.success){
              setDisplayInfo3("succ");
              alert("新增成功了唷!!!!!");
            }else{
              setDisplayInfo3("fail");
      
              alert('多看看其他文章看看吧!~');
              router.reload();

            }
          };
      
    
    















        



    
    return (
    <>
      <div className={styles.main}>
        <form name="form1" onSubmit={onSubmit3} className={styles.form}> 
          <textarea className={styles.writtenComment} id="comment_content" name="comment_content" col="10" rows="3" value={myForm3.comment_content} onChange={changeHandler3} >
          </textarea> 

          {/*<textarea className={styles.writtenComment} id="article_id" name="article_id" col="10" rows="3" value={article_id} onChange={changeHandler3} >
          </textarea> */}

          <div
    className={styles.writtenId}
    id="article_id"
    name="article_id"
    col="10"
    rows="3"
    value={myForm3.article_id=article_id}  // 注意這裡改為myForm3.article_id
    onChange={changeHandler3}
  >{article_id}</div>

<div
    className={styles.writtenId}
    id="comment_member_name"
    name="comment_member_name"
    col="10"
    rows="3"
    value={myForm3.comment_member_name="LittleHao"}  // 注意這裡改為myForm3.article_id
    onChange={changeHandler3}
  >{"LittleHao"}</div>



          {displayInfo3 ? ( displayInfo3 ==="succ" ?(

            <div class="alert alert-success" role="alert">留言成功</div>
            ):(
            <div class="alert alert-success" role="alert">留言成功</div>)): null}


            <div className={styles.buttonGiveAndSend}>
              <Link href={`/forum`}>
                <button type="button" className={styles.buttonGive}>放棄</button>
              </Link>

              {/* <Link href={`/`}> */}
              <button type="submit" className={styles.buttonSend}           
              // onClick={()=>removeItemReload(item.article_id)}
              >送出         
              </button>
              {/* </Link> */}
            </div>
        </form>
      </div>
    </>
);
}