'use client'

import { Check, Copy } from "lucide-react";
import { BoxStyle } from "./BoxStyle";
import { Button } from "./ui/button";
import { useState } from "react";

export function Pricing(){

  const [copy, setCopy] = useState<boolean>(false);

  return(
    <div className="w-full mt-32 flex flex-col items-center">
      <h1 className="text-center font-alt text-4xl font-bold">Valores</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <BoxStyle>
          <div className="px-5">
            <span>à vista</span>

            <h1 className="text-4xl font-bold">
              R$400,00
            </h1>
          </div>
        </BoxStyle>

        <BoxStyle>
          <div className="px-5">
            <span>no boleto</span>

            <h1 className="text-4xl font-bold">
              R$400,00

              <span className="ml-2 text-base">em até 4x</span>
            </h1>
          </div>
        </BoxStyle>

        <BoxStyle>
          <div className="px-5">
            <span>no cartão</span>

            <h1 className="text-4xl font-bold">
              R$450,00

              <span className="ml-2 text-base">em até 10x</span>
            </h1>
          </div>
        </BoxStyle>
      </div>

      <div className="w-full max-w-md mt-10 py-3 px-4 flex items-center gap-4 border-2
       text-black border-black bg-white">
        <p className="w-full max-w-xs whitespace-nowrap text-ellipsis overflow-x-hidden">
          PIX: (83) 9606-4852 (Guilherme Henrique)
        </p>

        <Button 
          variant={'outline'} 
          className="p-0 w-12 h-10"
          onClick={() => {
            setCopy(true);
            navigator.clipboard.writeText("8396064852");
            setTimeout(() => setCopy(false), 2000)
          }} 
        >
          {copy ? (
            <Check className="w-4 h-4"/>
          ) : (
            <Copy className="w-4 h-4"/>
          )}
        </Button>
      </div>

      <p className="mt-10 text-center">
        Ao efetuar o pagamento é importante que você envie o comprovante para o <br/>
        número <span className="font-bold text-xl text-yellow-500">(83) 9606-4852</span>
      </p>
    </div>
  )
}