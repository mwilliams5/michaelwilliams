import Image from "next/image";

const facts = [
  { emoji: "👧", label: "Father of One", value: "Georgia Williams", sub: "His finest work" },
  { emoji: "👨‍👩‍👦", label: "One of Ten Siblings", value: "9 brothers & sisters", sub: "He's the good-looking one" },
  { emoji: "🍀", label: "St. Patrick's Day", value: "Perfect attendance", sub: "Since before you were born" },
  { emoji: "🏆", label: "Chili Cookoff", value: "Multi-season veteran", sub: "Team Rambo, Silky Sullivan's" },
  { emoji: "🎯", label: "Trivia Night", value: "King (self-titled)", sub: "The team name was his idea" },
  { emoji: "🥩", label: "The Steak Challenge", value: "Attempted. Survived.", sub: "Timer: 20:54 remaining" },
  { emoji: "🐕", label: "Dog Owner", value: "Walks daily", sub: "His therapist. Non-judgmental." },
  { emoji: "🎄", label: "Santa Hat Collection", value: "Three hats", sub: "One is the 'fancy' one" },
  { emoji: "⛳", label: "Golf", value: "Currently unranked", sub: "Actively working on it" },
  { emoji: "🌮", label: "Margarita Festival", value: "Annual attendee", sub: "He calls it 'research'" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#fdf9f4] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#c8963e] font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            The Origin Story
          </p>
          <h2 className="font-serif text-5xl font-bold text-[#1e3a5f] mb-6">
            The Man. The Myth. The Michael.
          </h2>
          <div className="w-16 h-1 bg-[#c8963e] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Bio */}
          <div className="prose prose-lg max-w-none font-sans text-[#333] leading-relaxed space-y-5">
            <p>
              Born sometime in the late 1960s — in what historians now refer to as
              &ldquo;a simpler time&rdquo; — Michael Williams has spent the better part
              of six decades perfecting the art of showing up, smiling big, and
              never, under any circumstances, missing St. Patrick&apos;s Day.
            </p>
            <p>
              A proud son of Southern California, Michael is one of ten Williams
              siblings — a number that sounds made up but is, in fact, completely
              true. He navigated childhood with the grace of someone who understood
              early on that having nine brothers and sisters means you either
              develop a great sense of humor or you don&apos;t survive.
            </p>
            <p>
              Today, Michael is perhaps best known as the father of Georgia Williams,
              whose own website is frankly more popular than this one. He accepts
              this with dignity and a margarita. He is also the proud host of what
              neighbors describe as &ldquo;the best pool in the neighborhood&rdquo;
              and what Michael describes as &ldquo;a public service.&rdquo;
            </p>
            <p>
              When he is not hosting, trivia-ing, or conducting margarita research,
              Michael can be found on a golf course somewhere in Orange County,
              technically playing golf.
            </p>
          </div>

          {/* Childhood photo + then-and-now */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] relative">
              <Image
                src="/images/little-me.jpg"
                alt="Young Michael Williams, circa 1969"
                fill
                className="object-cover object-top sepia-[20%]"
              />
            </div>
            <p className="text-center text-[#888] font-sans text-sm italic">
              Circa 1969. Before the gray. Before the glasses.
              <br />The smile, however, has always been operational.
            </p>
          </div>
        </div>

        {/* Fun facts grid */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-[#1e3a5f] text-center mb-10">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="bg-white rounded-2xl p-5 text-center shadow-sm border border-[#f0e8d8] hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{f.emoji}</div>
                <div className="font-sans font-semibold text-[#1e3a5f] text-sm mb-1">{f.label}</div>
                <div className="font-sans text-[#333] text-sm font-medium">{f.value}</div>
                <div className="font-sans text-[#999] text-xs mt-1 italic">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
