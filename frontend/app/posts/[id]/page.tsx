import {useState, useEffect} from "react"
import Image from "next/image"
import {useParams} from "next/navigation"
import styles from "./page.module.css"
import {PostInfo} from "@/components/Post"

type Article = {
  id: string;
  title: string;
  writer: string;
  contentHtml?: string;
  content?: string;
  imageUrl?: string;
  likes: number;
  shares: number;
}

export default function postDetail(){
  const {id} = useParams() as {id: string};

  const [title, setTitle] = useState("")
  const [writer, setWriter] = useState("")
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [content, setContent] = useState("")
  const [postLikes, setPostLikes] = useState(0)
  const [postShares, setPostShares] = useState(0)

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    if(!id) return; 

    const ctrl = new AbortController();

    (async () =>{
      try{
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/posts/${id}`, {
          cache: "no-store",
          signal: ctrl.signal,
        });

        if(!res.ok){ throw new Error(`게시글 로드 실패 : ${res.status}`)}

        // 데이터 삽입
        const data: Article = await res.json();
        // TODO : 전부 널 검사 해서, 하나라도 널이라면 오류 내기
        setTitle(data.title)
        setWriter(data.writer ?? "익명")
        if(data.contentHtml){
          setContent(data.contentHtml);
        }else{
          setContent((data.contentHtml ?? "").replace(/\n/g, "<br/>"));        
        }
        setImageUrl(data.imageUrl ?? "");
        setPostLikes(data.likes ?? 0);
        setPostShares(data.shares ?? 0);
      } catch (e: any){
        if(e.name !== "AbortError"){ // 비동기 작업의 의도적 중단이 없었다면
          setError(e.message ?? "모르는 에러임 ;;")
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => ctrl.abort();

  }, [id])

  return(
    <div className={styles.container}>
      <div className={styles.cover}>
        {imageUrl && imageUrl.length > 1 ?
          <Image src={imageUrl} alt="게시글 이미지" fill /> :
          <Image src="asset/postImage" alt="게시글 기본 이미지" fill/>}  
      </div>
      
      <div className={styles.title}>{title}</div>
      <div className={styles.writer}>{`by ${writer}`}</div>
      <div className={styles.post_info}>
        <PostInfo post_likes={postLikes} post_shares={postShares}/>
      </div>
      <div 
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}