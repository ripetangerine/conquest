'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./Quest.module.css";


// TODO : 추후 퀘스트 누르면 해당 이벤트로 이동하는 기능 구현

export type QuestProps = {
  questType:string,
  title: string,
  subtitle : string,
  reward_xp: number,
  done?: boolean
}

export default function Quest(){
  // useEffect 사용 해서 값 불러온 다음 넣어서 반환

  const [questList, setQuestList] = useState<QuestProps[]>([]);
  // const [product, setProduct] = useState<{ name: string; price: number } | null>(null);

  const questHandler = async () =>{
    try {
      const res = await fetch(`/api/quest`);
      if (!res.ok) throw new Error('제품 정보를 찾을 수 없습니다.');
      const data = await res.json();  // quest data
      setQuestList(data);
    } catch (error) {
      console.error(error);
      alert(`퀘스트 불러오기에 실패했습니다. 관리자 곽자경에게 문의해주세요 : ${error}`);
    }
  }

  useEffect(() => {
    questHandler(); 
  }, []); 

  return (
    <div>
      {
        questList.map((e, i) => {
          return(
            // debug
            <QuestItem
              key = {i}
              questType = {e.questType}
              title = {e.title}
              subtitle = {e.subtitle}
              reward_xp={e.reward_xp}
            />
          )
        })
      }
    </div>
  )
}


/** Quest line fn -> questType, title, subtitle, done */
function QuestItem({
  questType,
  title,
  subtitle,
  done = false,
}: QuestProps){
  return(
    <div className={styles.container}>
      {/*  */}
      <Image 
        className={styles.icon_img} 
        src={
          questType === 'post' ?
          "/asset/quest_post_icon.png" : ""
        } 
        alt="quest_icon" 
        width={60}
        height={60}
      />
      <div className={styles.titles}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      {done?
        <Image 
          className={styles.check} 
          src="/asset/quest_done.png" 
          alt="done"
          width={60}
          height={60}
        />: 
        <Image 
          className={styles.check} 
          src="/asset/quest_not_done.png" 
          alt="notDone" 
          width={60}
          height={60}
        />}
    </div>
  );
}