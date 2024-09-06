import { BlogPostsListProps } from "../types/blog-posts-list.types";
import { BlogPostCard } from "./blog-card";

export const BlogPostsList: React.FC<BlogPostsListProps> = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-x-12 mt-12">
      {posts.slice(0, 4).map((post) => (
        <BlogPostCard key={`post-list-${post._id}`} {...post} />
      ))}
    </div>
  );
};
