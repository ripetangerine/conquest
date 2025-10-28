import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';

@Module({
  // 엔티티 인식하도록 모듈 등록
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostService,],
  controllers: [PostController],
})
export class PostModule {}
