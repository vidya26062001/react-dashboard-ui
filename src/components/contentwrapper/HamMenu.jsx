/* eslint-disable no-unused-vars */
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Building,
  CalendarPlus,
  CircleDollarSign,
  CircleHelp,
  Headphones,
  Menu,
  Monitor,
  Search,
  Settings,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "../ui/calendar";

export default function HamMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-6 sm:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="mt-10">SixtyFour Data Intelligence</SheetTitle>
          <div className="py-16 space-y-5 grid gap-3 text-center">
            <a
              href="/blank"
              className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Search"
            >
              <div>Search</div>
              <div>
                <Search />
              </div>
            </a>
            <a
              href="/blank"
              className="flex w-44 mx-auto  justify-between items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Monitor"
            >
              <div>View</div>
              <div>
                <Monitor />
              </div>
            </a>
            <a
              href="/blank"
              className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="CircleHelp"
            >
              <div>Help</div>
              <div>
                <CircleHelp />
              </div>
            </a>

            <Dialog>
              <DialogTrigger>
                <div
                  className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
                  id="CalendarPlus"
                >
                  <div>Calendar</div>
                  <div>
                    <CalendarPlus />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <h1 className="text-center text-xl font-semibold">
                    Calendar
                  </h1>
                  <Calendar
                    mode="single"
                    className="rounded-md border flex justify-center items-center mt-10"
                  />
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <a
              href="/blank"
              className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Building"
            >
              <div>Data Centers</div>
              <div>
                <Building />
              </div>
            </a>
            <a
              href="/blank"
              className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="CircleDollarSign"
            >
              <div>Finance</div>
              <div>
                <CircleDollarSign />
              </div>
            </a>
            <a
              href="/blank"
              className="flex w-44 mx-auto justify-between items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Headphones"
            >
              <div>Audio</div>
              <div>
                <Headphones />
              </div>
            </a>
            <Dialog>
              <DialogTrigger>
                <div
                  className="flex w-44 mx-auto justify-between items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
                  id="Search"
                >
                  <div>Settings</div>
                  <div>
                    <Settings className="hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground" />
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                  <DialogDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}