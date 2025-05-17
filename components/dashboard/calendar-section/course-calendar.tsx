"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CourseCalendar() {
  const [dates, setDates] = React.useState<Date[] | undefined>([]);

  return (
    <div className="w-full hidden items-center justify-center lg:flex">
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="w-full max-w-full mx-auto"
      />
    </div>
  );
}
