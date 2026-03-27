import Image from "next/image";

const awards = [
  {
    img: "/images/steak-challenge.jpg",
    title: "The Steak Challenge Certificate of Participation",
    subtitle: "Big Texan Steak Ranch, circa 2007",
    desc: "72 oz. Time limit: 60 minutes. Time remaining on clock: 20:54. Result: Did not finish. Dignity: Fully intact. He enjoyed the rest of it at a normal human pace and has zero regrets.",
    badge: "🥩",
    color: "bg-red-50 border-red-200",
    badgeBg: "bg-red-100 text-red-700",
  },
  {
    img: "/images/chili-cookoff.jpg",
    title: "Team Rambo Chili Cookoff Medal of Honor",
    subtitle: "Silky Sullivan's, Austin, TX — Multiple Seasons",
    desc: "Representing Team Rambo with an apron that is absolutely not ironic. Has competed in the annual chili cookoff with the intensity of someone who has a lot to prove and a beer in one hand. Results: competitive.",
    badge: "🌶️",
    color: "bg-orange-50 border-orange-200",
    badgeBg: "bg-orange-100 text-orange-700",
  },
  {
    img: "/images/trivia-kings.jpg",
    title: "Trivia Night Royalty (Self-Certified)",
    subtitle: "Various establishments, ongoing",
    desc: "The team name was his idea. The crown was implied. He and his crew have dominated trivia nights with the confidence of people who are pretty sure they're right and the grace to admit when they weren't.",
    badge: "🏆",
    color: "bg-yellow-50 border-yellow-200",
    badgeBg: "bg-yellow-100 text-yellow-700",
  },
  {
    img: "/images/birthday-mustache.jpg",
    title: "Method Acting Excellence Award",
    subtitle: "31st Birthday, Angesl Bar Somewhere",
    desc: "In a bold creative choice, Michael arrived at his birthday celebration with a novelty mustache and a Coors Light hat, wearing an Angels GOAT jersey. The disguise fooled precisely zero people. He considers this a triumph.",
    badge: "🥸",
    color: "bg-blue-50 border-blue-200",
    badgeBg: "bg-blue-100 text-blue-700",
  },
  {
    img: "/images/stpatricks-2026.jpg",
    title: "Green Beer Perfect Attendance Record",
    subtitle: "St. Patrick's Day — Every. Single. Year.",
    desc: "There is no evidence Michael has ever missed a St. Patrick's Day. There is extensive photographic evidence he has celebrated it. The green beer is non-negotiable. The family shows up for him.",
    badge: "🍀",
    color: "bg-green-50 border-green-200",
    badgeBg: "bg-green-100 text-green-700",
  },
  {
    img: "/images/golf-2025.jpg",
    title: "Golf: A Work in Progress",
    subtitle: "Various Orange County courses, 2025–present",
    desc: "Currently unranked on the world golf circuit but trending in the right direction. Shows up with good shoes, good friends, and the correct attitude. The scorecard is between him and God.",
    badge: "⛳",
    color: "bg-teal-50 border-teal-200",
    badgeBg: "bg-teal-100 text-teal-700",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#f5ecd7] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c8963e] font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            A Distinguished Career
          </p>
          <h2 className="font-serif text-5xl font-bold text-[#1e3a5f] mb-6">
            Achievements &amp; Honors
          </h2>
          <div className="w-16 h-1 bg-[#c8963e] mx-auto mb-6" />
          <p className="text-[#666] font-sans max-w-xl mx-auto">
            A curated collection of Michael Williams&apos; most distinguished accomplishments,
            presented here with the gravity they deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((a) => (
            <div
              key={a.title}
              className={`rounded-2xl border-2 ${a.color} overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`${a.badgeBg} text-2xl w-10 h-10 rounded-full flex items-center justify-center shadow`}>
                    {a.badge}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-[#1e3a5f] font-bold text-lg leading-tight mb-1">
                  {a.title}
                </h3>
                <p className="font-sans text-[#c8963e] text-xs font-semibold uppercase tracking-wider mb-3">
                  {a.subtitle}
                </p>
                <p className="font-sans text-[#555] text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
