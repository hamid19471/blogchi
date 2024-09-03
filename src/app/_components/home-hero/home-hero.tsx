import Image from "next/image";
import { Button } from "../button";

export const HomeHero: React.FC = () => {
  return (
    <section className="bg-hero-section mt-12 bg-no-repeat bg-center xl:bg-left">
      <div className="container flex flex-col-reverse xl:flex-row items-center justify-between">
        <div className="flex flex-col gap-3 pb-5 items-center text-center xl:text-right xl:items-start">
          <h1 className="gradiant text-6xl lg:text-3xl xl:text-8xl font-bold text-base-content pt-6 pb-2 ">
            بلاگ چی
          </h1>
          <p className="text-base-content font-light text-xl xl:text-2xl ">
            مرجع اشتراک گزاری برنامه نویسی
          </p>
          <p className="text-base-content font-light text-justify xl:pl-24">
            مرجع اشتراک‌گذاری برنامه‌نویسی به عنوان یک پلتفرم برای برنامه‌نویسان
            ایجاد شده است تا بتوانند دانش، تجربیات و پروژه‌های خود را با دیگران
            به اشتراک بگذارند. این مرجع به کاربران امکان می‌دهد تا کدهای خود را
            منتشر کرده، از پروژه‌های دیگران ایده بگیرند و با مشارکت در بحث‌ها و
            بازبینی‌ها، مهارت‌های خود را ارتقا دهند. همچنین، به عنوان یک فضای
            تعاملی برای پرسش و پاسخ، تبادل نظر و حل مشکلات برنامه‌نویسی عمل
            می‌کند و به توسعه‌دهندگان کمک می‌کند تا به آخرین ترندها و فناوری‌های
            روز دسترسی داشته باشند.{" "}
          </p>
          <Button variant="primary">تست دکمه</Button>
          <Image
            className="opacity-80"
            src="/images/frameworks.png"
            width={400}
            height={80}
            alt="بلاگ چی"
          />
        </div>
        <Image
          src="/images/programmer.svg"
          width={720}
          height={521}
          alt="بلاگ چی"
        />
      </div>
    </section>
  );
};
