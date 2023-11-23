import Image from "next/image";

import logo_connect from '../assets/logo-connect.png';
import logo_advec from '../assets/logo-advec.png';
import { Instagram } from "lucide-react";

export function Footer(){
  return(
    <div className="mt-20 flex flex-col items-center gap-10">
      <div className="flex items-center gap-5">
        <Image 
          alt=""
          width={160}
          height={160}
          src={logo_advec}
        />

      <Image 
          alt=""
          width={80}
          height={80}
          src={logo_connect}
        />
      </div>

      <div className="text-xs flex flex-col items-center">
        <h1>Redes sociais</h1>

        <div className="mt-5 flex items-center gap-5">
          <a 
            target="_blank"
            href="https://www.instagram.com/advec_campinagrande/" 
            className="py-2 px-3 flex uppercase font-semibold border items-center gap-2 leading-none 
            text-black bg-white"
          >
            <Instagram className="w-5 h-5"/>

            ADVEC CG
          </a>

          <a 
            target="_blank"
            href="https://www.instagram.com/connect.campinagrande/" 
            className="py-2 px-3 flex uppercase font-semibold border items-center gap-2 leading-none 
            text-black bg-white"
          >
            <Instagram className="w-5 h-5"/>

            Connect
          </a>
        </div>
      </div>
      
      <p className="text-xs">
        &copy;2023 - ADVEC Campina Grande
      </p>
    </div>
  );
}