"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Fun road
        </span>
      </Link>

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
    </nav>
  );
};
