"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Barlow, Bellefair } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "700"] });
const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

const destinations = [
  {
    id: 1,
    title: "Douglas Hurley",
    heading: "Commander",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: "/Douglas.png",
  },
  {
    id: 2,
    title: "Mark Shuttleworth",
    heading: "Mission Specialist ",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    image: "/Mark.png",
  },
  {
    id: 3,
    title: "Victor Glover",
    heading: "PILOT",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: "/Victor.png",
  },
];

export default function HeroCrew() {
  const [activeTab, setActiveTab] = useState(destinations[0].title);
  const destination = destinations.find((d) => d.title === activeTab);

  return (
    <div className="flex flex-row w-full">
      <div className="mx-40 flex flex-col lg:mx-40 min-[320px]:mx-20 mt-48 lg:mt-48 min-[320px]:mt-44 w-full h-[700px] min-[320px]:h-auto">
        <h1 className="text-white text-2xl sm:text-2xl min-[320px]:text-xl text-start sm:text-start min-[320px]:text-center">
          <span className="text-gray-500 mr-5">01</span> PICK YOUR DESTINATION
        </h1>

        <div className="flex justify-between items-center flex-row lg:flex-row min-[320px]:flex-col mt-14">
          <div className="h-full text-white flex flex-col items-start justify-center gap-5 lg:items-start min-[320px]:items-center lg:text-start min-[320px]:text-center">
            <h6
              className={`text-4xl sm:text-4xl min-[320px]:text-3xl text-gray-500  ${bellefair.className}`}
            >
              {destination?.heading}
            </h6>
            <h1
              className={`text-8xl sm:text-8xl min-[320px]:text-7xl ${bellefair.className}`}
            >
              {destination?.title}
            </h1>
            <p
              className={`max-w-[490px] text-base text-blue-200 sm:text-base min-[320px]:text-sm ${barlow.className}`}
            >
              {destination?.description}
            </p>

            <div className="flex space-x-8 my-10 tracking-widest text-sm uppercase">
              {destinations.map(({ title }, i) => (
                <button
                  key={title}
                  onClick={() => setActiveTab(title)}
                  className="relative pb-2 cursor-pointer group mt-20"
                >
                  <div
                    className={`transition rounded-full bg-gray-700 w-4 h-4 ${
                      activeTab === title ? "bg-white" : "hover:bg-gray-500"
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          <Image
            src={destination?.image || ""}
            alt={destination?.title || ""}
            width={200}
            height={200}
            className="w-96 min-[320px]:w-72 md:w-80 lg:w-96 xl:w-96"
          />
        </div>
      </div>
    </div>
  );
}
