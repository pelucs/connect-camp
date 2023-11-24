import { User, Calendar, Phone, Mail, Loader } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { useCreateSubscribeMutation, useGetSubscribesQuery } from "@/graphql/generated";
import { useForm } from "react-hook-form";

import z from 'zod'; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { resolveSoa } from "dns";

const formSchema = z.object({
  name: z.string().nonempty("*Campo obrigatório").min(3, { message: "*No mínimo 3 caracteres" }),
  numberPhone: z.string().nonempty("*Campo obrigatório"),
  email: z.string().email("*Email inválido"),
  birth: z.string().nonempty("*Campo obrigatório")
});

type CreateSubscribeFormData = z.infer<typeof formSchema>;

export function FormSubscribe(){

  const { data } = useGetSubscribesQuery();
  const [createSubscribe, { loading }] = useCreateSubscribeMutation(); 
  const [isMember, setIsMember] = useState("");
  const [marital, setMarital] = useState("");
  const [sex, setSex] = useState("");

  const { handleSubmit, register, formState: { errors } } = useForm<CreateSubscribeFormData>({
    resolver: zodResolver(formSchema)
  });

  const subscribe = async (app: CreateSubscribeFormData) =>  {
    if(isMember && marital && sex){
      const { name, email, birth, numberPhone } = app;

      if(data){
        if(data.subscribes.length < 50){
          await createSubscribe({
            variables: {
              name,
              email,
              birth,
              isMember,
              marital,
              sex,
              numberPhone
            }
          })
          .then(res => {
            if(res.data){
              prompt("Inscrição enviada! Guarde seu ID", res.data.createSubscribe?.id);
              window.location.reload();
            }
          })
        } else{
          alert("Vagas preenchidas!")
        }
      }
    }
  }

  return(
    <form onSubmit={handleSubmit(subscribe)} className="w-full mt-8 space-y-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs uppercase font-bold">Nome completo</label>

        <div className="w-full p-3 flex items-center gap-2 border rounded-none">
          <User className="w-4 h-4"/>

          <input
            placeholder="Informe seu nome completo"
            className="flex-1 outline-none"
            {...register("name")}
          />
        </div>

        {errors.name && (
          <span className="text-xs text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs uppercase font-bold">Data de nascimento</label>

        <div className="w-full p-3 flex items-center gap-2 border rounded-none">
          <Calendar className="w-4 h-4"/>

          <input
            type="date"
            placeholder="Informe seu nome completo"
            className="flex-1 outline-none"
            {...register("birth")}
          />
        </div>

        {errors.birth && (
          <span className="text-xs text-red-500">{errors.birth.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs uppercase font-bold">Sexo</label>

        <Select onValueChange={setSex}>
          <SelectTrigger className="w-full px-4 h-12 rounded-none">
            <SelectValue placeholder="Informe seu sexo"/>
          </SelectTrigger>

          <SelectContent className="bg-white text-black">
            <SelectGroup>
              <SelectItem value="masculino" className="py-3 hover:bg-zinc-200 transition-colors">Masculino</SelectItem>
              <SelectItem value="feminino" className="py-3 hover:bg-zinc-200 transition-colors">Feminino</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs uppercase font-bold">Estado civil</label>

        <Select onValueChange={setMarital}>
          <SelectTrigger className="w-full px-4 h-12 rounded-none">
            <SelectValue placeholder="Informe seu estado civil"/>
          </SelectTrigger>

          <SelectContent className="bg-white text-black">
            <SelectGroup>
              <SelectItem value="solteiro(a)" className="py-3 hover:bg-zinc-200 transition-colors">Solteiro(a)</SelectItem>
              <SelectItem value="namorando" className="py-3 hover:bg-zinc-200 transition-colors">Namorando</SelectItem>
              <SelectItem value="noivo(a)" className="py-3 hover:bg-zinc-200 transition-colors">Noivo(a)</SelectItem>
              <SelectItem value="casado(a)" className="py-3 hover:bg-zinc-200 transition-colors">Casado(a)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs uppercase font-bold">Número do whatsapp</label>

        <div className="w-full p-3 flex items-center gap-2 border">
          <Phone className="w-4 h-4"/>

          <input
            placeholder="Informe seu número de whatsapp"
            className="flex-1 outline-none"
            {...register("numberPhone")}
          />
        </div>

        {errors.numberPhone && (
          <span className="text-xs text-red-500">{errors.numberPhone.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs uppercase font-bold">Email</label>

        <div className="w-full p-3 flex items-center gap-2 border rounded-none">
          <Mail className="w-4 h-4"/>

          <input
            type="email"
            placeholder="Informe seu email"
            className="flex-1 outline-none"
            {...register("email")}
          />
        </div>

        {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs uppercase font-bold">Membro da advec?</label>

        <Select onValueChange={setIsMember}>
          <SelectTrigger className="w-full px-4 h-12 rounded-none">
            <SelectValue placeholder="Você é membro da advec?"/>
          </SelectTrigger>

          <SelectContent className="bg-white text-black">
            <SelectGroup>
              <SelectItem value="Sim" className="py-3 hover:bg-zinc-200 transition-colors">Sim</SelectItem>
              <SelectItem value="Não" className="py-3 hover:bg-zinc-200 transition-colors">Não</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button 
        type="submit"
        disabled={loading}
        className="w-full h-14 bg-gradient-to-l from-yellow-500 to-red-500 text-white font-al 
        rounded-none font-semibold uppercase"
      >
        {!loading ? (
          "Fazer inscrição"
        ) : (
          <Loader className="w-6 h-6 animate-spin"/>
        )}
      </Button>
    </form>
  );
}

// await createSubscribe({
//   variables: {
//     name: "Pedro",
//     email: "pe.lucs0089@gmail.com",
//     birth: "14/02/2002",
//     isMember: "yes",
//     marital: "Solteiro",
//     sex: "Masculino",
//     numberPhone: "83 98729-6826"
//   }
// })
// .then(() => {
//   alert("Insccrção concluída!")
// })