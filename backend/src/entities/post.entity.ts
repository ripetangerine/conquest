import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import {PostImageEntity} from "./post-image.entity";
import {PostTagEntity} from "./post-tag.entity"; 

@Entity()
export class PostEntity{
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

  @OneToMany(() => PostImageEntity, (image) => image.post)
  images: PostImageEntity[];

  @OneToMany(() => PostTagEntity, (tag) => tag.post)
  tags: PostTagEntity[];
}
