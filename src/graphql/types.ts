export interface CommentSchema {
  id: number;
  ownerName: string;
  content: string;
}

export interface PostSchema {
  id: number;
  ownerName: string;
  content: string;
  comments: CommentSchema[];
}
