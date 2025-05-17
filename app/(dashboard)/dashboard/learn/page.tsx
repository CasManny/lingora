"use client";
import { LanguageApp } from "@/components/dashboard/learn/learn-ui";
import { TourProvider } from "@reactour/tour";

const LearnPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-5 ">
      <TourProvider
        steps={[
          {
            selector: "#language-select",
            content: "Choose the language you want to learn.",
          },
          {
            selector: "#learn-button",
            content: "Click here to begin learning.",
          },
        ]}
      >
        <LanguageApp />
      </TourProvider>
    </div>
  );
};

export default LearnPage;
