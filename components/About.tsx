import Image from "next/image";

const facts = [
  { emoji: "👧", label: "Father of One", value: "Georgia Williams", sub: "His finest work" },
  { emoji: "5️⃣", label: "Child #5 of 10", value: "9 brothers & sisters", sub: "The good-looking one" },
  { emoji: "🍀", label: "St. Patrick's Day", value: "Perfect attendance", sub: "Since before you were born" },
  { emoji: "🌶️", label: "Dragon's Breath Chili", value: "Silky Sullivan's veteran", sub: "Fountain Valley, CA" },
  { emoji: "🧠", label: "The Brain Trust", value: "Trivia night regular", sub: "Boys vs. girls every holiday" },
  { emoji: "🥩", label: "The Steak Challenge", value: "Attempted. Survived.", sub: "Timer: 20:54 remaining" },
  { emoji: "🐕", label: "Rottweiler Dad", value: "Walks daily", sub: "Plural. Always plural." },
  { emoji: "🎄", label: "Santa Hat Collection", value: "Three hats", sub: "One is the 'fancy' one" },
  { emoji: "⛳", label: "Golf", value: "Beers: many. Strokes: also many.", sub: "Not necessarily in that order" },
  { emoji: "🍹", label: "The Rita 2000", value: "Inventor & Chief Taster", sub: "A certified Manvention™" },
  { emoji: "🛁", label: "Beercuzzi Day", value: "2nd Saturday in August", sub: "He invented this. You're welcome." },
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
              A proud son of Southern California, Michael is child number five of ten Williams
              siblings — a number that sounds made up but is, in fact, completely
              true. He navigated childhood with the grace of someone who understood
              early on that having nine brothers and sisters means you either
              develop a great sense of humor or you don&apos;t survive.
            </p>
            <p>
              Today, Michael is perhaps best known as the father of Georgia Williams —
              actual chef, culinary school graduate, and the reason this website
              exists in the shadow of a better one. He accepts this with dignity
              and a margarita dispensed from the Rita 2000, his greatest invention
              and a certified Manvention&trade;.
            </p>
            <p>
              When he is not competing at the Silky Sullivan&apos;s chili cookoff
              in Fountain Valley with his brothers, going out for trivia nights,
              or destroying the girls&apos; team at holiday Trivial Pursuit, Michael
              can be found on a golf course in Orange County — drinking more beers
              than he is technically playing golf, which he considers a valid strategy.
            </p>
            <p>
              He also invented Beercuzzi Day — celebrated on the second Saturday of
              August every year — which involves sitting in a jacuzzi or pool with
              friends, family, and a cold beer. He did not need anyone&apos;s permission
              for this. He simply declared it a holiday. It is now a holiday.
            </p>
          </div>

          {/* Childhood photo */}
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
