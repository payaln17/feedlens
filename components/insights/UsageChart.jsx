"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { usageData } from "@/data/surveyData";

export default function UsageChart() {
  return (
    <div className="border-t border-[#D8C8B8] pt-6">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
          Daily screen time
        </p>

        <h3 className="mt-2 font-[var(--font-laila)] text-2xl font-semibold text-[#292524]">
          Most students spend 1–4 hours
        </h3>

        <p className="mt-2 max-w-lg text-sm leading-6 text-[#78716C]">
          Ten of the fourteen respondents reported between one and four hours
          of daily social media use.
        </p>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={usageData}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: "#57534E" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12, fill: "#78716C" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ fill: "#F7F1E8" }}
              contentStyle={{
                border: "1px solid #D8C8B8",
                borderRadius: "8px",
                background: "#FFFDF9",
              }}
            />

            <Bar
              dataKey="students"
              fill="#A67C62"
              radius={[3, 3, 0, 0]}
              barSize={42}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}