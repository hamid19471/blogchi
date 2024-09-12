import { Instagram, MapPin, PhoneIcon } from "lucide-react";
import { Button } from "../button";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-base-300">
      <div className="container grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 py-14 gap-8">
        <div className="xl:col-span-2">
          <h2 className="font-bold text-4xl">بلاگ چی</h2>
          <p className="w-2/3 text-justify my-4">
            مرجع اشتراک‌گذاری برنامه‌نویسی به عنوان یک پلتفرم برای برنامه‌نویسان
            ایجاد شده است تا بتوانند دانش، تجربیات و پروژه‌های خود را با دیگران
            به اشتراک بگذارند.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="primary" size="normal">
              درباره ما
            </Button>
            <Button variant="secondary" size="normal">
              ثبت نام
            </Button>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-bold text-2xl mb-4">دسته بندی</h2>
          <ul className="flex flex-col gap-2 [&>li]:cursor-pointer [&>li:hover]:text-primary">
            <li>ری اکت</li>
            <li>نکست جی اس</li>
            <li>جاوااسکریپت</li>
            <li>فرانت اند</li>
            <li>اچ تی ام ال</li>
            <li>سی اس اس</li>
          </ul>
        </div>
        <div className="w-full">
          <h2 className="font-bold text-2xl mb-4">مقالات جدید</h2>
          <ul className="flex flex-col gap-2 [&>li]:cursor-pointer [&>li:hover]:text-primary">
            <li>ری اکت</li>
            <li>نکست جی اس</li>
            <li>جاوااسکریپت</li>
            <li>فرانت اند</li>
            <li>اچ تی ام ال</li>
            <li>سی اس اس</li>
          </ul>
        </div>
        <div className="w-full">
          <h2 className="font-bold text-2xl mb-4">تماس با ما</h2>
          <ul className="flex flex-col gap-2 ">
            <li className="flex items-center gap-2">
              <PhoneIcon size={20} color="var(--color-primary)" />
              شماره تماس: ۰۹۱۲۵۱۸۰۴۲۱
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={20} color="var(--color-primary)" />
              آدرس: تهران٬ قیطریه
            </li>
            <li className="mt-8 flex flex-col gap-2">
              مارا در شبکه اجتماعی دنبال کنید:
              <Instagram
                size={20}
                color="var(--color-primary)"
                className="hover:scale-110 duration-200 transition-all ease-in-out cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="container text-xs border-t border-base-content/20 text-base-content/60 py-4 flex items-center justify-between gap-2">
        <span>© 2024 بلاگ چی. همه حقوق محفوظ است</span>
        <span>
          تمامی حقوق مادی و معنوی این وب‌سایت متعلق به بلاگ چی می‌باشد
        </span>
        <span>طراحی و توسعه: حمیدرضا اسدی</span>
      </div>
    </footer>
  );
};
