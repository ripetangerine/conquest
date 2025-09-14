import Image from "next/image";
import styles from "Quest.module.css"


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
    <div className={styles.containter}>
      {/*  */}
      <div className={styles.temp}>
        <Image className={styles.img} src="" alt=""/>
        <div className={styles.titles}>
          <div className={styles.quest_name}>{title}</div>
          <div className={styles.quest_name}>{subtitle}</div>
        </div>
      </div>
      {done?
        <Image className={styles.check} src="" alt="done"/>:
        <Image className={styles.check} src="" alt="no-done"/>}
    </div>
  );
}