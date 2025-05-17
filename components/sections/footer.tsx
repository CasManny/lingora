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
  { label: "Facebook", Icon: FaFacebook },
  { label: "Instagram", Icon: FaInstagram },
  { label: "X", Icon: FaXTwitter },
  { label: "LinkedIn", Icon: FaLinkedin },
  { label: "Youtube", Icon: FaYoutube },
];

export const Footer = () => {
  return (
    <section className="py-20 px-5 sm:px-10 bg-[#E7ECEF]/30">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="w-full flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="w-full lg:w-[40%] space-y-4">
            <Logo />
            <p className="text-xs">
              Subscribe to our newsletter for the updates on features and latest
              release
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="Your email here..." className="flex-1" />
              <Button className="text-lg px-6 py-2 bg-[#DD5E98] hover:bg-[#c94b84] text-white shadow-md">
                Join
              </Button>
            </div>
            <p className="text-sm">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates
            </p>
          </div>

          {/* Right Columns */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold">Resources</h3>
              <div className="flex flex-col gap-2">
                {resources.map((item, index) => (
                  <Link href={item} key={index}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">Company Info</h3>
              <div className="flex flex-col gap-2">
                {companyInfo.map((item, index) => (
                  <Link href={item} key={index}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="font-bold">Connect With Us</h2>
              <div className="flex gap-2 flex-col">
                {ConnectWithUs.map(({ Icon, label }, index) => (
                  <Link
                    href={"/"}
                    key={index}
                    className="flex gap-2 items-center"
                  >
                    <Icon />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t">
          <p>&copy; 2025 Lingora. All rights reserved</p>
          <div className="flex flex-wrap gap-2 items-center text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (item, index) => (
                <p key={index} className="underline cursor-pointer">
                  {item}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
