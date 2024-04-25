/* eslint-disable no-unused-vars */
import { Bell, Calendar, Clock4, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DateTime } from "luxon";

import notifications from "../helpers/notifications";
import { ScrollArea } from "../ui/scroll-area";
import HamMenu from "./HamMenu";
import Time from "./Time";

export default function UserHeader() {
  const renderNotifications = notifications.map((item, index) => {
    return (
      <div
        key={`Notification${index}${Math.random()}`}
        className="block p-5 w-11/12 border-2 border-muted-foreground shadow-md rounded-lg my-5 mx-auto hover:scale-105 cursor-pointer transition-all duration-300 text-sm text-muted-foreground"
      >
        {item}
      </div>
    );
  });

  return (
    <div className="w-full text-white px-3 sm:px-5 md:px-10 py-5 flex items-center justify-between">
      <div className="flex justify-center items-center space-x-5">
        <HamMenu />
        <div>
          <p className="text-lg font-semibold">
            <span className="hidden sm:inline-block">Good Afternoon, </span>
            <span className="sm:hidden">Hi </span>
            <span>Uttkarsh</span>
          </p>
          <p className="text-xs text-muted-foreground">
            <span className="hidden sm:inline-block">
              You are subscribed to {` `}
            </span>{" "}
            <span>Retail Plan</span>
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Calendar className="hidden sm:block" />
        <p className="whitespace-nowrap">
          {DateTime.now().toFormat("dd, MMMM")}
        </p>
        <Clock4 className="hidden sm:block" />
        <Time />
        <div className="flex sm:ml-12 gap-3 items-center">
          <Sheet>
            <SheetTrigger>
              <Bell className="cursor-pointer hover:scale-125 hover:text-muted-foreground transition-all duration-300" />
            </SheetTrigger>
            <SheetContent className="px-5">
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-dvh flex flex-col items-center">
                {renderNotifications}
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}