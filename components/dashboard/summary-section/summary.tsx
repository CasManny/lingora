import { UserCourses } from "./courses";
import { HoursChart } from "./hours-chart";
import { StudentReviews } from "./student-reviews";
import { WelcomeBanner } from "./welcome-banner";

export const DashboardSummary = () => {
  return (
    <div className="w-full lg:w-[70%] space-y-2">
      <WelcomeBanner
        username="Angella Chioma"
        completed={80}
        status="Very good"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <StudentReviews />
        <HoursChart />
      </div>
      <UserCourses />
    </div>
  );
};
