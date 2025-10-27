import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PostEntity } from './post.entity';

@Entity()
export class PostImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    nullable: false
  })
  url: string;

  @ManyToOne(() => PostEntity, (post) => post.images)
  post: PostEntity;
}