import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class QuestService {
  constructor(private dataSource: DataSource) {}

  // 전체 목록 조회
  async findAll() {
    const query = 'SELECT id, title, content, reward_xp FROM quests';
    const [rows] = await this.dataSource.query(query);
    return rows;
  }

  // 특정 id로 조회
  async findOne(id: string) {
    const query = 'SELECT id, title, content, reward_xp FROM quests WHERE id = ?';
    const [rows] = await this.dataSource.query(query, [id]);

    // 결과가 없으면 null 반환
    return rows?.[0] || null;
  }
}
