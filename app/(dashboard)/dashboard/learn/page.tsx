"use client";
import { LanguageApp } from "@/components/dashboard/learn/learn-ui";
import { TourProvider } from "@reactour/tour";

const LearnPage = () => {
  return (
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
  );
};

export default LearnPage;
