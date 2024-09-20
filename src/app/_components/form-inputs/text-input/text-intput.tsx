import { FieldValues, get } from "react-hook-form";
import { TextInputProps } from "./text-input.types";
import { Textbox } from "../../textbox";

const TextInput = <TFormValues extends FieldValues>({
  register,
  name,
  errors,
  rules,
  type,
  variant,
  ...rest
}: TextInputProps<TFormValues>) => {
  const error = get(errors, name);
  const hasError = !!error;
  return (
    <div className="flex flex-col w-full">
      <Textbox
        {...register(name, rules)}
        {...(hasError ? { variant: "error" } : { variant: variant })}
        {...rest}
        type={type}
      />
      {hasError && <p className="mt-1 text-xs text-error">{error?.message}</p>}
    </div>
  );
};
export default TextInput;
