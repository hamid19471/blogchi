"use client";

import { Button } from "@/app/_components/button";
import { Textbox } from "@/app/_components/textbox";
import Link from "next/link";

export const SigninForm = () => {
  return (
    <>
      <h3 className="font-black text-3xl mb-2">ثبت نام</h3>
      <p className="font-light mb-12">
        عضویت در بلاگ چی همیشه رایگان خواهد بود
      </p>
      <form>
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-2">
            <Textbox placeholder="نام و نام خانوادگی" />
            <Textbox placeholder="پست الکترونیک" type="email" />
          </div>
          <Textbox placeholder="رمز عبور" type="password" />
          <Textbox placeholder="تکرار رمز عبور" type="password" />
        </div>
        <div>
          <Button type="submit" variant="primary" className="w-full">
            ثبت نام
          </Button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-2 mt-4">
        <p>قبلا ثبت نام کرده اید؟</p>
        <Link href={"/signin"} className="text-primary font-bold">
          وارد حساب کاربری شوید
        </Link>
      </div>
    </>
  );
};
