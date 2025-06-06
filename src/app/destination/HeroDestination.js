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

const destinations = [
  {
    id: 1,
    title: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: "/Moon.png",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
  },
  {
    id: 2,
    title: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    image: "/Mars.png",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
  },
  {
    id: 3,
    title: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: "/Europa.png",
    distance: "628.3 MIL. KM",
    travelTime: "3 YEARS",
  },
  {
    id: 4,
    title: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    image: "/Titan.png",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
  },
];

export default function HeroDestination() {
  const [activeTab, setActiveTab] = useState("MOON");
  const tabs = ["MOON", "MARS", "EUROPA", "TITAN"];
  const destination = destinations.find((d) => d.title === activeTab);

  return (
    <div className="flex flex-row w-full">
      <div className=" mx-40 lg:mx-40 sm:mx-20 min-[320px]:mx-0 flex flex-col  mt-48 lg:mt-48 min-[320px]:mt-44 w-full h-[700px] min-[320px]:h-auto">
        <h1 className="text-white text-2xl sm:text-2xl  min-[320px]:text-xl mb-10 text-start sm:text-start min-[320px]:text-center">
          <span className="text-gray-500 mr-5">01</span> PICK YOUR DESTINATION
        </h1>

        <div className="flex justify-between items-center flex-row lg:flex-row min-[320px]:flex-col">
          <Image
            src={destination.image}
            alt={destination.title}
            width={200}
            height={200}
            className="w-[500px] min-[320px]:w-72 md:w-80 lg:w-92 xl:w-[500px] "
          />

          <div className="h-full text-white flex flex-col items-start justify-center gap-5 lg:items-start min-[320px]:items-center lg:text-start min-[320px]:text-center">
            <div className="flex space-x-8 my-10 tracking-widest text-sm uppercase">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative pb-2 cursor-pointer group"
                >
                  <span
                    className={`transition-colors ${
                      activeTab === tab
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {tab}
                  </span>

                  {activeTab === tab && (
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-white" />
                  )}

                  {activeTab !== tab && (
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>

            <h6 className="text-2xl sm:text-2xl min-[320px]:text-xl">
              SO, YOU WANT TO TRAVEL TO
            </h6>
            <h1
              className={`text-9xl lg:text-9xl sm:text-8xl min-[320px]:text-6xl ${bellefair.className}`}
            >
              {destination.title}
            </h1>
            <p
              className={`max-w-[490px] text-base sm:text-base min-[320px]:text-sm ${barlow_normal.className}`}
            >
              {destination.description}
            </p>

            <div className="mt-8 flex flex-row md:flex-row min-[320px]:flex-col gap-20 pt-8 border-t border-gray-700 w-full justify-start lg:justify-start min-[320px]:justify-center">
              <div className="flex flex-col uppercase text-sm tracking-widest">
                <span className="text-gray-400">Avg. Distance</span>
                <span className="text-white text-xl font-bellefair">
                  {destination.distance}
                </span>
              </div>
              <div className="flex flex-col uppercase text-sm tracking-widest">
                <span className="text-gray-400">Est. Travel Time</span>
                <span className="text-white text-xl font-bellefair">
                  {destination.travelTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
