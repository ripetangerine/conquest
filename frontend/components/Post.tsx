"use client"
import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "./Post.module.css"

import HeartIcon from "@/public/asset/heart_icon.svg";
import ShareIcon from "@/public/asset/share_icon.svg";


interface PostProps{
  id: number,
  post_title : string,
  post_writer : string,
  post_likes? : number,
  post_shares? : number
}

// 부르는 장소에서 useeffect
export default function Post(){

  const [data, setData] = useState([]);
  const [id, setId] = useState<number>();
  setId(0);
  //setId(랜덤 알고리즘)

  useEffect(() => {
    // id기반의 제목, 작가, 평가만 가져오는
    fetch(`/api/posts`)
      .then(res => res.json())
      .then(setData);
  }, []);

  return(
    <Link 
      className={styles.container}
      href={`@/posts/${id}/page.tsx`}
    >
      <div className={styles.title}>{data.title}</div>
      <div className={styles.info}>
        <div className={styles.writer}>{`by ${data.writer}`}</div>
        <div className={styles.rate}>
          <div className={styles.likes}>
            <HeartIcon className={`${styles.heart_icon} ${styles.postinfo_icons}`}/>
            {0}
          </div>
          <div className={styles.shares}>
            <ShareIcon className={`${styles.share_icon} ${styles.postinfo_icons}`}/>
            {0}
          </div>
        </div>
      </div>
    </Link>
  );
}
