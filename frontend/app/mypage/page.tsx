"use client"
import {useState} from "react"
import Image from "next/image"
import styles from "./page.module.css"
import ProfileIcon from "@/public/asset/profile_icon.svg";


export default function Mypage(){

  const [ImagePath, setImagePath] = useState()
  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userJoined, setUserJoined] = useState()

  //useEffect
  

  return(
    <div className={styles.container}>
      <div className={styles.profile}>
        <Image
          className={styles.profile_image}
          src={ImagePath??"@/public/asset/profile_default.png"}
          width={150}
          height={150}
          alt="profile"
        />
        <ProfileIcon
          className={styles.profile_icon}
        />
        <div className={styles.user_name}>
          {userName??"로그인 해주세요"}
        </div>
        <div className={styles.email}>
          {userEmail??""}
        </div>
        <div className={styles.joined_date}>
          {userJoined ? `Joined in ${userJoined}` : ""}
        </div>
      </div>
    </div>
  )
}