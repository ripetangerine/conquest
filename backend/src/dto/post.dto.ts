

// 응답 DTO, 요청 DTO 각각 사용


export class CreatePostDto{
  readonly title: string;
  readonly content: string;
  readonly likeCount: number;
  readonly shareCount: number;
}