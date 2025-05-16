"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const notifications = [
  {
    id: 1,
    title: "Lesson Completed!",
    message: "You just completed 'Spanish Basics – Lesson 5'",
    time: "3 mins ago",
    dateGroup: "Today",
  },
  {
    id: 2,
    title: "New Follower",
    message: "Amara joined your Swahili learning group",
    time: "10 mins ago",
    dateGroup: "Today",
  },
  {
    id: 3,
    title: "Achievement Unlocked",
    message: "You've hit a 7-day learning streak. Great job!",
    time: "1 hour ago",
    dateGroup: "Today",
  },
  {
    id: 4,
    title: "New Audio Uploaded",
    message: "Juan added a new Spanish recording in 'Common Phrases'",
    time: "Yesterday, 6:15 PM",
    dateGroup: "Yesterday",
  },
  {
    id: 5,
    title: "New Comment",
    message: "Nia commented on your Yoruba pronunciation post",
    time: "Yesterday, 2:45 PM",
    dateGroup: "Yesterday",
  },
];

export const NotificationPanel = () => {
  const [notifList, setNotifList] = useState(notifications);

  const clearNotifications = () => {
    setNotifList([]);
  };

  const groupedNotifications = notifList.reduce((acc, notif) => {
    acc[notif.dateGroup] = acc[notif.dateGroup] || [];
    acc[notif.dateGroup].push(notif);
    return acc;
  }, {} as Record<string, typeof notifications>);

  return (
    <Card className="w-[500px] rounded-lg bg-white">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Notifications
            <Badge className="bg-red-600 text-white text-xs px-2 py-1">
              {notifList.length}
            </Badge>
          </h2>
          <Button
            variant="ghost"
            size="sm"
            className="text-red-600 flex items-center gap-1 hover:bg-red-100"
            onClick={clearNotifications}
          >
            <Trash2 size={16} />
            Delete history
          </Button>
        </div>

        {/* Notifications List */}
        <ScrollArea className="h-[300px] mt-3 border-none">
          {Object.entries(groupedNotifications).map(([date, notifs]) => (
            <div key={date} className="mb-3">
              <h3 className="text-sm font-bold text-gray-700 mb-2">{date}</h3>
              {notifs.map((notif) => (
                <div
                  key={notif.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition mb-2"
                >
                  <Avatar>
                    <AvatarImage src="/language-icon.svg" />
                    <AvatarFallback className="text-blue-800">LL</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{notif.title}</h4>
                    <p className="text-sm text-gray-600">{notif.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                  </div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                </div>
              ))}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
