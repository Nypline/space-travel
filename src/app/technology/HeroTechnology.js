"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Barlow } from "next/font/google";
import { Bellefair } from "next/font/google";

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

const technologies = [
  {
    id: 1,
    title: "LAUNCH VEHICLE",
    heading: "THE TERMINOLOGY…",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!.",
    image: "/LAUNCHVEHICLE.png",
  },
  {
    id: 2,
    title: "SPACE PORT",
    heading: "THE TERMINOLOGY…",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: "/SPACEPORT.png",
  },
  {
    id: 3,
    title: "SPACE CAPSULE",
    heading: "THE TERMINOLOGY…",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: "/SPACECAPSULE.png",
  },
];

export default function HeroTechnology() {
  const [activeTab, setActiveTab] = useState(technologies[0].title);
  const technology = technologies.find((t) => t.title === activeTab);

  return (
    <div className="flex flex-row w-full ">
      <div className="= flex flex-col mb-0 min-[320px]:mb-10 lg:mb-0 mt-48 lg:mt-48 min-[320px]:mt-44 w-full h-[700px] min-[320px]:h-auto">
        <h1 className="text-white text-2xl sm:text-2xl min-[320px]:text-xl ml-40 lg:ml-40 sm:ml-20 min-[320px]:ml-0 text-start sm:text-start min-[320px]:text-center mb-5">
          <span className="text-gray-500 mr-5">03</span> PICK YOUR TECHNOLOGY
        </h1>

        <div className="flex flex-row lg:flex-row min-[320px]:flex-col-reverse ">
          <div
            className="h-full text-white flex flex-row-reverse lg:flex-row-reverse min-[320px]:flex-col-reverse items-center
           justify-center gap-10 lg:items-center min-[320px]:items-center lg:text-start min-[320px]:text-center ml-40 xl:ml-40 lg:ml-20  min-[320px]:ml-0"
          >
            <div className="h-full text-white flex flex-col items-start justify-center gap-5 lg:items-start min-[320px]:items-center lg:text-start min-[320px]:text-center">
              <h6 className="text-4xl sm:text-4xl min-[320px]:text-3xl">
                {technology?.heading}
              </h6>
              <h1
                className={`text-8xl sm:text-8xl min-[320px]:text-7xl ${bellefair.className}`}
              >
                {technology?.title}
              </h1>
              <p
                className={`max-w-[490px] text-base sm:text-base min-[320px]:text-sm min-[320px]:max-w-96 sm:max-w-[490px]  ${barlow_normal.className}`}
              >
                {technology?.description}
              </p>
            </div>

            <div className="flex flex-col lg:flex-col min-[320px]:flex-row space-x-8 my-10 tracking-widest text-sm uppercase">
              {technologies.map((tech) => (
                <button
                  key={tech.title}
                  onClick={() => setActiveTab(tech.title)}
                  className="relative pb-8 cursor-pointer group"
                >
                  <div
                    className={`flex items-center justify-center transition rounded-full bg-transparent border border-gray-500 w-20 h-20 text-2xl ${
                      activeTab === tech.title
                        ? "bg-white text-black"
                        : "hover:border-white text-white"
                    }`}
                  >
                    {tech.id}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Image
            src={technology?.image || ""}
            alt={technology?.title || ""}
            width={200}
            height={200}
            className="w-2xl min-[320px]:w-full lg:w-2xl object-fill lg:object-fill min-[320px]:object-cover h-full min-[320px]:h-72 md:h-80 lg:h-96 xl:h-full"
          />
        </div>
      </div>
    </div>
  );
}
