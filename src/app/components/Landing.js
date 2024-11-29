// components/Landing.js
"use client";

import Hero from "./Hero";

export default function Landing({
  handleArchiveClick,
  handleConstituentsClick,
}) {
  return (
    <div className="relative h-screen">
      <Hero videoSrc={"./screensaver.mp4"} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-gray-300 text-3xl font-bold mb-8 text-center">
          Explore constituent assembly members debates:
        </h1>
        <div className="flex space-x-6">
          <div
            className="bg-blue-500 text-white p-6 rounded cursor-pointer"
            onClick={handleConstituentsClick}
          >
            <img
              src={"./app icons-04.svg"}
              alt={"members-icon"}
              className="w-32 h-32 object-cover rounded-md"
            />
            Explore the Members
          </div>
          <div
            className="bg-green-500 text-white p-6 rounded cursor-pointer"
            onClick={handleArchiveClick}
          >
            <img
              src={"./app icons-05.svg"}
              alt={"archives-icon"}
              className="w-32 h-32 object-cover rounded-md"
            />
            Constituent Assembly Archives
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-5" />
    </div>
  );
}
