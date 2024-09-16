import Image from "next/image";
import { MainNavigation } from "./main-navigation";
import { Button } from "../button";
import { User, UserPlus } from "lucide-react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="border-b border-base-content/10">
      <div className="container flex items-center justify-between">
        <Image src={"/images/logo.svg"} width={100} height={80} alt="بلاگ چی" />
        <MainNavigation />
        <div className="mr-auto">
          <div className="flex items-center gap-x-2">
            <Button variant="primary" size="normal">
              <UserPlus size={18} />
              <Link href={"/signup"}>ثبت نام</Link>
            </Button>
            <Button variant="secondary" size="normal">
              <Link href={"/signin"}>ورود</Link>
              <User size={18} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
