import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { Category } from "./post-category.interface";

export interface Post {
  _id: string;
  title: string;
  slug: string;
  category: Category;
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  readingTime: number;
  tags: string[];
  author: Author;
  related: any[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  coverImageUrl: string;
  id: string;
  commentsCount: number;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
}
