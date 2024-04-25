/* eslint-disable no-unused-vars */
import ContentWrapper from "./components/homepage/ContentWrapper";
import SideNav from "./components/homepage/SideNav";
import React from "react";

export default function HomePage() {
  return (
    <div className="w-full h-dvh flex">
      <ContentWrapper />
      <SideNav />
    </div>
  );
}
