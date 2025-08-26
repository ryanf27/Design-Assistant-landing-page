import { Upload, Sparkles, Palette } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Upload,
      title: "Upload Brief",
      description: "Share your project details and let our AI grasp your vision.",
    },
    {
      icon: Sparkles,
      title: "Generate Designs",
      description: "AI crafts unique design ideas tailored to you.",
    },
    {
      icon: Palette,
      title: "Refine Creation",
      description: "Perfect your chosen concept with easy-to-use AI tools.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Unleash Your{" "}
            <span className="gradient-text">Creativity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI-powered design assistant transforms your ideas into stunning 
            designs effortlessly. Follow these simple steps to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}