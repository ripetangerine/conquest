import {useState} from "react";
import LoginForm from "@/components/LoginForm";

export default function Login(){
  const [title, setTitle] = useState("돌아오신 것을 환영합니다")

  return <LoginForm showSignupLink={true} title={title}/>;
}