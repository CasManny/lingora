"use client"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

const links = [
  {
    label: "Explore",
    href: "/",
  },
  {
    label: "Community",
    href: "/",
  },
  {
    label: "Resources",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/",
  },
  {
    label: "Blog",
    href: "/",
  },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-5">
        <Logo />
        <div className="mt-4">
          <ul className="gap-4 flex flex-col">
            {links.map(({ label, href }) => (
              <SheetClose asChild key={label}>
                <Link href={href} className="text-lg">
                  {label}
                </Link>
              </SheetClose>
            ))}
          </ul>

          <div className="flex flex-col gap-2 mt-5">
            <SheetClose asChild>
              <Button
                variant="outline"
                className="text-lg px-6 py-2 cursor-pointer border-[#DD5E98] text-[#DD5E98] hover:bg-[#ffe3f0] hover:text-[#c94b84] transition-all rounded shadow-sm"
                asChild
              >
                <Link href="/dashboard">Start</Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button
                className="text-lg px-6 py-2 cursor-pointer bg-[#DD5E98] hover:bg-[#c94b84] text-white transition-all rounded shadow-md"
                asChild
              >
                <Link href="/dashboard">Join</Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
