import { Card, CardContent } from "@/components/ui/card";

interface WelcomeBannerProps {
  username: string;
  completed: number;
  status: string;
}

export const WelcomeBanner = ({ username, completed, status }: WelcomeBannerProps) => {
  return (
    <Card className="">
      <CardContent className="space-y-1">
        <h1 className="text-2xl">
          Welcom back! <span className="font-bold">{username}</span>{" "}
        </h1>
        <p>
          Your students completed{" "}
          <span className="font-semibold">{completed}%</span> of the tasks
        </p>
        <p>
          Progress is <span className="font-semibold">{status}!</span>{" "}
        </p>
      </CardContent>
    </Card>
  );
};
