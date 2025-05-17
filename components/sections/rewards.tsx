import Image from "next/image";
import React from "react";

export const Rewards = () => {
  return (
    <section className="py-20 px-5 sm:px-10 w-full">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Unlock Your Language Potential with Our Innovative Learning Platform
          </h1>
          <p className="text-sm sm:text-xl text-gray-700">
            Experience a transformative approach to language learning that
            enhances your skills. Engage with native speakers and immerse
            yourself in diverse cultures.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-6 gap-2 pt-4">
            <div className="space-y-2">
              <h3 className="font-semibold sm:text-lg text-sm">
                Skill Enhancement
              </h3>
              <p className="text-xs not-first:sm:text-base text-gray-600">
                Boost your language proficiency through interactive audio
                practice and real-world conversations.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold sm:text-lg text-sm">
                Cultural Connection
              </h3>
              <p className="text-xs sm:text-base text-gray-600">
                Explore new cultures and perspectives while learning from native
                speakers around the globe.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto relative aspect-[2/3]">
          <Image
            src="/community-image.avif"
            alt="lingora"
            fill
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
