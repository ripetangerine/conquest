import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, } from 'typeorm';
import { PostEntity } from './post.entity';

@Entity()
export class PostTagEntity {
  @PrimaryGeneratedColumn()
  private id: number; // 엔티티의 핵심 식별자

  @Column({
    type: 'int',
    nullable: false,
  })
  tagId: number;

  @Column({nullable: false})
  name: string;


  @ManyToOne(() => PostEntity, (post) => post.tags)
  post: PostEntity;
}
