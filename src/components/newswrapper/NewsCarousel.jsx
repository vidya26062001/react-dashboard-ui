/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import React, { useState } from "react";
import Cards from "./Cards";
import { len } from "../helpers/news";
import { Button } from "../ui/button";

export default function NewsCarousel(props) {
  const [curPage, setCurPage] = useState(1);
  const totalPages = Math.ceil(len / props.perPage);

  const renderDots = [...Array(totalPages)].map((item, index) => {
    if (index !== curPage - 1)
      return (
        <Dot
          className="text-muted-foreground size-8"
          key={`Dot${index}${Math.random()}`}
        />
      );
    return <Dot className="size-12" key={`Dot${index}${Math.random()}`} />;
  });

  const handlePrev = () => {
    setCurPage((prev) => {
      return prev === 1 ? prev : prev - 1;
    });
  };

  const handleNext = () => {
    if (curPage === totalPages) return;
    setCurPage((prev) => {
      return prev === totalPages ? prev : prev + 1;
    });
  };

  const handleMore = (event) => {
    event.preventDefault();
    alert(`Thank you`);
  };

  return (
    <div className="w-full bg-white shadow-md pb-3 rounded-lg">
      <div className="flex max-[360px]:justify-center max-[360px]:space-x-1">
        <button
          className="flex justify-center items-center cursor-pointer hover:bg-slate-200/50 rounded-tl-md"
          onClick={handlePrev}
        >
          <ChevronLeft />
        </button>
        <Cards offset={props.perPage * (curPage - 1)} perPage={props.perPage} />
        <button
          className="flex justify-center items-center cursor-pointer hover:bg-slate-200/50 rounded-tr-md"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex justify-center items-center lg:space-x-1">
        {totalPages >= 20 ? null : renderDots}
      </div>
      <div
        className={`flex justify-center items-center ${
          totalPages >= 20 ? `mt-5` : null
        }`}
      >
        <Button onClick={handleMore}>
          <p className="text-xs">View More</p>
        </Button>
      </div>
    </div>
  );
}