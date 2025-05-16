import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Rewards } from "@/components/sections/rewards";
import { Testimonials } from "@/components/sections/testimonials";
export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Rewards />
      <Testimonials />
      <Footer />
    </div>
  );
}
