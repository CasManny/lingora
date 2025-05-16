import Image from "next/image";
import React from "react";

export const Rewards = () => {
  return (
    <section className="py-20 px-5 sm:px-10 w-full">
      <div className="max-w-7xl w-full mx-auto  grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="py-16">
          <h1 className="text-5xl font-bold">
            Unlock Your Language Potential with Our Innovative Learning Platform
          </h1>
          <p className="text-2xl">
            Experience a transformative approach to language learning that
            enhances your skills. Engage with native speakers and immerse
            yourself in diverse cultures.
          </p>
          <div className="flex gap-5 mt-10">
            <div className="">
              <h3 className="font-semibold">Skill Enhancement</h3>
              <p className="text-base">
                Boost your language proficiency through interactive audio
                practice and real-world conversations.
              </p>
            </div>
            <div className="">
              <h3 className="font-semibold">Cultural Connection</h3>
              <p className="text-base">
                Explore new cultures and perspectives while learning from native
                speakers around the globe.
              </p>
            </div>
          </div>
        </div>
        <div className="size-full relative w-[70%] mx-auto">
          <Image src={'/community-image.avif'} alt="lingora" fill className="rounded-4xl object-cover" />
        </div>
      </div>
    </section>
  );
};
