import { Aperture, Atom, LanguagesIcon, Mic2Icon } from "lucide-react";
import { SectionHeader } from "./header";

const data = [
  {
    Icon: LanguagesIcon,
    title: "Worldwide Community",
    desc: "Native speakers teach you their language, while you teach them yours. Millions of people use Lingora to practice 150+ languages.",
  },
  {
    Icon: Mic2Icon,
    title: "Text, Voice, Video, and More",
    desc: "Chat with language partners through text and voice messages, stickers, voice and video calls, and interactive Voicerooms and Lives. Whatever your communication preference, choose the method that best fits your learning goals!",
  },
  {
    Icon: Aperture,
    title: "Intuitive Language Tools",
    desc: "Built-in aids for translation, pronunciation, transliteration, and corrections make conversations run smoothly. Learning is as simple as chatting!",
  },
  {
    Icon: Atom,
    title: "Moments",
    desc: "Engage with the entire community by posting Moments. The public posts are seen by all native speakers of your target language and are ideal for asking questions and sharing updates.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-40 px-5 sm:px-10">
      <SectionHeader
        subHeading="Learn"
        title="Unlock Your language Learning potential Today"
        desc="Experience a revolutionary way to learn language through audio. Our platform connect you with native speakers for authentic learning."
      />
      <div className="max-w-7xl mt-10 w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map(({ Icon, title, desc }, index) => (
          <div className="flex gap-2 mx-auto max-w-md" key={index}>
            <div className="relative size-20">
              <Icon className="size-10" />
            </div>
            <div className="">
              <h2 className="font-semibold text-2xl">{title}</h2>
              <span className="text-lg">{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
