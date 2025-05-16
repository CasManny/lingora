import { ClassesEnrolled } from "@/components/dashboard/classes/classes-enrolled";
import { RecommendedClasses } from "@/components/dashboard/classes/recommended-classes";

const ClassesPage = () => {
  return (
    <div>
      <ClassesEnrolled />
      <RecommendedClasses />
    </div>
  );
};

export default ClassesPage;
