import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[700px] grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div className="flex items-center justify-center">{children}</div>
      <div className="w-full items-center justify-center hidden lg:flex">
        <Image src={"/images/programmer.svg"} width={900} height={300} alt="" />
      </div>
    </div>
  );
};
export default AuthLayout;
