import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class PostTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tagId: number;

  @ManyToOne(() => Post, (post) => post.tags)
  post: Post;
}