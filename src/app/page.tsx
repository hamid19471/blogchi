import { PostBlogs } from "@/types/post-blogs.interface";
import { HomeHero } from "./_components/home-hero";
import { BlogPostsList } from "./blog/components/blog-posts-list";

const getNewstBlot = async (): Promise<PostBlogs> => {
  const res = await fetch(`http://localhost:4000/api/post/list`, {
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
        <div className="text-center xl:text-right">
          <h2 className="text-3xl font-extrabold">جدیدترین مقالات</h2>
          <p>جدیدترین اخبار و مقالات آموزشی در حوزه فن آوری اطلاعات</p>
        </div>
        <BlogPostsList posts={posts} />
      </section>
    </>
  );
}
