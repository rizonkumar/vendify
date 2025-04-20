"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavBarItemsProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavBarItems = ({ href, children, isActive }: NavBarItemsProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navBarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/contact",
    children: "Contact",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/features",
    children: "Features",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Fun road
        </span>
      </Link>

      <NavbarSidebar
        items={navBarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navBarItems.map((item) => (
          <NavBarItems
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item?.children}
          </NavBarItems>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400  hover:text-black transition-colors text-lg"
        >
          <Link href="/sign-up">Start Selling</Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          onClick={() => setIsSidebarOpen(true)}
          className="size-12 border-transparent bg-white"
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
