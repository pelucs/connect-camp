'use client'

import { Button } from "@/components/ui/button";
import { Lock, User } from "lucide-react";
import { useEffect, useState } from "react";

export default () => {

  useEffect(() => {
    const keyAcess = localStorage.getItem("clpbmgxk71gtq0bkdd5bbvrj5");

    if(keyAcess){
      window.location.href = "/app";
    }
  })

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    if(user === "conn3ct2023" && password === "ilovejesus"){
      localStorage.setItem("clpbmgxk71gtq0bkdd5bbvrj5", "clpbmgxk71gtq0bkdd5bbvrj5");
      window.location.href = "/app";
    }
  }

  return(
    <div className="w-full h-screen px-5 flex items-center justify-center bg-[url(/public/bg.png)] bg-cover bg-center">
      <div className="w-full md:max-w-xl mt-10 mx-auto relative">
        <div className="z-20 py-4 px-5 relative text-black bg-white border-2 space-y-5 text-sm">
          <h1 className="text-2xl text-center font-bold leading-none">
            Efetuar login
          </h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-xs uppercase font-bold">Usuário</label>

            <div className="w-full p-3 flex items-center gap-2 border rounded-none">
              <User className="w-4 h-4"/>

              <input
                onChange={e => setUser(e.target.value)}
                placeholder="Informe seu nome completo"
                className="flex-1 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-xs uppercase font-bold">Senha</label>

            <div className="w-full p-3 flex items-center gap-2 border rounded-none">
              <Lock className="w-4 h-4"/>

              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Informe seu nome completo"
                className="flex-1 outline-none"
              />
            </div>
          </div>

          <Button 
            onClick={login}
            className="w-full h-14 bg-gradient-to-l from-yellow-500 to-red-500 text-white font-al 
            rounded-none font-semibold uppercase"
          >
            Entrar
          </Button>
        </div>
        
        <div className="w-full h-full bg-red-500 border-2 border-black absolute top-3 left-3"/>
      </div>
    </div>
  );
}