import { NextRequest, NextResponse } from "next/server";

// 가짜 DB 조회
async function getPostById(id: string) {
  // 실제로는 DB에서 fetch
  return {
    id,
    title: "기존 제목",
    content: "기존 내용",
    tags: ["nextjs", "react"],
    images: ["/uploads/a.jpg", "/uploads/b.jpg"], // 기존 저장된 URL
  };
}

// 가짜 저장
async function updatePost(id: string, data: {
  title?: string;
  content?: string;
  tags?: string[];
  // 파일 업로드 후 생성된 새 URL들
  addImages?: string[];
  // 삭제할 기존 URL들
  removeImages?: string[];
}) {
  // TODO: DB 업데이트 구현
  return { ok: true };
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = await getPostById(params.id);
  if (!post) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const formData = await req.formData();

  const title = formData.get("title") as string | null;
  const content = formData.get("content") as string | null;

  // 동일 key로 여러 번 append된 값들
  const tags = formData.getAll("tags").map(v => String(v));
  const removedImages = formData.getAll("removedImages").map(v => String(v));
  const newFiles = formData.getAll("newImages") as File[]; // 업로드된 새 파일들

  // 1) 파일 저장 로직 (S3, Cloud Storage 등) → 새 URL 배열 생성
  const uploadedUrls: string[] = [];
  for (const file of newFiles) {
    // 예시: 로컬 파일 저장 또는 클라우드 업로드 후 URL 반환
    // const url = await uploadToS3(file);
    // uploadedUrls.push(url);
  }

  await updatePost(params.id, {
    title: title ?? undefined,
    content: content ?? undefined,
    tags: tags.length ? tags : undefined,
    addImages: uploadedUrls,
    removeImages: removedImages,
  });

  return NextResponse.json({ ok: true });
}
