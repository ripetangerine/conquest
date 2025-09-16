import {useState} from "react"
import styles from "page.module.css"


export default function newPost(){
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState<FileList|null>(null);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tags);
    images ? Array.from(images).forEach((file) => formData.append("images", file)) : null ;

    const res = await fetch("api/posts",{
      method: "POST",
      body: formData
    });

    // json dedug
    const data = await res.json();
    console.log(data)
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