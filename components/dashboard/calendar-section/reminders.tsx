"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

type Reminder = {
  id: number;
  title: string;
  description: string;
  time: string;
  completed: boolean;
};

const dummyReminders: Reminder[] = [
  {
    id: 1,
    title: "Daily Practice",
    description: "Complete your vocabulary quiz for Spanish.",
    time: "Today at 6:00 PM",
    completed: false,
  },
  {
    id: 2,
    title: "Grammar Review",
    description: "Revise past perfect tense in French.",
    time: "Tomorrow at 9:00 AM",
    completed: false,
  },
  {
    id: 3,
    title: "Speaking Session",
    description: "Join conversation club for German speaking.",
    time: "Friday at 3:00 PM",
    completed: false,
  },
  {
    id: 4,
    title: "Progress Goal",
    description: "Finish 2 chapters in Italian course.",
    time: "Due in 2 days",
    completed: true,
  },
];

export const Reminders = () => {
  const [reminders, setReminders] = useState(dummyReminders);

  const markComplete = (id: number) => {
    setReminders((prev) =>
      prev.map((reminder) =>
        reminder.id === id ? { ...reminder, completed: true } : reminder
      )
    );
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-lg">Reminders</CardTitle>
        <Badge variant="secondary">{reminders.length} Tasks</Badge>
      </CardHeader>

      <CardContent className="px-2">
        <ul className="space-y-4">
          {reminders.map((reminder) => (
            <li
              key={reminder.id}
              className={`p-3 rounded-lg border ${
                reminder.completed ? "bg-green-50" : "bg-muted"
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">{reminder.title}</h3>
                {reminder.completed ? (
                  <CheckCircle className="text-green-600 size-5" />
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs hover:bg-blue-300 hover:text-white transition duration-300"
                    onClick={() => markComplete(reminder.id)}
                  >
                    Mark done
                  </Button>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {reminder.description}
              </p>
              <div className="flex items-center text-xs text-gray-500 mt-2 gap-1">
                <Clock size={12} />
                <span>{reminder.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
