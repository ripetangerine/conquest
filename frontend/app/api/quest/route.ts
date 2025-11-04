
import { NextResponse} from 'next/server';
import Quest, { QuestProps } from '@/components/Quest';

const server_url = process.env.NEST_BASE_URL; // 백엔드 서버 주소 

// 변경 가능성 있음
export type RequestProps = {
  url:string,
  method:string,
  headers: HeadersInit,
}


export async function GET(request : RequestProps){
  const url = new URL(request.url); // 전달받은 주소 -> 여기서 경로를 추출
  const path = url.pathname.replace('/api', '');

  const requestURL = `${server_url}${path}` // 요청할 url 풀네임

  try{
    // 요청한 데이터
    const response = await fetch(requestURL, {
      method: request.method,
      headers: request.headers,
      cache: 'no-store',
    })

    // 얻은 값을 클라이언트에 반환
    return new NextResponse(
      response.body,
      { // 본문
        status: response.status,
        headers: response.headers,
      }
    );
  }
  catch(error){
    console.error('Proxy Error:', error);
    return NextResponse.json(
      { message: 'quest 프록시 요청 에러' }, 
      { status: 500 }
    )
  }
}