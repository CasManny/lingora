"use client";

import * as React from "react";
import { PieChart, Pie, Label } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// ✅ Updated chart data for language learning
const chartData = [
  {
    name: "In Progress",
    value: 70,
    fill: "#3B82F6",
  },
  {
    name: "Completed",
    value: 20,
    fill: "#FACC15",
  },
];

// ✅ Minimal chart config for ChartContainer
const chartConfig = {
  "In Progress": {
    label: "In Progress",
    color: "hsl(var(--chart-1))",
  },
  Completed: {
    label: "Completed",
    color: "hsl(var(--chart-2))",
  },
};

export function HoursChart() {
  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg font-semibold">Learning Progress</h1>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            View all
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={80}
              strokeWidth={2}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total}%
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
