import { ArrowRight } from "lucide-react";

export const UserCourses = () => {
  const courses = [
    {
      title: "Spanish for Beginners",
      subHeading: "Ongoing • 15 Lessons",
    },
    {
      title: "French Pronunciation",
      subHeading: "Completed • 10 Lessons",
    },
    {
      title: "Intro to Mandarin",
      subHeading: "Ongoing • 8 Lessons",
    },
    {
      title: "German Basics",
      subHeading: "Paused • 6 Lessons",
    },
  ];

  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-semibold">Your Courses</p>
        <div className="flex items-center gap-1 text-blue-500 cursor-pointer hover:underline">
          <span className="text-sm">More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            subHeading={course.subHeading}
          />
        ))}
      </div>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  subHeading: string;
}

const CourseCard = ({ title, subHeading }: CourseCardProps) => {
  return (
    <div className="p-3 rounded-lg border shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center shadow">
          {title.slice(0, 1)}
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{subHeading}</p>
          <p className="text-sm font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};
