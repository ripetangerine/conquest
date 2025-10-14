import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import {PostImage} from "./post-image.entity";
import {PostTag} from "./post-tag.entity"; 

@Entity()
export class Post{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  authorId: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Column('text',{
    nullable: false,
  })
  content: string;  // 긴 문자열, HTML 태그 처리

  @Column({
    default : 0,
    nullable: false,
  })
  likeCount: number;
  
  @Column({
    default : 0,
    nullable: false,
  })
  shareCount: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToMany(() => PostImage, (image) => image.post)
  images: PostImage[];

  @OneToMany(() => PostTag, (tag) => tag.post)
  tags: PostTag[];
}
