import { BoxStyle } from "./BoxStyle";

export function PricingRN(){

  return(
    <div className="w-full mt-32 flex flex-col items-center">
      <h1 className="text-center font-alt text-4xl font-bold">Valores</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <BoxStyle>
          <div className="px-5">
            <span>à vista</span>

            <h1 className="text-4xl font-bold">
              R$350,00
            </h1>
          </div>
        </BoxStyle>

        <BoxStyle>
          <div className="px-5">
            <span>no boleto</span>

            <h1 className="text-4xl font-bold">
              R$350,00

              <span className="ml-2 text-base">em até 5x</span>
            </h1>
          </div>
        </BoxStyle>

        <BoxStyle>
          <div className="px-5">
            <span>no cartão</span>

            <h1 className="text-4xl font-bold">
              R$400,00

              <span className="ml-2 text-base">em até 10x</span>
            </h1>
          </div>
        </BoxStyle>
      </div>

      <div className="w-full">
        <div className="w-full md:max-w-xl mt-10 mx-auto relative">
          <div className="z-20 py-4 px-5 relative text-black bg-white border-2 space-y-5 text-sm">
            <h1 className="text-2xl text-center font-bold leading-none">
              Avisos importantes
            </h1>

            <p className="text-center">
              - A inscrição só será validada após o pagamento do valor de entrada (<span className="font-bold text-yellow-500">R$80,00</span>);
            </p>

            <p className="text-center">
              - Fazemos a inscrição on-line, entrando em contato com a secretária da juventude <span className="font-bold text-yellow-500">(84) 99832-0225</span>
            </p>

            <p className="text-center">
              - A última parcela será até <span className="font-bold text-yellow-500">14/03</span>, independente
              de quando começou a primeira parcela, a última terá que ser nessa data;
            </p>

            <p className="text-center">
              - Os participantes que não são membros da igreja deverá preencher uma ficha de recomendação
              emitida pelo seu pastor e/ou líder;
            </p>

            <p className="text-center">
              - Em caso de desistência não haverá reembolso;
            </p>

            <p className="text-center">
              - A faixa etária para participar é a partir de 18 anos.
            </p>
          </div>
          
          <div className="w-full h-full bg-red-500 border-2 border-black absolute top-3 left-3"/>
        </div>
      </div>
    </div>
  )
}