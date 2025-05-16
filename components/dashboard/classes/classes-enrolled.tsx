"use client";

import { Progress } from "@/components/ui/progress";
import { Users } from "lucide-react";
import { useState } from "react";

interface Class {
  id: number;
  name: string;
  language: string;
  fillColor: string;
  peopleEnrolled: number;
  progress: number;
}

const mockClasses: Class[] = [
  {
    id: 1,
    name: "Beginner Spanish",
    language: "Spanish",
    peopleEnrolled: 24,
    fillColor: "#540D6E",
    progress: 75,
  },
  {
    id: 2,
    name: "French Conversation",
    language: "French",
    peopleEnrolled: 31,
    fillColor: "#FCD29F",
    progress: 50,
  },
  {
    id: 3,
    name: "German Basics",
    language: "German",
    peopleEnrolled: 18,
    fillColor: "#FF928B",
    progress: 20,
  },
];

export const ClassesEnrolled = () => {
  const [classes] = useState<Class[]>(mockClasses);

  const totalProgress =
    classes.reduce((sum, c) => sum + c.progress, 0) / classes.length;

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Your Learning Dashboard</h1>
        <p className="text-gray-500">
          Track your progress and explore your enrolled classes.
        </p>
      </div>

      {/* Overall Progress */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Overall Progress</h2>
        <Progress
          value={totalProgress}
          className="h-4 bg-gray-200 [&>div]:!bg-yellow-400"
        />

        <p className="mt-2 text-sm text-gray-600">
          {Math.round(totalProgress)}% complete
        </p>
      </div>

      {/* Classes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((c) => (
          <div
            key={c.id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-200"
          >
            <h3 className="text-lg font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{c.language}</p>

            <div className="flex items-center gap-2 mb-3 text-gray-600 text-sm">
              <Users className="w-4 h-4" />
              <span>{c.peopleEnrolled} enrolled</span>
            </div>

            <Progress
              value={c.progress}
              className="h-3 bg-gray-200 progress-bar"
              style={
                { "--progress-bar-color": c.fillColor } as React.CSSProperties
              }
            />
            <p className="text-xs text-gray-500 mt-1">{c.progress}% complete</p>
          </div>
        ))}
      </div>
    </div>
  );
};
