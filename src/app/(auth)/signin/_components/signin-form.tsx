"use client";

import { Button } from "@/app/_components/button";
import { Textbox } from "@/app/_components/textbox";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SigninFormValues } from "../_types/signin.interface";

export const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SigninFormValues) => {
    console.log(data);
  };

  return (
    <>
      <h3 className="font-black text-3xl mb-2">ورود</h3>
      <p className="font-light mb-12">ورود به حساب کاربری</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 mb-12">
          <Textbox
            {...register("email", {
              required: {
                value: true,
                message: "ایمیل خود را وارد کنید",
              },
            })}
            placeholder="پست الکترونیک"
            type="email"
          />
          <Textbox
            {...register("password", {
              required: {
                value: true,
                message: "رمز عبور خود را وارد کنید",
              },
            })}
            placeholder="رمز عبور"
            type="password"
          />
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
