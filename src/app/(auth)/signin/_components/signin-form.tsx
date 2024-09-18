"use client";

import { Button } from "@/app/_components/button";
import { Textbox } from "@/app/_components/textbox";
import Link from "next/link";

export const SigninForm = () => {
  return (
    <>
      <h3 className="font-black text-3xl mb-2">ورود</h3>
      <p className="font-light mb-12">ورود به حساب کاربری</p>
      <form>
        <div className="flex flex-col gap-4 mb-12">
          <Textbox placeholder="پست الکترونیک" type="email" />
          <Textbox placeholder="رمز عبور" type="password" />
        </div>
        <div>
          <Button type="submit" variant="primary" className="w-full">
            ورود
          </Button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-2 mt-4">
        <p>ثبت نام نکرده اید؟</p>
        <Link href={"/signup"} className="text-primary font-bold">
          ثبت نام کنید
        </Link>
      </div>
    </>
  );
};
