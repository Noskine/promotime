import {
  Sun,
  Moon,
  LayoutDashboard,
  Computer,
  Receipt,
  Store,
} from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';
import logotypeWhite from '@/assets/logotype_whiteTheme.png'
import logotypeBlack from '@/assets/logotype_blackTheme.png'
import Image from 'next/image';

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className='px-[5%] py-5 md:px-[10%] border-b-[1px] bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 border-zinc-200 flex items-center justify-between'>
      <section className='flex items-center gap-5'>
        <Link href='/'>
          <Image
            src={theme === 'dark' ? logotypeBlack : logotypeWhite}
            alt="logotipo promoplay"
            width={500}
            height={500}
            className='w-[100px] dark:contrast-[100%]'
          />
        </Link>
        <NavigationMenu className='dark:text-zinc-100 hidden md:block'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/coupon" legacyBehavior passHref>
                <NavigationMenuLink className=" text-sm flex items-center gap-1" >
                  <Receipt className='w-[16px] text-orange-600' />
                  Cupoms
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm flex items-center px-3 font-medium">
                <LayoutDashboard className='w-[16px] mr-[5px]' />
                Categorias
              </NavigationMenuTrigger>
              <NavigationMenuContent>

              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm flex items-center px-3 font-medium">
                <Store className='w-[16px] mr-[5px]' />
                Lojas
              </NavigationMenuTrigger>
              <NavigationMenuContent>

              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className=" text-sm flex items-center px-3 font-medium">
                  <Computer className='w-[16px] mr-[5px]' />
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </section>
      <section>
        <Button
          onClick={() => { theme == 'dark' ? setTheme('light') : setTheme('dark') }}
          className='p-[none] bg-transparent hover:bg-transparent shadow-none'
        >
          <Sun className='text-orange-500 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-zinc-800 dark:text-zinc-50' />
        </Button>
      </section>
    </header>
  )
}