import styles from "Post.module.css"
import Image from "next/image"
import _like from "@/asset/like.png"
import _share from "@/asset/share.png"

interface PageProps{
  post_title : string,
  post_writer : string,
  post_likes ?: number,
  post_shares ?: number
}

export default function Post({
  post_title,
  post_writer,
  post_likes,
  post_shares
} : PageProps){
  return(
    <div className={styles.container}>
      <div className={styles.title}>{post_title}</div>
      <div className={styles.writer}>{`by ${post_writer}`}</div>
      <div>
        <div className={styles.likes}>
          <Image src={"_like"} alt="좋아요"/>
          {post_likes}
        </div>
        <div className={styles.shares}>
          <Image src={"_share"} alt="공유"/>
          {post_shares}
        </div>
      </div>
    </div>
  );
}