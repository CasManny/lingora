import { DashboardRootLayout } from "@/components/dashboard/layout";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return <DashboardRootLayout>{children}</DashboardRootLayout>;
};

export default DashboardLayout;
