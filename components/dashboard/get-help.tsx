import Image from "next/image";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

import React from "react";

export const GetHelp = () => {
  return (
    <div className="bg-blue-500 p-5 text-white space-y-3 rounded-3xl mt-auto">
      <Image
        src={"/user-tag.svg"}
        alt="user-get-help"
        width={50}
        height={50}
        className="size-8"
      />
      <p className="text-sm">Got some questions, enquiries or need help?</p>
      <Link href={"/"} className="underline text-amber-200">
        Visit Lingora Help Desk
      </Link>
      <div className="flex justify-between items-center whitespace-nowrap mt-5">
        <p className="font-bold text-xs">Switch to Classic Mode</p>
        <Switch />
      </div>
    </div>
  );
};
