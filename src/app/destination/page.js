import React from "react";
import Navbar from "../components/Navbar";
import HeroDestination from "./HeroDestination";

export default function destination() {
  return (
    <div className="w-full min-h-screen bg-[url('/Moon-Background.jpg')] bg-no-repeat bg-top bg-scroll bg-cover">
      <Navbar />
      <HeroDestination />
    </div>
  );
}
