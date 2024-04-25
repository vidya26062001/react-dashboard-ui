/* eslint-disable no-unused-vars */
import { FolderClosed } from "lucide-react";
import React from "react";
import Carousel1 from "../usersavedlibs/Carousel1";
import Carousel3 from "../usersavedlibs/Carousel3";

export default function UserSavedLibraries() {
  const colArr = [
    `text-blue-500`,
    `text-purple-500`,
    `text-red-500`,
    `text-orange-500`,
    `text-green-500`,
    `text-yellow-500`,
  ];

  const renderSavedLibs5 = [...Array(5)].map((item, index) => {
    return (
      <div
        className="bg-background h-[170px] shadow-md rounded-lg flex justify-center items-center px-5 hover:scale-110 transition-all duration-300"
        key={`savedLib${index}${Math.random()}`}
      >
        <div className="w-full">
          <FolderClosed className={`${colArr[index % colArr.length]}`} />
          <h3 className="font-semibold mt-3">My Saved Library {index + 1}</h3>
          <p className="text-muted-foreground mt-3 text-sm font-semibold">
            dd-mm-yyyy
          </p>
        </div>
      </div>
    );
  });

  const renderSavedLibs3 = [...Array(3)].map((item, index) => {
    return (
      <div
        className="bg-background h-[170px] shadow-md rounded-lg flex justify-center items-center px-5 hover:scale-110 transition-all duration-300"
        key={`savedLib${index}${Math.random()}`}
      >
        <div className="w-full">
          <FolderClosed className={`${colArr[index % colArr.length]}`} />
          <h3 className="font-semibold mt-3">My Saved Library {index + 1}</h3>
          <p className="text-muted-foreground mt-3 text-sm font-semibold">
            dd-mm-yyyy
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="hidden px-10 py-3 min-[870px]:grid grid-cols-5 gap-7">
        {renderSavedLibs5}
      </div>
      <div className="hidden px-10 py-3 min-[870px]:hidden sm:flex sm:justify-center sm:items-center">
        <Carousel3 />
      </div>
      <div className="px-10 py-3 sm:hidden flex justify-center items-center">
        <Carousel1 />
      </div>
    </>
  );
}