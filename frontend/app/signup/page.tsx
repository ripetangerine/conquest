"use client"
import LoginForm from "@/components/LoginForm";

export default function Signup(){
  return (
    <LoginForm isLogin={false} title="회원가입"/>
  );
}