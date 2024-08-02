import Aside from "@/components/aside";
import { Card } from "@/components/card";

import Image from "next/image";


export default function Home() {

  return (
    <main className="flex items-start py-10 px-[5%] xl:px-[10%] min-h-screen justify-between dark:bg-zinc-800 gap-5">
      <section className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-5">
        <Card
          title="VIOLÃO ELÉTRICO MICHAEL FOLK VMF36"
          price={1982.99}
          priceBefore={2332}
          srcIconStore="/icons/amazon.jpg"
        >
          <Image
            src="/51H4eO72QNL._AC_SX679_.jpg"
            alt=""
            width={300}
            height={300}
            className="w-[250px] h-[250px] object-contain py-5 hover:scale-110 transition-all"
          />
        </Card>

        <Card
          title="VIOLÃO ELÉTRICO MICHAEL FOLK VMF36"
          price={1982.99}
          priceBefore={2332}
          srcIconStore="/icons/amazon.jpg"
        >
          <Image
            src="/51H4eO72QNL._AC_SX679_.jpg"
            alt=""
            width={300}
            height={300}
            className="w-[250px] h-[250px] object-contain py-5 hover:scale-110 transition-all"
          />
        </Card>

        <Card
          title="VIOLÃO ELÉTRICO MICHAEL FOLK VMF36"
          price={1982.99}
          priceBefore={2332}
          srcIconStore="/icons/amazon.jpg"
        >
          <Image
            src="/51H4eO72QNL._AC_SX679_.jpg"
            alt=""
            width={300}
            height={300}
            className="w-[250px] h-[250px] object-contain py-5 hover:scale-110 transition-all"
          />
        </Card>
      </section>
      <Aside />
    </main>
  );
}
