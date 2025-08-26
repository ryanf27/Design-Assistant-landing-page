export function TrustedBy() {
  const logos = [
    { id: 1, name: "Helix" },
    { id: 2, name: "Aurora" },
    { id: 3, name: "Nebula" },
    { id: 4, name: "Quanta" },
    { id: 5, name: "Orbit" },
    { id: 6, name: "Nova" },
    { id: 7, name: "Plasma" },
  ];

  return (
    <section className="py-16 px-6 ">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="text-lg font-semibold tracking-wide">
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
