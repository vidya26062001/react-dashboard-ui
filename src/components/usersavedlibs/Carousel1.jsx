/* eslint-disable no-unused-vars */
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FolderClosed } from "lucide-react";


export default function Carousel1() {
  const colArr = [
    `text-blue-500`,
    `text-purple-500`,
    `text-red-500`,
    `text-orange-500`,
    `text-green-500`,
    `text-yellow-500`,
  ];
  const renderCarouselItems = [...Array(5)].map((item, index) => {
    return (
      <CarouselItem
        className=" w-10"
        key={`savedLibCarItem${index}${Math.random()}`}
      >
        <div className="h-[170px] flex justify-center items-center transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-200/50">
          <div className="w-full rounded-lg flex flex-col items-center mx-auto hover:scale-105">
            <FolderClosed className={`${colArr[index % colArr.length]}`} />
            <h3 className="font-semibold text-sm mt-3">
              My Saved Library {index + 1}
            </h3>
            <p className="text-muted-foreground mt-3 text-sm font-semibold">
              dd-mm-yyyy
            </p>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel className="rounded-lg bg-background shadow-md">
      <CarouselContent>{renderCarouselItems}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}