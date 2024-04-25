/* eslint-disable no-unused-vars */
import { Dot } from "lucide-react";
import React from "react";

export default function SideNewsItem() {
  return (
    <div className=" flex">
      <div className="flex-col relative grid">
        <div>
          <Dot className="size-12 text-muted-foreground" />
        </div>
        <div className="row-span-5 -mt-3 border-2 border-muted-foreground w-0 mx-auto bg-yellow-400"></div>
      </div>
      <div className="bg-white pt-5 space-y-3">
        <p className="text-[#5A91E8] font-semibold text-sm">April 19th, 2024</p>
        <h2 className="text-xl font-semibold">Industrial Report</h2>
        <p className="xl:text-xs">
          Index of Industrial Production (IIP) grew by 3.8% YoY in December, as
          compared to a 5.1% YoY growth in the same month last year. Electricity
          has seen the slowest growth of 1.2% YoY in December as compared to
          10.4% YoY growth in the same month last year.
        </p>
      </div>
    </div>
  );
}