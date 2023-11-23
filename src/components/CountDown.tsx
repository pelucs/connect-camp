'use client';

import { useEffect, useState } from 'react';
import { BoxStyle } from './BoxStyle';

export function CountDown() {
  const [date, setDate] = useState<string>('00d 00h 00m 00s');

  useEffect(() => {
    const countDownDate = new Date('Mar 28, 2024 23:59:59').getTime(); // Removi os milissegundos extras

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const distance = countDownDate - currentDate;

      if (distance <= 0) {
        // A contagem regressiva terminou
        formatDate(0, 0, 0, 0);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      formatDate(days, hours, minutes, seconds);

      // Agende a próxima atualização após 1 segundo
      setTimeout(updateCountdown, 1000);
    };

    // Inicie a contagem regressiva
    updateCountdown();
  }, []);

  const formatDate = (days: number, hours: number, minutes: number, seconds: number) => {
    const dayF = days <= 9 ? `0${days}` : `${days}`;
    const hoursF = hours <= 9 ? `0${hours}` : `${hours}`;
    const minutesF = minutes <= 9 ? `0${minutes}` : `${minutes}`;
    const secondsF = seconds <= 9 ? `0${seconds}` : `${seconds}`;

    setDate(`${dayF}d ${hoursF}h ${minutesF}m ${secondsF}s`);
  };

  return (
    <div className="w-full max-w-sm">
      <BoxStyle>
        <h1 className="px-4 text-2xl md:text-4xl font-bold">{date}</h1>
      </BoxStyle>
    </div>
  );
}