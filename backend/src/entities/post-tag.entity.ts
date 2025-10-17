import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class PostTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  tagId: number;

  @Column({nullable: false})
  tag: string;

  //태그 검색 api 태그의 id가 추가 


  @ManyToOne(() => Post, (post) => post.tags)
  post: Post;
}