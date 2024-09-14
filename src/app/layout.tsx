import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/app/_components/header/header";
import { Footer } from "@/app/_components/footer/footer";
import QueryProvider from "@/providers/react-query-provider";

//google font
const figtree = Figtree({
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-figtree",
});

//local font
const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "بلاگ چی | مرجع اشتراک گزاری برنامه نویسی",
  description:
    "رائه محتوایی متفاوت با آنچه که در حوزه تکنولوژی دیده اید | بلاگ چی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`dark ${figtree.variable} ${vazir.variable}`}
    >
      <body className="bg-base-100 text-base-content min-h-screen grid grid-rows-[80px_1fr_auto]">
        <QueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
