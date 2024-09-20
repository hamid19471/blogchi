import { postData } from "@/core/http-services/http-service";
import { SigninFormValues } from "../_types/signin.interface";
import { useMutation } from "@tanstack/react-query";

const signIn = (data: SigninFormValues): Promise<void> =>
  postData("/user/signin", data);

type SigninOption = {
  onSuccess: () => void;
};

export const useSignin = ({ onSuccess }: SigninOption) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: onSuccess,
  });

  return {
    submit,
    isPending,
  };
};
