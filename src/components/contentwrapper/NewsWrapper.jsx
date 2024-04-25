/* eslint-disable no-unused-vars */
import React from "react";
import NewsCarousel from "../newswrapper/NewsCarousel";
import RecentReleases from "../newswrapper/RecentReleases";

export default function NewsWrapper() {
  return (
    <>
      <div className="flex mt-3 px-5 xl:space-x-5 h-fit">
        <div className="w-full hidden lg:flex xl:basis-3/4">
          <NewsCarousel perPage={4} />
        </div>
        <div className="w-full hidden min-[860px]:flex lg:hidden">
          <NewsCarousel perPage={3} />
        </div>
        <div className="w-full hidden sm:flex min-[860px]:hidden">
          <NewsCarousel perPage={2} />
        </div>
        <div className="w-full sm:hidden">
          <NewsCarousel perPage={1} />
        </div>
        <div className="hidden xl:flex xl:basis-1/4">
          <RecentReleases />
        </div>
      </div>
      <div className="xl:hidden px-5 mt-5">
        <RecentReleases />
      </div>
    </>
  );
}