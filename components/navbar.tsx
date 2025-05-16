import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";

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
  return (
    <div className="w-full p-5">
      <nav className="max-w-7xl flex justify-between items-center mx-auto">
        <Logo />
        <ul className="flex gap-4 items-center">
          {links.map(({ label, href }) => (
            <Link href={href} className="text-lg" key={label}>
              {label}
            </Link>
          ))}
        </ul>
        <div className="space-x-4">
          <Button variant={'outline'} className="text-lg">Start</Button>
          <Button className="text-lg">Join</Button>
        </div>
      </nav>
    </div>
  );
};
