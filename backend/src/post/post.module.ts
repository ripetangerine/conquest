import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostEntity } from './entities/post.entity';
import { PostImageEntity } from './entities/post-image.entity';
import { PostTagEntity } from './entities/post-tag.entity';

@Module({
  // 엔티티 인식하도록 모듈 등록
  imports: [
    TypeOrmModule.forFeature(
      [
        PostEntity,
        PostImageEntity,
        PostTagEntity,
      ]
    )
  ],
  providers: [PostService,],
  controllers: [PostController],
})
export class PostModule {}
