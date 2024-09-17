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
            <Link href={"/signup"}>
              <Button variant="primary" size="normal">
                <UserPlus size={18} />
                ثبت نام
              </Button>
            </Link>
            <Link href={"/signin"}>
              <Button variant="secondary" size="normal">
                ورود
                <User size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
