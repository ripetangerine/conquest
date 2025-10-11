"use client"
import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";


export default function NavBar() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  
  // useEffect(()=>{
  //   axios.get('@/api/login')
  //     .then((response) => {
  //       // TODO : data 에서 로그인 여부만 훅으로 설정
  //       setIsLogin(response.data)
  //     })
      
  // },[setIsLogin])

  return isLogin ? <Navigation_1/> : <Navigation_2/>;
}

function Navigation_1() { // 로그인되었을 때 nav
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <Link href={"/"}>conquest</Link>
      </div>
      <div className={styles.nav_list}>
        <Link href="/posts/new">
          <Image 
            className={styles.nav_item} 
            src="/asset/nav_button1_write.png" 
            alt="navWrite" 
            width={112}
            height={45}
          />
        </Link>
        <Link href="/mypage">
          <Image 
            className={styles.nav_item} 
            src="/asset/nav_button2_mypage.png" 
            alt="navMypage" 
            width={112}
            height={45}
          />
        </Link>
      </div>
    </nav>
  );
}

function Navigation_2() { // 로그인 안되었을 때
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