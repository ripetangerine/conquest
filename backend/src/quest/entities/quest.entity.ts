import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('quests') // 실제 MySQL 테이블 이름 (테이블 이름이 quests라면 이렇게)
export class Quest {
  // id는 문자열이므로 UUID 자동 생성으로 설정
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  title: string;

  @Column('text', { nullable: false })
  content: string;

  @Column('int', { nullable: false })
  reward_xp: number;
}