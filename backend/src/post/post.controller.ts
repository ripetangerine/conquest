import { 
  Controller, 
  Post,
  Get,
  Body,
  Param,
} from '@nestjs/common';

import {PostService} from "./post.service";
import { CreatePostDto } from 'src/dto/create-post.dto';
import {Post as PostEntity} from "src/entities/post.entity";

@Controller('post')
export class PostController {
  constructor(private readonly postService:PostService){}


  @Post()
  createPost(@Body() postData: CreatePostDto): Promise<PostEntity> {
    return this.postService.create(postData);
  }

}
