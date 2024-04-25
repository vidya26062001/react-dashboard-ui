/* eslint-disable no-unused-vars */
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import SideNewsItem from "./SideNewsItem";

export default function RecentReleases() {
  return (
    <ScrollArea className="col-span-1 shadow-md bg-white p-5 rounded-lg h-[25rem]  relative ">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className="text-[#5A91E8] font-semibold">Recent Releases</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-fit flex items-center justify-between"
            >
              <span>India</span>
              <span className="ml-5">
                <ChevronDown className="size-5" />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>India</DropdownMenuItem>
            <DropdownMenuItem>USA</DropdownMenuItem>
            <DropdownMenuItem>UK</DropdownMenuItem>
            <DropdownMenuItem>Australia</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <hr className="w-full font-bold my-5" />
      <div className="flex-col space-y-5">
        <SideNewsItem />
        <SideNewsItem />
        <SideNewsItem />
        <SideNewsItem />
        <SideNewsItem />
      </div>
    </ScrollArea>
  );
}