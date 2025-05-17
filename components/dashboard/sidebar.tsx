"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { BookHeadphonesIcon, BookMarkedIcon, FolderOpen, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../logo";
import { GetHelp } from "./get-help";




const links = [
  {
    label: "Dashboard",
    icon: FolderOpen,
    href: "/dashboard",
  },
  {
    label: "Classes",
    icon: BookHeadphonesIcon,
    href: "/dashboard/classes",
  },
  {
    label: "Learn",
    icon: BookMarkedIcon,
    href: "/dashboard/learn",
  },
  // {
  //   label: "Contribute",
  //   icon: Calendar1,
  //   href: "/dashboard/contribute",
  // },
  {
    label: "Chats",
    icon: MessageCircleMore,
    href: "/dashboard/chat",
  },
  // {
  //   label: "Settings",
  //   icon: Settings,
  //   href: "/dashboard/settings",
  // },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="bg-brand-dark-blue p-5 ">
        <div className="flex justify-between items-center">
          <Logo />
          <SidebarTrigger className="sm:hidden" />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-brand-dark-blue px-3 pt-5 space-y-3 scrollbar-none">
        {links.map(({ href, icon: Icon,label }, index) => {
          const active = pathname === href;
          return (
            <Link
              key={index}
              href={href}
              className={cn(
                "flex items-center relative gap-4 px-2 py-3 rounded-md group hover:bg-white transition duration-300",
                active && "bg-white"
              )}
            >
              <span className="text-brand-gray  size-6 flex items-center justify-center">
                <Icon
                  className={cn(
                    "w-full h-full hover:text-black",
                    active && "text-black"
                  )}
                />
              </span>
              <span
                className={cn(
                  "font-semibold tracking-wide text-sm sm:text-lg text-brand-gray hover:text-black",
                  active && "text-black"
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
        <GetHelp />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
