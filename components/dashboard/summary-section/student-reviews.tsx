import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";

// Dummy student progress data
const studentData = [
  {
    userImage: "/Ellipse 56.svg",
    userName: "Amina Yusuf",
    progressValue: 75,
  },
  {
    userImage: "/Ellipse 56.svg",
    userName: "Leonardo Ruiz",
    progressValue: 60,
  },
  {
    userImage: "/Ellipse 56.svg",
    userName: "Mei Lin",
    progressValue: 90,
  },
  {
    userImage: "/Ellipse 56.svg",
    userName: "Daniel Okeke",
    progressValue: 45,
  },
];

export const StudentReviews = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Students</h1>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            View all
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {studentData.map((student) => (
          <ReviewCard key={student.userName} {...student} />
        ))}
      </CardContent>
    </Card>
  );
};

interface ReviewCardProps {
  userImage: string;
  userName: string;
  progressValue: number;
}

const getProgressClass = (value: number) => {
  if (value >= 80) return "h-2 flex-1 [&>div]:!bg-green-500";
  if (value >= 60) return "h-2 flex-1 [&>div]:!bg-yellow-500";
  if (value >= 40) return "h-2 flex-1 [&>div]:!bg-orange-500";
  return "h-2 flex-1 [&>div]:!bg-red-500";
};

const ReviewCard = ({
  userImage,
  userName,
  progressValue,
}: ReviewCardProps) => {
  const progressClass = getProgressClass(progressValue);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-baseline gap-2 w-full">
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Image
          src={userImage}
          alt={userName}
          width={40}
          height={40}
          className="object-cover rounded-full size-10"
        />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="font-medium">{userName}</h1>
        <div className="">
          <div className="flex-1">
            <Progress value={progressValue} className={progressClass} />
          </div>
          <p className="font-semibold text-sm sm:text-base min-w-[40px] text-right">
            {progressValue}%
          </p>
        </div>
      </div>
    </div>
  );
};
