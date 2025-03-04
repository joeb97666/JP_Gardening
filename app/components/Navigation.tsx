'use client'

import { Button } from "@/app/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/app/components/ui/sheet"
import Link from 'next/link'
import { NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenu } from "@/app/components/ui/navigation-menu"
import { useTheme } from 'next-themes';

export function NavMenu() {
  const { theme } = useTheme();
  return (
    <>
      <header className="fixed bg-gray-800 opacity-99 flex h-20 w-full shrink-0 items-center px-4 md:px-6 justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className={`{theme === 'dark' ? 'bg-black' : 'bg-gray-900 bg-opacity-60'}`}>
            <Link href="/" className="flex items-center">
              <TreesIcon className="h-6 w-6" />
              <span className="sr-only">JP GARDENING</span>
            </Link>
            <nav className="grid gap-2 py-6">
              <Link className="flex w-full items-center py-2 text-lg text-white font-semibold" href="/">
                Home
              </Link>
              <Link className="flex w-full items-center py-2 text-lg text-white font-semibold" href="/services">
                Services
              </Link>
              <Link className="flex w-full items-center py-2 text-lg text-white font-semibold" href="/about">
                About
              </Link>
              <Link className="flex w-full items-center py-2 text-lg text-white font-semibold" href="/contact">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        
        <Link className="mr-6 hidden lg:flex" href="/">
          <TreesIcon className="h-6 w-6" />
          <span className="sr-only">JP GARDENING</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:bg-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-900/50 data-[state=open]:bg-gray-900/50 dark:bg-gray-950 dark:hover:bg-black dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="/"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:bg-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-900/50 data-[state=open]:bg-gray-900/50 dark:bg-gray-950 dark:hover:bg-black dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="/services"
                >
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:bg-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-900/50 data-[state=open]:bg-gray-900/50 dark:bg-gray-950 dark:hover:bg-black dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="/about"
                >
                 About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:bg-gray-900 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-900/50 data-[state=open]:bg-gray-900/50 dark:bg-gray-950 dark:hover:bg-black dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="/contact"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  )
}

// ... (keep the icon components as they were)

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TreesIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  )
}


function ChevronRightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
