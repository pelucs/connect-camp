'use client'

import { ApolloProvider } from "@apollo/client";
import { ListSubscribe } from "./ListSubscribe";
import { client } from "@/api/apollo";
import { useEffect } from "react";

export default () => {

  useEffect(() => {
    const keyAcess = localStorage.getItem("clpbmgxk71gtq0bkdd5bbvrj5");

    if(!keyAcess){
      window.location.href = "/login";
    }
  })

  return(
    <div className="p-5">
      <div className="w-full md:max-w-7xl mx-auto relative">
        <div className="z-20 p-6 relative text-black bg-white border-2 space-y-5 text-sm overflow-hidden">
          <h1 className="text-2xl font-alt uppercase text-center font-bold leading-none">
            Lista de inscrição - Campina Grande
          </h1>

          <div>
            <ApolloProvider client={client}>
              <ListSubscribe/>
            </ApolloProvider>
          </div>
        </div>
        
        <div className="w-full h-full bg-red-500 border-2 border-black absolute top-3 left-3"/>
      </div>
    </div>
  );
}