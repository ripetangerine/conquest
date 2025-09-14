'use client'
import React from "react";
import Link from "next/link";
import styles from "./LoginForm.module.css";

type LoginFormProps = {
  showSignupLink?: boolean;
  title?: string;
  onSubmit?: (e: React.FormEvent) => void;
};

export default function LoginForm({
  showSignupLink = true,
  title = "돌아오신 것을 환영합니다.",
  onSubmit,
}: LoginFormProps){
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <div className={styles.container}>
      <div id={styles.title}>{title}</div>
      <form className={styles.items} onSubmit={handleSubmit}>
        <input className={styles.inputform} type="text" placeholder="ID/Email" />
        <input className={styles.inputform} type="password" placeholder="password" />
        <button className={styles.loginButton} type="submit">로그인</button>
      </form>
      {showSignupLink ? (
        <div className={styles.signup}>
          <div id={styles.signup_sentanse}>계정이 없으신가요?</div>
          <Link className={styles.signup_link} href="/signup">회원가입</Link>
        </div>
      ) : null}
    </div>
  );
}


