'use client'
import {useState} from "react";
import Link from "next/link";
import styles from "./LoginForm.module.css";

type LoginFormProps = {
  isLogin?: boolean;
  title?: string;
  onSubmit?: (e: React.FormEvent) => void;
};

export default function LoginForm({
  isLogin = true,
  title = "돌아오신 것을 환영합니다.",
  onSubmit,
}: LoginFormProps){
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  // hadleSubmit 폼 입력 완료 후 버튼이 눌렸을때의 이벤트핸들러
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);

    try{
      const response = 
      if(isLogin){

      }
      else{
        const response = await fetch('/api/auth', {
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({data: inputValue}),
        })
      }

      if(response.ok){
        
      }
    }catch(error){
      console.log(`에러 발생 : ${error}`);
    }
  };

  return (
    <div className={styles.container}>
      <div id={styles.title}>{title}</div>
      <form className={styles.items} onSubmit={handleSubmit}>
        <input className={styles.inputform} type="text" placeholder="ID/Email" />
        <input className={styles.inputform} type="password" placeholder="password" />
        <button className={styles.loginButton} type="submit">로그인</button>
      </form>
      {isLogin ? (
        <div className={styles.signup}>
          <div id={styles.signup_sentanse}>계정이 없으신가요?</div>
          <Link className={styles.signup_link} href="/signup">회원가입</Link>
        </div>
      ) : null}
    </div>
  );
}


