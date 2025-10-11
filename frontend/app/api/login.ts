import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const response = await axios.get(process.env.BACKEND_URL!);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(`login error : ${error}`);
    return NextResponse.json({ error: "fail user fetch" }, { status: 500 });
  }
}
