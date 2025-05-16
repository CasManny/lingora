import { DashboardCalendar } from "@/components/dashboard/calendar-section/calendar";
import { DashboardSummary } from "@/components/dashboard/summary-section/summary";

const Page = () => {
  return (
    <div className="p-5 flex gap-5">
      <DashboardSummary />
      <DashboardCalendar />
    </div>
  );
};

export default Page;
