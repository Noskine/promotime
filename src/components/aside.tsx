import Link from "next/link";
import { Button } from "./ui/button";
import { Star, TrendingDown } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function Aside() {
  return (
    <aside className="w-1/3 h-[80vh] space-y-4 hidden lg:block">

      <nav className="w-full flex items-center justify-center gap-2">
        <HoverCard>
          <HoverCardTrigger>
            <Link href="/" className="cursor-pointer relative">
              <Star className="w-10 h-8 bg-orange-400 dark:bg-zinc-700 p-2 rounded-full" />
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="p-3 w-full border-none bg-zinc-100 dark:bg-zinc-700 rounded-2xl">
            Destaques
          </HoverCardContent>
        </HoverCard>
        <Link href="/" className="cursor-pointer flex items-center justify-center gap-1 px-4 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full">
          Menor Preço
          <TrendingDown className="w-[20px]" />
        </Link>
        <Link href="/" className="cursor-pointer flex items-center justify-center px-4 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full">
          PromoDay
        </Link>
      </nav>

      <section className="bg-zinc-50 dark:bg-zinc-700 shadow-md p-5 rounded-xl flex flex-col items-center justify-center text-center">
        <h2 className="text-lg font-bold">Receba ofertas no seu Whatsapp</h2>
        <p>Acompanhe as melhores promoções da internet no seu WhatsApp</p>
        <Button className="w-[80%] mt-3 bg-green-600 hover:bg-green-800 shadow-md">
          Entre agora
        </Button>
      </section>


    </aside>
  )
}