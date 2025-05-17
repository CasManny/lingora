import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="flex items-center justify-center px-5 sm:px-0 pt-28 sm:pt-40 pb-20 md:pb-60 bg-gradient-to-b from-[#fef6ff] via-[#fff0f5] to-white">
      <div className="max-w-2xl text-left sm:text-center flex items-center justify-start sm:justify-center flex-col space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 relative">
          Unlock{" "}
          <span className="relative inline-block px-3 py-1 border-2 border-[#DD5E98] rounded-md text-[#DD5E98]">
            Language
            {/* Corner circles */}
            <span className="absolute size-2 bg-[#DD5E98] rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
            <span className="absolute size-2 bg-[#DD5E98] rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-ping" />

            <span className="absolute size-2 bg-[#DD5E98] rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2" />

            <span className="absolute size-2 bg-[#DD5E98] rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 animate-ping" />

            <span className="absolute size-2 bg-[#DD5E98] rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />

            <span className="absolute size-2 bg-[#DD5E98] rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 animate-ping" />

            <span className="absolute size-2 bg-[#DD5E98] rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

            <span className="absolute size-2 bg-[#DD5E98] rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 animate-ping" />
          </span>{" "}
          Learning Through{" "}
          <span className="text-[#4B9EFF]">Global Connections</span>
        </h1>

        <p className="text-base text-gray-600">
          Join a global community where you can learn languages alongside fellow
          learners and native speakers from around the world
        </p>

        <Link
          href={"/dashboard"}
          className="w-fit space-x-2 border-[#DD5E98] border mt-8 sm:mt-0 shadow-md bg-[#DD5E98]/10 hover:bg-[#DD5E98]/20 transition mr-auto sm:mr-0 rounded-2xl px-4 py-2 flex items-center"
        >
          <span className="text-lg font-medium text-[#DD5E98]">
            Start Learning
          </span>
          <Button
            size={"icon"}
            className="rounded-full bg-[#DD5E98] text-white hover:bg-[#e670a7]"
          >
            <MoveUpRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};
