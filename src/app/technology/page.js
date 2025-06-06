import React from "react";
import Navbar from "../components/Navbar";
import HeroTechnology from "./HeroTechnology";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-[url('/Technology-Background.jpg')] bg-no-repeat bg-top bg-scroll bg-coverr">
      <Navbar />
      <HeroTechnology />
    </div>
  );
}
