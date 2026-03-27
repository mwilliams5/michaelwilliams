import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen bg-[#1e3a5f] text-white flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#c8963e] font-sans text-sm font-semibold tracking-widest uppercase mb-4">
            The Official Website of
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-bold leading-tight mb-6">
            Michael
            <br />
            Williams
          </h1>
          <p className="text-white/60 font-sans text-lg italic mb-8">
            No, not <em>that</em> Michael Williams. <strong className="text-white/80 not-italic">This</strong> one.
          </p>
          <p className="text-white/75 font-sans text-base leading-relaxed mb-10 max-w-md">
            The internet contains approximately 847,000 Michael Williamses.
            You have found the correct one — a Southern California original,
            devoted father, seasoned trivia strategist, and proud veteran of
            multiple chili cookoffs.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Father",
              "Friend",
              "Chili Competitor",
              "Trivia King*",
              "Green Beer Enthusiast",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 border border-white/20 text-white/80 text-sm font-sans px-4 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white/30 font-sans text-xs mt-4">
            *Self-titled
          </p>
        </div>

        {/* Photo */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <Image
              src="/images/pool-2023.jpg"
              alt="Michael Williams"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          {/* floating caption */}
          <div className="absolute -bottom-4 -left-4 bg-[#c8963e] text-white font-sans text-sm px-4 py-2 rounded-xl shadow-lg max-w-[220px] leading-snug">
            📍 Southern California<br />
            <span className="text-white/80 text-xs">Pool: fully operational</span>
          </div>
        </div>
      </div>
    </section>
  );
}
