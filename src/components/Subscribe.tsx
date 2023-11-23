'use client'

import { ApolloProvider } from "@apollo/client";
import { FormSubscribe } from "./FormSubscribe";
import { client } from "@/api/apollo";

export function Subscribe(){
  return(
    <div className="w-full mt-32">
      <h1 className="text-center font-alt text-4xl font-bold">Formulário de inscrição</h1>

      <div className="w-full md:max-w-xl mt-10 mx-auto relative">
        <div className="z-20 py-4 px-5 relative text-black bg-white border-2">
          <h1 className="text-2xl text-center font-bold leading-none">
            Preencha todos os <br/> 
            campos corretamente
          </h1>

          <ApolloProvider client={client}>
            <FormSubscribe/>
          </ApolloProvider>
        </div>

        <div className="w-full h-full bg-red-500 border-2 border-black absolute top-3 left-3"/>
      </div>
    </div>
  );
}