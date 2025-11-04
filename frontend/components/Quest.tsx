import Image from "next/image";
import styles from "./Quest.module.css"

// LATER : 추후 퀘스트 누르면 해당 이벤트로 이동하는 기능 구현

interface QuestProps{
  questType:string,
  title: string,
  subtitle : string,
  done?: boolean
}



/** Quest line fn -> questType, title, subtitle, done */
export default function Quest({
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