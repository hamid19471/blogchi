import { PostBlogs } from "@/types/post-blogs.interface";
import { HomeHero } from "./_components/home-hero";
import { BlogPostsList } from "./blog/components/blog-posts-list";
import { API_URL } from "@/configs/global";
import { Button } from "./_components/button";
import { ArrowLeft } from "lucide-react";
import { Subscribtion } from "./_components/subscribtion/subscribtion";

const getNewstBlot = async (): Promise<PostBlogs> => {
  const res = await fetch(`${API_URL}/post/list`, {
    next: {
      revalidate: 40,
    },
  });
  return res.json();
};

export default async function Home() {
  const {
    data: { posts },
  } = await getNewstBlot();
  return (
    <>
      <HomeHero />
      <section className="container mt-20">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2">
          <div className="text-center xl:text-right">
            <h2 className="text-3xl font-extrabold">جدیدترین مقالات</h2>
            <p>جدیدترین اخبار و مقالات آموزشی در حوزه فن آوری اطلاعات</p>
          </div>
          <Button variant="neutral" size="large">
            تمامی مقالات
            <ArrowLeft size={14} />
          </Button>
        </div>
        <BlogPostsList posts={posts} />
        <div className="mt-20 mb-12 relative">
          <Subscribtion />
          <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </section>
    </>
  );
}
