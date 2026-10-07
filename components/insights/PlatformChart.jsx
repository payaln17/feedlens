"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { platformData } from "@/data/surveyData";

export default function PlatformChart() {
  return (
    <div className="border-t border-[#D8C8B8] pt-6">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
          Platform usage
        </p>

        <h3 className="mt-2 font-[var(--font-laila)] text-2xl font-semibold text-[#292524]">
          Instagram leads the feed
        </h3>

        <p className="mt-2 max-w-lg text-sm leading-6 text-[#78716C]">
          Instagram was used by every respondent in the survey, followed by
          YouTube and Snapchat.
        </p>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={platformData}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis
              type="number"
              allowDecimals={false}
              tick={{ fontSize: 12, fill: "#78716C" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              type="category"
              dataKey="name"
              width={90}
              tick={{ fontSize: 12, fill: "#57534E" }}
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
              dataKey="users"
              fill="#8F1D2C"
              radius={[0, 3, 3, 0]}
              barSize={22}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}