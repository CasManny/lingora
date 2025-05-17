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
    <section className="py-40 px-5 sm:px-10 bg-gradient-to-b from-white via-[#fef6ff] to-[#ffffff]">
      <SectionHeader
        subHeading="Learn"
        title="Unlock Your Language Learning Potential Today"
        desc="Experience a revolutionary way to learn languages through authentic conversation. Lingora connects you with native speakers from around the globe."
      />
      <div className="max-w-7xl mt-14 w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map(({ Icon, title, desc }, index) => (
          <div
            className="flex items-start gap-6 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            key={index}
          >
            <div className="flex items-center justify-center text-[#DD5E98]">
              <Icon className="size-8" />
            </div>
            <div>
              <h2 className="font-semibold text-xl text-gray-900 mb-1">
                {title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
