
// -> /api/post/route

import { NextResponse } from 'next/server';

// NestJS 서버의 기본 URL
// const NEST_BASE_URL = 'http://localhost:3001';

type RequestProps = {
  url:string,
  method:string,
  headers: HeadersInit,
}

export async function GET(request : RequestProps) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api', '');  // nest 에 전달할 경로 -> /posts

  const requestURL = `${process.env.BACKEND_URL}${path}`; 


  try {
    // 요청
    const response = await fetch(requestURL, {
      method: request.method,
      headers: request.headers,
      cache: 'no-store' 
    });

    // 클라이언트 반환
    return new NextResponse(response.body, {
      status: response.status,
      headers: response.headers,
    });

  } catch (error) {
    console.error('Proxy Error:', error);
    return NextResponse.json(
      { message: 'NestJS 서버에 연결할 수 없거나 요청 처리 중 오류 발생' }, 
      { status: 500 }
    );
  }
}

// 참고: POST, PUT, DELETE 등 다른 HTTP 메서드도 비슷하게 구현