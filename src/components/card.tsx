import { Apple, CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardProps {
  children: React.ReactNode
  title: string
  price: number
  priceBefore?: number
  srcIconStore: string
}

export function Card({ children, title, price, priceBefore, srcIconStore }: CardProps) {
  return (
    <section className="p-3 w-full shadow-md  cursor-pointer bg-white text-zinc-800 rounded-lg ">
      <section className="relative">
        {children}
        <Image 
          src={srcIconStore}
          alt=""
          width={50}
          height={50}
          className="w-[34px] h-[34px] object-cover bg-zinc-100 rounded-full absolute top-0 right-0 shadow" />
      </section>
      <h3 className="text-sm font-black text-shadow-md py-1">
        {title}
      </h3>
      <hr className="text-zinc-400 border-1" />
      <div className="mt-2 space-y-1 hover:opacity-80">
        <p className="text-[14px] text-gray-500">
          <span className="text-[11px]">
          {priceBefore ? 'R$' : ''}
          </span>
          {priceBefore ? priceBefore.toFixed(2).toString().replace('.', ',') : ''}
        </p>
        <span className="flex items-center gap-1">
          <p className="text-orange-600 text-xl font-extrabold">
            <span className="text-[11px]">
              R$
            </span>
            {price.toFixed(2).toString().replace('.', ',')}
          </p>
          <CircleArrowOutUpRight className="w-[14px]"/>
        </span>
      </div>
    </section>
  );
}
