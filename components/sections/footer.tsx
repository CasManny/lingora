import React from "react";
import { Logo } from "../logo";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const resources = [
  "Help center",
  "contact us",
  "blog posts",
  "FAQs",
  "user Guide",
];

const companyInfo = ["About us", "careers", "partnerships", "feedbacks"];

const ConnectWithUs = [
  {
    label: "Facebook",
    Icon: FaFacebook,
  },
  {
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    label: "X",
    Icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    label: "Youtube",
    Icon: FaYoutube,
  },
];

export const Footer = () => {
  return (
    <section className="py-20 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex gap-10">
          <div className="w-[40%] space-y-2">
            <Logo />
            <p className="text-xs">
              Subscribe to our newsletter for the updates on features and latest
              release
            </p>
            <div className="flex gap-2">
              <Input className="" placeholder="Your email here..." />
              <Button variant={"outline"}>Join</Button>
            </div>
            <p className="text-sm">
              By subscribing, you consent to our Privacy Policy and agree to
              recieve updates
            </p>
          </div>
          <div className="w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="space-y-3">
              <h3 className="font-bold">Resources</h3>
              <div className="flex flex-col gap-2">
                {resources.map((item, index) => (
                  <Link href={item} key={index}>{item}</Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">Company Info</h3>
              <div className="flex flex-col gap-2">
                {companyInfo.map((item, index) => (
                  <Link href={item} key={index}>{item}</Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="font-bold">Connect With Us</h2>
              <div className="flex gap-2 flex-col">
                {ConnectWithUs.map((item, index) => (
                  <Link href={"/"} key={index} className="flex gap-2 items-center">
                    <item.Icon />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-16">
          <p>&copy; 2025 Lingora. All rights Reserved</p>
          <div className="flex gap-2 items-center">
            {["Privacy Policy", "Terms of Service", "cookie Settings"].map(
              (item,index) => (
                <p key={index} className="underline">{item}</p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
