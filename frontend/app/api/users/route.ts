// app/api/users/route.ts

import { NextResponse } from "next/server";

export async function GET() {

  const server_url = process.env.NEST_BASE_URL;


  try {
    // Nest.js 서버로 요청 (예시: /users)
    const res = await fetch(`${server_url}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Nest 요청 실패: ${res.status}`);
    }

    const data = await res.json();

    // Next.js에서 받은 데이터를 그대로 클라이언트로 전달
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Proxy Error:", error);
    return NextResponse.json({ message: "서버 통신 오류", error: error.message }, { status: 500 });
  }
}
