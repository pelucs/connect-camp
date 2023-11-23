'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetSubscribesQuery } from "@/graphql/generated";
import { useState } from "react";

export function ListSubscribe(){

  const { data } = useGetSubscribesQuery();
  const [search, setSearch] = useState("");

  if(!data || !data.subscribes){
    return <h1>Carregando!</h1>
  }

  const filteringSubscribes = search.length > 0
  ? data.subscribes.filter(subs => subs.name.toUpperCase().includes(search) || subs.numberPhone.toUpperCase().includes(search)
  || subs.email.toUpperCase().includes(search) || subs.sex.toUpperCase().includes(search) || subs.birth.toUpperCase().includes(search)
  || subs.isMember.toUpperCase().includes(search) || subs.marital.toUpperCase().includes(search) || subs.id.toUpperCase().includes(search))
  : data.subscribes;

  return(
    <div className="w-full overflow-y-auto">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <input
          placeholder="Pesquise aqui"
          onChange={e => setSearch(e.target.value.toUpperCase())}
          className="w-full md:max-w-[260px] py-3 px-4 bg-zinc-100 rounded outline-none"
        />

        <h1 className="w-full md:max-w-[260px] h-11 px-5 flex items-center justify-center bg-zinc-100 rounded">
          {filteringSubscribes.length} inscrições encontradas
        </h1>
      </div>

      <Table className="border border-zinc-300 mt-5">
        <TableHeader className="text-xs">
          <TableRow className="hover:bg-zinc-100 border-zinc-300">
            <TableHead>Nome</TableHead>
            <TableHead className="whitespace-nowrap">Data de nas.</TableHead>
            <TableHead>Sexo</TableHead>
            <TableHead>Tel.</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="whitespace-nowrap">Mem. da ADVEC</TableHead>
            <TableHead>Est. civil</TableHead>
          </TableRow>
        </TableHeader>

          {filteringSubscribes.length > 0 ? (
            <TableBody className="text-xs">
              {filteringSubscribes.map(subs => (
                <TableRow key={subs.id} className="hover:bg-zinc-100 border-zinc-300">
                  <TableCell className="whitespace-nowrap">{subs.name}</TableCell>
                  <TableCell className="whitespace-nowrap">{subs.birth}</TableCell>
                  <TableCell className="capitalize">{subs.sex}</TableCell>
                  <TableCell className="whitespace-nowrap">{subs.numberPhone}</TableCell>
                  <TableCell>{subs.email}</TableCell>
                  <TableCell>{subs.isMember}</TableCell>
                  <TableCell className="capitalize">{subs.marital}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <div className="w-full h-[40vh] flex justify-center items-center text-center">
              Nenhum resultado encontrado
            </div>
          )}
      </Table>
    </div>
  );
}