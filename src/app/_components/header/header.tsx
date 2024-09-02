import Image from "next/image";
import { MainNavigation } from "./main-navigation";

export const Header: React.FC = () => {
  return (
    <header className="border-b border-base-content/10">
      <div className="container flex items-center justify-between">
        <Image src={"/images/logo.svg"} width={100} height={80} alt="بلاگ چی" />
        <MainNavigation />
        <div className="mr-auto">user Athentication</div>
      </div>
    </header>
  );
};
