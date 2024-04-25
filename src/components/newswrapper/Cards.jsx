/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import news from "../helpers/news.js";

export default function Cards(props) {
  const renderCards = news.map((item, index) => {
    if (index >= props.offset && index < props.offset + props.perPage)
      return (
        <div
          className="h-72 w-56 min-[1024px]:w-52 min-[1100px]:w-56 shadow-md w6"
          key={`News${index}${Math.random()}`}
        >
          <img src={item.imgurl} className="h-1/2 w-full" />
          <div className="px-5">
            <h3 className="text-sm font-semibold mt-2 text-left">
              {item.headline}
            </h3>
            <p className="text-xs text-muted-foreground text-left mt-3">
              {item.body}
            </p>
          </div>
        </div>
      );
    else return null;
  });

  return (
    <div
      className={`min-[365px]:w-full text-center flex ${
        props.perPage <= 2 ? `justify-center space-x-8` : `justify-between`
      } pt-3`}
    >
      {renderCards}
    </div>
  );
}