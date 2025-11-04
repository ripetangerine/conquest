'use client'
import { useState } from 'react';
import Image from "next/image";
import styles from "./Quest.module.css";

// LATER : 추후 퀘스트 누르면 해당 이벤트로 이동하는 기능 구현

interface QuestProps{
  questType:string,
  title: string,
  subtitle : string,
  done?: boolean
}

export default function Quest(){
  // useEffect 사용 해서 값 불러온 다음 넣어서 반환

  const [questList, setQuestList] = useState();
  // const [product, setProduct] = useState<{ name: string; price: number } | null>(null);

  const questHandler = async () =>{
    try {
      const res = await fetch(`/api/quest`);
      if (!res.ok) throw new Error('제품 정보를 찾을 수 없습니다.');
      const data = await res.json();  // quest data
      setQuestList(data);
    } catch (error) {
      console.error(error);
      alert(`퀘스트 불러오기에 실패했습니다. : ${error}`);
    }
  }

  return (
    <div>
      {

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
        src="/asset/quest_post_icon.png" 
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