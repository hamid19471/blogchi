import { BlogCardProps } from "../types/blog-card.types";

export const BlogPostCard: React.FC<BlogCardProps> = ({
  title,
  briefText,
  coverImageUrl,
  slug,
  readingTime,
  isBookmarked,
  isLiked,
  author,
}) => {
  return <div>Blog Post Card</div>;
};
