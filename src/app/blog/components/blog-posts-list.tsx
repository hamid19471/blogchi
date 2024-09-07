import { BlogPostsListProps } from "../types/blog-posts-list.types";
import { BlogPostCard } from "./blog-card";

export const BlogPostsList: React.FC<BlogPostsListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-20">
      {posts.slice(0, 4).map((post) => (
        <BlogPostCard key={`post-list-${post._id}`} {...post} />
      ))}
    </div>
  );
};
