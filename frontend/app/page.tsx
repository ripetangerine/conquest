import {useState, useEffect} from "react"

import styles from "./page.module.css";
import Quest from "@/components/Quest";
import Post from "@/components/Post";
// import {Quest} from "@/components"

//hero page
//all page of root

//TODO : 로그인/회원가입 로직

export default function Home() {
  // const name = "게시글";
  const [quests, setQuests] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  useEffect(() => {
    fetch("/api/quests")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

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
                {/* test */}
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
            <div className={styles.quest_weekly_title}>Weekly Quests</div>
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
        <div className={styles.posts_title}>Posts</div>
        <div className={styles.posts_subtitle}>게시글 내부에서 스페이스바를 통해 쉬운 이동을 할 수 있습니다</div>
        <div className={styles.post_contents}>
          {/* test */}
          <Post
            post_title={"호기심 가득한 제목"}
            post_writer={"곽자경"}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_contents}>
          {"__end page__"}
        </div>
      </div>
    </div>
  );
}

