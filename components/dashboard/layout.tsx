import { PropsWithChildren } from "react";
import { SidebarProvider } from "../ui/sidebar";
import { DashboardSidebar } from "./sidebar";
import { UserNavbar } from "./calendar-section/navbar";

export const DashboardRootLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-[100%]">
        <UserNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};
