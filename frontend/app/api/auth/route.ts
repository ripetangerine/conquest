import {NextResponse} from 'next/server';

// 회원가입
export async function POST(req: Request){
  const body = await req.json();
  try{
    //서버의 응답
    const res = await fetch(
      `${process.env.NEST_BASE_URL}/auth/login`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      }
    );
    const data = await res.json();
    return NextResponse.json(
      data,
      {status: res.status}
    );

  }catch(error){
    console.log(`회원가입 에러 : ${error}`);
    return NextResponse.json(
      {message: `auth 회원가입 생성 프록시 요청 실패`},
      {status : 500}
    )
  }
}

// 로그인
export async function GET(req: Request){
  
  try{

  } catch(error){
    
  }
}