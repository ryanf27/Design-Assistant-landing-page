import { Button } from "@/components/ui/button";
import heroGraphic from "@/assets/hero-graphic.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10 bg-[hsl(var(--background))]" />

      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[hsl(var(--primary)/0.18)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[hsl(var(--primary)/0.12)] blur-3xl" />

      <div className="container mx-auto px-20">
        <div className="rounded-b-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/95 shadow-[var(--shadow-elegant)]">
          <div className="grid grid-cols-1 items-center gap-16 p-8 md:p-12 lg:grid-cols-2">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                Your AI-Powered <span className="gradient-text">Design</span>{" "}
                Assistant
              </h1>

              <p className="max-w-xl text-lg text-[hsl(var(--muted-foreground))] md:text-xl">
                Unlock your creative potential. Seamlessly generate, customize,
                and perfect your designs with cutting-edge AI technology.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="btn-hero">Get Started</button>
                <button className="btn-outline">More Templates</button>
              </div>
            </div>

            <div className="relative flex items-center justify-center animate-scale-in">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-[hsl(var(--primary)/0.25)] blur-3xl md:h-96 md:w-96"
              />
              <img
                src={heroGraphic}
                alt="Abstract purple 3D swirl"
                className="mx-auto h-auto w-full max-w-[480px] select-none drop-shadow-[0_30px_80px_hsl(var(--primary)/0.25)]"
                draggable={false}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-black/0 via-white/0 to-white/5 mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
