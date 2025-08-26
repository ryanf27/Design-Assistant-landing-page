import { Button } from "@/components/ui/button";
import ctaGraphic from "@/assets/cta-graphic.png";

export function CallToAction() {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Start Your Design{" "}
              <span className="gradient-text">Journey Today</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg">
              Sign up now and experience the power of AI-driven 
              design without any commitment.
            </p>
            <Button variant="hero" size="lg">
              Get Started
            </Button>
          </div>

          {/* Right Graphic */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              <img 
                src={ctaGraphic} 
                alt="AI Design Assistant 3D Graphic" 
                className="w-full max-w-md h-auto animate-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-purple-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl"></div>
    </section>
  );
}