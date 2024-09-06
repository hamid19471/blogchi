import { Post } from "./single-post.interface";

export interface PostBlogs {
  statusCode: number;
  data: {
    posts: Post[];
  };
}
