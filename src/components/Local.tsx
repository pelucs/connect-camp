'use client'

import { MapPin, Map } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

import Image from "next/image";

import img_1 from '../../public/img-1.png';
import img_2 from '../../public/img-2.jpg';
import img_3 from '../../public/img-3.jpg';
import img_4 from '../../public/img-4.jpg';
import img_5 from '../../public/img-5.png';

const imgs = [
  { image: img_1 },
  { image: img_2 },
  { image: img_3 },
  { image: img_4 },
  { image: img_5 },
];

export function Local(){

  const [src, setSrc] = useState<string>(img_1.src);

  return(
    <div className="mt-32">
      <h1 className="text-center font-alt text-4xl font-bold">Local</h1>

      <div className="mt-10 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center">
            Rio das Garças Eco Resort
          </h1>

          <span className="flex items-center gap-1">
            <MapPin className="w-5 h-5"/>

            Natal - Rio Grande do Norte
          </span>

          <Button asChild>
            <a 
              target="_blank"  
              href="https://www.google.com.br/maps/place/Rio+das+Gar%C3%A7as+Eco+Resort/@-5.9683143,-35.2708876,15z/data=!4m9!3m8!1s0x7b259ba92413d63:0x3ecd73dd7d34f5df!5m2!4m1!1i2!8m2!3d-5.9674348!4d-35.2709693!16s%2Fg%2F1ydkj3m3m?entry=ttu"
              className="mt-5"
            >
              <Map className="w-4 h-4 mr-2"/>

              Ver no mapa
            </a>
          </Button>
        </div>

        <div className="w-full max-w-3xl flex flex-col items-center">
          <Image 
            src={src}
            alt=""
            width={800}
            height={800}
            className="w-full rounded-xl aspect-video"
          />

          <div className="mt-2 flex gap-2">
            {imgs.map(img => (
              <Image 
                src={img.image}
                alt=""
                key={img.image.src}
                onClick={() => setSrc(img.image.src)}
                className="w-10 md:w-20 h-10 md:h-20 rounded-md cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
