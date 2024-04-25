/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function Time() {
  const [time, setTime] = useState(DateTime.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(DateTime.now().setZone("Asia/Kolkata"));
    }, 1000);
  }, [time]);
  return <p>{time.toFormat("HH:mm")}</p>;
}