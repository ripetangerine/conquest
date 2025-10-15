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
    type: 'int',
    nullable: false,
  })
  authorId: number;

  @Column({
    type: 'text',
    nullable: false,
  })
  title: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  content: string;  // 긴 문자열, HTML 태그 처리

  @Column({
    type: 'int',
    default : 0,
    nullable: false,
  })
  likeCount: number;
  
  @Column({
    type: 'int',
    default : 0,
    nullable: false,
  })
  shareCount: number;

  @CreateDateColumn({
    type: 'date',
    nullable: false
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'date',
    nullable: false
  })
  updateAt: Date;

  @DeleteDateColumn({
    type: 'date',
    nullable: true
  })
  deleteAt: Date;

  @OneToMany(() => PostImage, (image) => image.post)
  images: PostImage[];

  @OneToMany(() => PostTag, (tag) => tag.post)
  tags: PostTag[];
}
