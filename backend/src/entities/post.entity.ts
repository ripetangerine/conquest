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

  @Column()
  authorId: number;

  @Column()
  title: string;

  @Column('text')
  content: string;  // 긴 문자열, HTML 태그 처리

  @Column({default : 0})
  likeCount: number;
  
  @Column({default : 0})
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
