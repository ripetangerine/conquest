import styles from "./Post.module.css"
import Image from "next/image"
import _like from "@/asset/like.png"
import _share from "@/asset/share.png"

interface PageProps{
  post_title : string,
  post_writer : string,
}

export default function Post({
  post_title,
  post_writer,
} : PageProps){
  return(
    <div className={styles.container}>
      <div className={styles.title}>{post_title}</div>
      <div className={styles.writer}>{`by ${post_writer}`}</div>
      <div>
        
      </div>
    </div>
  );
}

interface PostInfoProps{
  post_likes? : number,
  post_shares? : number
}

export function PostInfo({post_likes = 0, post_shares = 0} : PostInfoProps){
  return(
    <>
      <div className={styles.likes}>
            <Image src={"_like"} alt="좋아요"/>
            {post_likes}
          </div>
          <div className={styles.shares}>
            <Image src={"_share"} alt="공유"/>
            {post_shares}
      </div>
    </>
  );
}

