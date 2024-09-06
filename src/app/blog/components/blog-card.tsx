import Image from "next/image";
import { BlogCardProps } from "../types/blog-card.types";
import Link from "next/link";
import { BookmarkIcon, HeartIcon } from "lucide-react";
import { toPersianNumber } from "@/utils/persian-number";

export const BlogPostCard: React.FC<BlogCardProps> = ({
  title,
  coverImageUrl,
  slug,
  readingTime,
  isBookmarked,
  isLiked,
  author,
}) => {
  return (
    <div className="card">
      <figure>
        <div className="relative h-[220px] w-[300px] overflow-hidden">
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            className="object-cover object-center"
          />
        </div>
      </figure>
      <div className="card-body">
        <Link href={`/blog/${slug}`}>
          <h2 className="card-title">{title}</h2>
        </Link>
        <div className="card-body-section">
          <div>نویسنده: {author.name}</div>
          <div>{toPersianNumber(readingTime)} دقیقه</div>
        </div>
      </div>
      <div className="card-footer">
        <div className="flex items-center gap-x-2">
          <HeartIcon
            size={18}
            stroke="red"
            fill={isLiked ? "red" : "none"}
            className="cursor-pointer hover:scale-105"
          />
          <BookmarkIcon
            size={18}
            stroke="#0777E6"
            fill={isBookmarked ? "#0777E6" : "none"}
            className="cursor-pointer hover:scale-105"
          />
        </div>
        <Link href={`/blog/${slug}`}>ادامه مطلب</Link>
      </div>
    </div>
  );
};
