import { Controller, Get, Param } from '@nestjs/common';
import { QuestService } from './quest.service';

@Controller('quest')
export class QuestController {
  constructor(private readonly questService: QuestService) {}

  // 전체 목록
  @Get()
  async getAll() {
    const quests = await this.questService.findAll();
    return quests; // JSON 자동 변환
  }

  // 단일 퀘스트
  @Get(':id')
  async getOne(@Param('id') id: string) {
    const quest = await this.questService.findOne(id);
    if (!quest) {
      return { message: '해당 퀘스트를 찾을 수 없습니다.' };
    }
    return quest;
  }
}
