import React from "react";
import Image from "next/image";
import { Barlow } from "next/font/google";
import { Bellefair } from "next/font/google";
import Link from "next/link";
const barlow_normal = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bellefair",
});

export default function Hero() {
  return (
    <div className="flex flex-row w-full h-[700px]">
      <div className="mx-40 lg:mx-40 sm:mx-20 min-[320px]:mx-0 my-20 lg:my-20  min-[320px]:my-28 flex flex-row lg:flex-row min-[320px]:flex-col items-center justify-center w-full h-[700px] sm:h-[700px] min-[320px]:h-auto">
        <div className="flex-1 h-full text-white flex flex-col items-start justify-center gap-5 lg:items-start min-[320px]:items-center lg:text-start min-[320px]:text-center">
          <h6 className="text-2xl sm:text-2xl min-[320px]:text-xl">
            SO, YOU WANT TO TRAVEL TO
          </h6>
          <h1
            className={`text-9xl sm:text-9xl min-[320px]:text-8xl ${bellefair.className}`}
          >
            SPACE
          </h1>
          <p
            className={`max-w-[490px] text-base sm:text-base min-[320px]:text-sm ${barlow_normal.className}`}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link href="/destination">
          {/* <Image
            src="/Explore.png"
            alt="Explore"
            width={250}
            height={250}
            className="w-72 min-[320px]:w-52 md:w-64 lg:w-64 xl:w-72 h-auto"
          /> */}
          <div
            className={`group relative flex items-center justify-center w-80 sm:w-80 min-[320px]:w-48 aspect-square rounded-full bg-white text-gray-700 text-3xl transition-all duration-300 ${bellefair.className}`}
          >
            EXPLORE
            <div className="absolute top-1/2 left-1/2 w-[150%] sm:w-[150%] sm:h-[150%] min-[320px]:w-[130%] min-[320px]:h-[130%]   h-[150%] rounded-full bg-white opacity-0 group-hover:opacity-30 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 " />
          </div>
        </Link>
      </div>
    </div>
  );
}
