import { DashboardCalendar } from "@/components/dashboard/calendar-section/calendar";
import { DashboardSummary } from "@/components/dashboard/summary-section/summary";

const Page = () => {
  return (
    <div className="p-5 flex flex-col lg:flex-row gap-5 w-full">
      <DashboardSummary />
      <DashboardCalendar />
    </div>
  );
};

export default Page;
