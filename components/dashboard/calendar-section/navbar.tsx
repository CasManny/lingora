import React from "react";
import { UserProfile } from "./user-profile";
import { UserNotification } from "./notification";
import { SearchIcon } from "lucide-react";

export const UserNavbar = () => {
  return (
    <div className="flex gap-5 items-center border-b justify-between sticky top-0  p-2 backdrop-blur-2xl z-50">
      <SearchIcon />
      <div className="flex gap-5">
        <UserNotification />
        <UserProfile
          userEmail="casmanyDev@gmail.com"
          userName="Chukwu Ajah"
          userImage="/Ellipse 56.svg"
        />
      </div>
    </div>
  );
};
