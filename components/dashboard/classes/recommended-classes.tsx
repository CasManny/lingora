"use client";

import { Users, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface RecommendedClass {
  id: number;
  name: string;
  language: string;
  level: string;
  description: string;
  peopleEnrolled: number;
  thumbnail: string;
}

const recommended: RecommendedClass[] = [
  {
    id: 4,
    name: "Intermediate Italian",
    language: "Italian",
    level: "Intermediate",
    description:
      "Enhance your Italian skills with real-world conversation topics.",
    peopleEnrolled: 14,
    thumbnail: "/group-call-image-1.svg",
  },
  {
    id: 5,
    name: "Japanese Writing Mastery",
    language: "Japanese",
    level: "Advanced",
    description: "Master Kanji and Hiragana in this writing-focused course.",
    peopleEnrolled: 27,
    thumbnail: "/group-call-image-2.svg",
  },
  {
    id: 6,
    name: "Mandarin Tones & Speech",
    language: "Chinese",
    level: "Beginner",
    description: "Start speaking Mandarin with correct tone and pronunciation.",
    peopleEnrolled: 33,
    thumbnail: "/group-call-image-3.svg",
  },
];

export const RecommendedClasses = () => {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Recommended for You</h2>
        <p className="text-gray-500">
          Explore more language classes to boost your fluency.
        </p>
      </div>

      {/* Class Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {recommended.map((rec) => (
          <div
            key={rec.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <Image
              src={rec.thumbnail}
              alt={rec.name}
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">{rec.name}</h3>
              <p className="text-sm text-gray-500 mb-1">
                {rec.language} • {rec.level}
              </p>
              <p className="text-sm text-gray-600 flex-1">{rec.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <Users size={16} />
                  {rec.peopleEnrolled} enrolled
                </div>
                <Button variant="default" className="gap-1 rounded-full">
                  <PlusCircle size={16} />
                  Enroll
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
