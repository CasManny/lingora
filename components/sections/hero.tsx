import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="flex items-center justify-center pt-40 pb-60">
      <div className="max-w-2xl text-center flex items-center justify-center flex-col space-y-4">
        <h1 className="text-5xl font-bold">
          Unlock <span>Language </span> Learning Through Global Connections
        </h1>
        <p className="text-sm">
          Join a global community where you can learn languages alongside fellow
          learners and native speakers from around the world
        </p>

        <Link
          href={"/dashboard"}
          className="w-fit space-x-2 border rounded-2xl px-2 py-1"
        >
          <span className="text-xl">Start Learning</span>
          <Button size={"icon"} className="rounded-full">
            <MoveUpRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};
