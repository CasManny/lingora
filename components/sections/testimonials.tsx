import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { SectionHeader } from "./header";

const reviews = [
  {
    name: "Amara K.",
    username: "@amara_fr",
    body: "I’ve tried tons of language apps, but nothing beats hearing real people speak. This platform makes learning feel human, not robotic.",
    img: "https://avatar.vercel.sh/amara",
  },
  {
    name: "Luis M.",
    username: "@luis_mx",
    body: "Recording in my native language and knowing it helps others? So fulfilling. This isn’t just an app — it’s a cultural bridge.",
    img: "https://avatar.vercel.sh/luis",
  },
  {
    name: "Elena F.",
    username: "@elena_it",
    body: "The design is clean and intuitive. I can practice Swahili and help others with Italian — all in one place!",
    img: "https://avatar.vercel.sh/elena",
  },
  {
    name: "Samuel O.",
    username: "@samuel_ng",
    body: "I use this daily. Hearing native speakers has helped my pronunciation and boosted my confidence big time.",
    img: "https://avatar.vercel.sh/samuel",
  },
  {
    name: "Aya N.",
    username: "@aya_jp",
    body: "This isn’t just about learning words — it’s about stories, voices, and accents from around the world. Beautiful.",
    img: "https://avatar.vercel.sh/aya",
  },
  {
    name: "John B.",
    username: "@john_teach",
    body: "As a language teacher, this is gold. It gives students real, natural examples textbooks can't offer.",
    img: "https://avatar.vercel.sh/johnb",
  },
  {
    name: "John B.",
    username: "@john_teach",
    body: "As a language teacher, this is gold. It gives students real, natural examples textbooks can't offer.",
    img: "https://avatar.vercel.sh/johnb",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </CardContent>
    </Card>
  );
};

export function Testimonials() {
  return (
    <div className="px-5 sm:px-10 space-y-10">
      <SectionHeader
        title="What People are saying"
        desc="It's never been this fun to learn languages. Millions of happy Lingora members agree!"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
    </div>
  );
}
