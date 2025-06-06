"use client";
import Image from "next/image";
import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";
import { useState } from "react";
import { usePathname } from "next/navigation";
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
});

export default function Navbar() {
  const [menuImg, setMenuImg] = useState("/menu.svg");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const handleImageClick = () => {
    setIsOpen((prev) => !prev);
    setMenuImg((prevsrc) =>
      prevsrc === "/menu.svg" ? "/close.svg" : "/menu.svg"
    );
  };

  return (
    <div className="flex justify-between items-center w-full pt-14 lg:pt-14 md:pt-0 sm:pt-12 fixed z-50">
      <div className="pl-10 w-[50%] flex items-center relative">
        <Image src="/Logo.svg" alt="Logo" width={50} height={50} />
        <div className="w-[530px]  xl:w-[530px] lg:w-[360px] h-[1px] bg-white absolute translate-x-52 z-50 block lg:block min-[320px]:hidden"></div>
      </div>

      <div className=" h-24 bg-[#FFFFFF0D] backdrop-blur-2xl md:block min-[320px]:hidden w-[50%] lg:w-[50%] min-[320px]:w-[85%] relative">
        <div className="flex justify-between items-center w-full h-full px-10">
          <div
            className={`text-white text-base ${barlow.className} ${
              pathname === "/"
                ? "border-b-4 border-white p-7"
                : "p-7 hover:border-b-4 hover:border-gray-700  transition-all duration-300 "
            }`}
          >
            <Link href="/">
              <span className="font-bold">00</span> Home
            </Link>
          </div>

          <div
            className={`text-white text-base ${barlow.className} ${
              pathname === "/destination"
                ? "border-b-4 border-white p-7"
                : "p-7 hover:border-b-4 hover:border-gray-700   transition-all duration-300"
            }`}
          >
            <Link href="/destination">
              <span className="font-bold">01</span> Destination
            </Link>
          </div>

          <div
            className={`text-white text-base ${barlow.className} ${
              pathname === "/crew"
                ? "border-b-4 border-white p-7"
                : "p-7 hover:border-b-4 hover:border-gray-700  transition-all duration-300"
            }`}
          >
            <Link href="/crew">
              <span className="font-bold">02</span> Crew
            </Link>
          </div>

          <div
            className={`text-white text-base ${barlow.className} ${
              pathname === "/technology"
                ? "border-b-4 border-white p-7"
                : "p-7 hover:border-b-4 hover:border-gray-700 transition-all duration-300"
            }`}
          >
            <Link href="/technology">
              <span className="font-bold">03</span> Technology
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex justify-end pr-10 md:hidden">
        <Image
          src={menuImg}
          alt="Menu icon"
          className="min-[320px]:block cursor-pointer"
          width={40}
          height={40}
          onClick={handleImageClick}
        />
      </div>

      {isOpen && (
        <div className="absolute top-0 right-0 bg-[#0B0D1726] backdrop-blur-2xl h-[100vh] w-[400px] text-white space-y-4 md:hidden rounded-xl flex flex-col pt-16 pr-10 z-50">
          <div className="flex items-end justify-end">
            <Image
              src={menuImg}
              alt="Menu icon"
              className="min-[320px]:block cursor-pointer"
              width={40}
              height={40}
              onClick={handleImageClick}
            />
          </div>
          <div className="flex flex-col items-start justify-center mt-20 gap-10 pl-10">
            <Link href="/" className={`block text-2xl ${barlow.className}`}>
              <span className="font-bold">00</span> Home
            </Link>
            <Link
              href="/destination"
              className={`block text-2xl ${barlow.className}`}
            >
              <span className="font-bold">01</span> Destination
            </Link>
            <Link href="/crew" className={`block text-2xl ${barlow.className}`}>
              <span className="font-bold">02</span> Crew
            </Link>
            <Link
              href="/technology"
              className={`block text-2xl ${barlow.className}`}
            >
              <span className="font-bold">03</span> Technology
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
