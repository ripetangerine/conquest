

// 사용자 입력 필드
// post를 위한 entity 필드 정리
// id 뺀다. id 뺀다.

export class CreatePostDto{
  readonly title: string;
  readonly content: string;
  readonly likeCount: number;
  readonly shareCount: number;
}