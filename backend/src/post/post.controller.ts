import { 
  Controller, 
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import {PostService} from "./post.service";
import {PostEntity} from "src/entities/post.entity";
import { CreatePostDto, UpdatePostDto } from 'src/dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService:PostService){}

  @Post()
  async createPost(@Body() postData: CreatePostDto): Promise<PostEntity>{
    return this.postService.create(postData);
  }

  @Get()
  async findAll(): Promise<PostEntity[]>{
    return this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PostEntity>{
    return this.postService.findOne(id);
  }

  @Patch(':id')
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto:UpdatePostDto,
  ) : Promise<PostEntity>{
    return this.postService.update(id, dto);
  }

  @Delete(':id')
  async removePost(@Param('id', ParseIntPipe) id: number): Promise<{deletedId: number}>{
    const deletedId = await this.postService.remove(id);
    return {deletedId};
  }

}
