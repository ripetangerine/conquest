import {useState, useEffect} from "react"
import Image from "next/image"
import {useParams} from "next/navigation"
import styles from "./page.module.css"

import HeartIcon from "@/public/asset/heart_icon.svg";
import ShareIcon from "@/public/asset/share_icon.svg";



type FetchedDataType = {
  imgUrl: string;
  title: string;
  writer: string;
  likes: number;
  shares: number;
  content: string; 
}

export default function PostDetail(){
  const {id} = useParams() as {id: string};


  const [data, setData] = useState<FetchedDataType | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch(`/api/post/${id}`)
      .then(res => res.json())
      .then((fetchedData: FetchedDataType)=>{
        setData(fetchedData);
        setLoading(false);
      })
      .catch(error=>{
        console.error("Fail to fetch post : ", error);
        setLoading(false);
      })
  }, [id])

  if(!data){
    return <div className={styles.container}>게시글을 찾을 수 없거나 데이터를 불러오지 못했습니다.</div>
  }

  return(
    <div className={styles.container}>
      <div className={styles.cover}>
        <Image 
          className={styles.header_image}
          src={data.imgUrl} 
          alt="게시글 이미지"
          height={900}
          width={200}
        /> 
      </div>
      
      <div className={styles.title}>{data.title}</div>
      <div className={styles.writer}>{`by ${data.writer}`}</div>
      <div className={styles.rate}>
        <div className={`${styles.like}`}>
          <HeartIcon/>
          {data.likes}
        </div>
        <div className={`${styles.share}`}>
          <ShareIcon/>
          {data.shares}
        </div>
      </div>
      <div 
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  )
}