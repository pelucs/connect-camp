'use client'

import { useEffect, useState } from "react";
import { BoxStyle } from "./BoxStyle";

export function CountDown(){

  const [date, setDate] = useState<string>("00d 00h 00m 00s");

  useEffect(() => {

    let countDownDate = new Date('Mar 28, 2024 23:59:99').getTime(); //DATA DA CONTAGEM REGRESSIVA

    setInterval(() => {

      let currentDate = new Date().getTime(),
          distance = countDownDate - currentDate;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((distance % (1000 * 60)) / 1000);

      formatDate(days, hours, minutes, seconds);

    }, 1000);

    const formatDate = (days: number, hours: number, minutes: number, seconds: number) => {

      let dayF = days <= 9 ? `0${days}` : `${days}`,
          hoursF = hours <= 9 ? `0${hours}` : `${hours}`,
          minutesF = minutes <= 9 ? `0${minutes}` : `${minutes}`,
          secondsF = seconds <= 9 ? `0${seconds}` : `${seconds}`;
  
      setDate(`${dayF}d ${hoursF}h ${minutesF}m ${secondsF}s`);
    }

  }, []);

  return(
    <div className="w-full max-w-sm">
      <BoxStyle>
        <h1 className="px-4 text-2xl md:text-4xl font-bold">{date}</h1>
      </BoxStyle>
    </div>
  );
}