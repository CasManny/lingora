"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CourseCalendar() {
  const [dates, setDates] = React.useState<Date[] | undefined>([]);

  return (
    <div className="w-full flex items-center justify-center">
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="w-full max-w-full mx-auto"
      />
    </div>
  );
}
