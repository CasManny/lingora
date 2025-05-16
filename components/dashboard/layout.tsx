import { PropsWithChildren } from 'react';
import { SidebarProvider } from '../ui/sidebar';
import { DashboardSidebar } from './sidebar';

export const DashboardRootLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-[100%]">{children}</main>
    </SidebarProvider>
  );
}
