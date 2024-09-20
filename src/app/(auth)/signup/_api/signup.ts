import { postData } from "@/core/http-services/http-service";
import { SignupFormValues } from "../_types/signup.interface";
import { useMutation } from "@tanstack/react-query";

const signUp = (data: SignupFormValues): Promise<void> =>
  postData("/user/signup", data);

type SignupOption = {
  onSuccess: () => void;
};

export const useSignup = ({ onSuccess }: SignupOption) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: onSuccess,
  });
  return {
    submit,
    isPending,
  };
};
