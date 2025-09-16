'use client'
/**
 * TODO : 이미지 삭제 처리
 * 
 */

import {useState, useEffect} from "react"
import {useParams} from "next/navigation"
import styles from "@/app/articles/new/page.module.css"


export default function PostEdit() {
  const {id} = useParams() as {id: string};

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState<FileList|null>(null);

  // 기존 서버 정보
  const [existingImages, setExistingImages] = useState<string[]>([])
  const [removedImageUrls, setRemovedImagesUrls] = useState<string[]>([])
  
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null) // any 방지
 
  // 데이터 불러오기
  useEffect(()=>{
    (async () =>{
      try{
        const res = await fetch(`/api/articles/${id}`, {cache: "no-store"});
        if(!res.ok) throw new Error("게시글을 불러오지 못했습니다.");
        // 데이터 디버깅
        const post = await res.json();
        setTitle(post.title ?? "제목이 없습니다.");
        setContent(post.content ?? "내용이 없습니다.");
        setTags(post.tags ?? "태그가 없습니다."); 
        setImages(post.images ?? []);
      }
      catch(e:any){
        setError(e.message?? "에러났다.")
      }
    })();
  }, [id])

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true)
    setError(null)

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tags);

    removedImageUrls.forEach(url => formData.append("removedImages", url))
    if(images){
      Array.from(images).forEach(file => formData.append("newImages", file))
    }

    const res = await fetch("api/posts${id}",{
      method: "PATCH",
      body: formData
    });

    if(!res.ok){
      const j = await res.json().catch(()=>null)
      throw new Error(j?.message || "수정 실패")
    }
    // json dedug
    const data = await res.json();
    console.log("데이터 전문 : ",data)
  }

  return(
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {/* 제목폼 */}
        <div className={styles.titleform}>
          <input 
            type="text" 
            placeholder={"제목을 입력해주세요"}
            value={title}
            onChange={(e)=> setTitle(e.target.value)} 
          />
        </div>
        <div className={styles.contentform}>
          <textarea 
            placeholder={""}
            value={content}
            onChange={(e)=> setContent(e.target.value)} 
          />
        </div>
        <div className={styles.imgform}>
          <input 
            type="file"
            accept="image/*"
            multiple
            onChange={(e)=>setImages(e.target.files)} 
          />
        </div>
        <div className={styles.tagform}>
          {/* 추후 검색 형식으로 변경 */}
          <input
            type="text"
            placeholder="태그추가"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
