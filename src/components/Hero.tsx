import Image from "next/image";

import logo_connect from '../assets/logo-connect.png';
import logo_camp from '../assets/connect-camp.png';
import TextGradiet from "./TextGradiet";
import { CountDown } from "./CountDown";

export function Hero(){
  return(
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-5">
        <Image 
          alt=""
          width={80} 
          height={80} 
          src={logo_connect}
        />

        <Image 
          alt=""
          width={80} 
          height={80} 
          src={logo_camp}
        />
      </div>

      <div className="mt-16 flex flex-col items-center space-y-10">
        <h1 className="text-4xl text-center md:text-6xl uppercase font-black">
          <TextGradiet title="Connect Camp 2024"/>
        </h1>

        <div>
          <CountDown/>

          <h1 className="mt-5 font-alt font-bold text-center">
            28 à 31 de Março
          </h1>
        </div>

        <p className="w-full max-w-lg text-center">
          Você está preparado para viver dias incríveis, cheios da presença de Deus? Serão quatro dias para 
          experimentar o sobrenatural do Senhor, imersos naquilo que Deus tem para as nossas vidas!
        </p>
      </div>
    </div>
  );
}
