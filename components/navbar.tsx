"use client";
import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { MobileNav } from "./mobile-nav";

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

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full p-5 sticky top-0 backdrop-blur-2xl z-50">
      <nav className="max-w-7xl flex justify-between items-center mx-auto">
        <Logo />
        <ul className="gap-4 items-center hidden lg:flex">
          {links.map(({ label, href }) => (
            <Link href={href} className="text-lg" key={label}>
              {label}
            </Link>
          ))}
        </ul>
        <div className="space-x-4 hidden lg:flex">
          <Button
            variant="outline"
            className="text-lg px-6 py-2 cursor-pointer border-[#DD5E98] text-[#DD5E98] hover:bg-[#ffe3f0] hover:text-[#c94b84] transition-all rounded-full shadow-sm"
            onClick={() => router.push("/dashboard")}
          >
            Start
          </Button>
          <Button
            className="text-lg px-6 py-2 cursor-pointer bg-[#DD5E98] hover:bg-[#c94b84] text-white transition-all rounded-full shadow-md"
            onClick={() => router.push("/dashboard")}
          >
            Join
          </Button>
        </div>
        <MobileNav />
      </nav>
    </div>
  );
};
