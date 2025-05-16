import React from "react";
import { UserProfile } from "./user-profile";
import { UserNotification } from "./notification";
import { SearchIcon } from "lucide-react";

export const UserNavbar = () => {
  return (
    <div className="flex gap-5 items-center justify-end sticky top-3 rounded-sm shadow-sm p-2 backdrop-blur-2xl bg-white z-50">
      <SearchIcon />
      <UserNotification />
      <UserProfile
        userEmail="casmanyDev@gmail.com"
        userName="Chukwu Ajah"
        userImage="/Ellipse 56.svg"
      />
    </div>
  );
};
