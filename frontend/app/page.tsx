import Image from "next/image";
import styles from "./page.module.css";
import Quest from "@/components/Quest";

//hero page
//all page of root

//TODO : 로그인/회원가입 로직

export default function Home() {
  // const name = "게시글";


  return (
    <div className={styles.page}>
      <div className={styles.quest}>
        <div className={styles.quest_header}>
          <div className={styles.quest_title}>Quest</div>
          <div className={styles.quest_subtitle}>글쓰기를 통해 퀘스트를 완료하고 포인트와 칭호를 얻으세요</div>
        </div>
          <div className={styles.quest_container}>
            <div className={styles.quest_daily}>
              <div className={styles.quest_daily_title}>Daily Quests</div>
              <div className={styles.quest_daily_list}>
                {(Array.from({length:3}, (_,i)=>i+1)).map((v)=>{
                  return(
                    <Quest 
                      questType ={"게시글"}
                      title={"게시글"} 
                      subtitle={"게시글 1개 작성"} 
                      key={v}/> 
                  );})}
              </div>
            </div>
          <div className={styles.quest_weekly}>
            <div className={styles.quest_weekly_title}>Daliy Quests</div>
              <div className={styles.quest_weekly_list}>
                {(Array.from({length:3}, (_,i)=>i+1)).map((v)=>{
                  return(
                    <Quest 
                      questType ={"게시글"}
                      title={"게시글"} 
                      subtitle={"게시글 1개 작성"} 
                      key={v}/> 
                );})}
              </div>
            </div>
          </div>
      </div>
      <div className={styles.posts}>
      
      </div>
      <div className={styles.footer}>

      </div>
    </div>
  );
}

