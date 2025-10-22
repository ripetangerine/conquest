import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class PostTag {
  @Id // 기본 키(Primary Key) 지정
  @GeneratedValue(strategy = GenerationType.IDENTITY) // ID 자동 생성 전략
  private Long id; // 엔티티의 핵심 식별자

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
