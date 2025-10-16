"use client"
import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

import WritingIcon from "@/public/asset/writing_icon.svg";
import MypageIcon from "@/public/asset/mypage_icon.svg";


export default function NavBar() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  
  // useEffect(()=>{
  //   fetch('/api/login')
  //     .then((response) => {
  //       // TODO : data 에서 로그인 여부만 훅으로 설정
  //       return response.json()
  //     })
  //     .then(setIsLogin)
  // })

  return isLogin ? <NavBar_1/> : <NavBar_0/>;
}

function NavBar_1() { // 로그인되었을 때 nav
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <Link href={"/"}>conquest</Link>
      </div>
      <div className={styles.nav_list}>
        <Link href="/posts/new" className={`${styles.no_underline} ${styles.nav_item}`}>
            <WritingIcon className={`${styles.svgs} ${styles.writing_icon}`}/>
            <p className={styles.nav_text}>글 작성</p>
        </Link>
        <Link href="/mypage" className={`${styles.no_underline} ${styles.nav_item} ${styles.mypage_button}`}>
            <MypageIcon className={`${styles.svgs} ${styles.mypage_icon}`}/>
            <p className={styles.nav_text}>마이페이지</p>
        </Link>
      </div>
    </nav>
  );
}

function NavBar_0() { // 로그인 안되었을 때
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <Link href={"/"}>conquest</Link>
      </div>
      <div className={styles.nav_list}>
        <div className={styles.login_button}>로그인</div>
      </div>
    </nav>
  );
}