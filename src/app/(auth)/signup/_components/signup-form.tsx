"use client";

import { Button } from "@/app/_components/button";
import { Textbox } from "@/app/_components/textbox";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SignupFormValues } from "../_types/signup.interface";
import TextInput from "@/app/_components/form-inputs/text-input/text-intput";
import { useSignup } from "../_api/signup";
import { useRouter } from "next/navigation";

export const SigninForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  const { submit, isPending } = useSignup({
    onSuccess: () => {
      router.push("/signin");
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    const { confirmPassword, ...rest } = data;
    submit(rest);
  };

  return (
    <>
      <h3 className="font-black text-3xl mb-2">ثبت نام</h3>
      <p className="font-light mb-12">
        عضویت در بلاگ چی همیشه رایگان خواهد بود
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-2">
            <TextInput
              register={register}
              name="name"
              errors={errors}
              placeholder="نام و نام خانوادگی"
              rules={{
                required: {
                  value: true,
                  message: "لطفا نام خود را وارد کنید",
                },
                minLength: {
                  value: 5,
                  message: "نام باید بیشتر از 5 کاراکتر باشد",
                },
              }}
            />
            <TextInput
              register={register}
              name="email"
              placeholder="پست الکترونیکی خود را وارد کنید"
              errors={errors}
              type="email"
              rules={{
                required: {
                  value: true,
                  message: "پست الکترونیکی الزامی است",
                },
              }}
            />
          </div>
          <TextInput
            register={register}
            type="password"
            name="password"
            errors={errors}
            placeholder="رمز عبور"
            rules={{
              required: {
                value: true,
                message: "رمز عبور الزامی است",
              },
              minLength: {
                value: 8,
                message: "رمز عبور باید بیشتر از 8 کاراکتر باشد",
              },
            }}
          />
          <TextInput
            register={register}
            name="confirmPassword"
            type="password"
            placeholder="تکرار رمز عبور"
            errors={errors}
            rules={{
              required: {
                value: true,
                message: "تکرار رمز عبور الزامی است",
              },
              minLength: {
                value: 8,
                message: "تکرار رمز عبور باید بیشتر از 8 کاراکتر باشد",
              },
              validate: (value) =>
                value === watch("password") ||
                "رمز عبور با تکرار آن یکسان نیست",
            }}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            isLoading={isPending}
          >
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
