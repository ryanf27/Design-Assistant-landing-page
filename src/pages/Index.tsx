import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Blog } from "@/components/Blog";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TrustedBy />
      <Features />
      <Pricing />
      <Blog />
      <CallToAction />
    </div>
  );
};

export default Index;
