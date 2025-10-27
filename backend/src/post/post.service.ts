
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
import { PostImageEntity} from '../entities/post-image.entity';
import { PostTagEntity } from 'src/entities/post-tag.entity';
import { CreatePostDto } from 'src/dto/post.dto';
import { url } from 'inspector';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private PostRepository: Repository<PostEntity>,

    @InjectRepository(PostImageEntity)
    private ImageRepository: Repository<PostImageEntity>,

    @InjectRepository(PostTagEntity)
    private TagRepository: Repository<PostTagEntity>,
  ) { }

  async create(dto: CreatePostDto){
    const {title, content, images, tagNames} = dto;
   
    const tags = await Promise.all(
      tagNames.map(async (name)=>{
        let tag = await this.TagRepository.findOne({where: {name}});
        if(!tag) tag = this.TagRepository.create({name});
        return tag;
      }),
    )

    const imageEntites = images.map((url) =>
      this.ImageRepository.create({url}),
    )

    const post = this.PostRepository.create({
      title,
      content,
      images: imageEntites,
      tags,
    })

    return await this.PostRepository.save(post);

  }

  // 게시글 전체 조회
  async findAll(): Promise<PostEntity[]> {
    return this.PostRepository.find({
      relations: ['images', 'tags'],
      order: {id: 'DESC'},
    });
  }

  // 단일 조조회
  async findOne(id: number): Promise<PostEntity> {
    try{
      return await this.PostRepository.findOneOrFail({
        where: {id},
        relations: ['images', 'tags'],
      });
    }catch{
      throw new NotFoundException(`post with id ${id} not found`);
    }
  }

  async update(id: number, dto: CreatePostDto): Promise<PostEntity> {
    const post = await this.findOne(id);
    if(!post) throw new NotFoundException(`post ${id} not found`);

    const {title, content, images, tagNames} = dto;

    const tags = await Promise.all(
      tagNames.map(async (name)=>{
        let tag = await this.TagRepository.findOne({where: {name}});
        if(!tag){
          tag = this.TagRepository.create({name});
          await this.TagRepository.save(tag);
        }
        return tag;
      })
    )

    await this.ImageRepository.delete({post: {id}});
    const imageEntites = images.map((url) =>
      this.ImageRepository.create({url, post})
    );

    post.title = title;
    post.content = content;
    post.tags = tags;
    post.images = imageEntites;

    return await this.PostRepository.save(post);
  }

  async remove(id: number): Promise<number> {
    await this.PostRepository.delete(id);
    return id
  }
}

