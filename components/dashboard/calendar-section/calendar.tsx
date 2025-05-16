import React from "react";
import { UserNavbar } from "./navbar";
import { CourseCalendar } from "./course-calendar";
import { Reminders } from "./reminders";

export const DashboardCalendar = () => {
  return (
    <div className="w-[30%] space-y-4">
      <UserNavbar />
      <CourseCalendar />
      <Reminders />
    </div>
  );
};
