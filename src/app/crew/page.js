import React from "react";
import Navbar from "../components/Navbar";
import HeroCrew from "./HeroCrew";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-[url('/Crew-Background.jpg')] bg-no-repeat bg-top bg-scroll bg-cover">
      <Navbar />
      <HeroCrew />
    </div>
  );
}
