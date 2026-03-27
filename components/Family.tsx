import Image from "next/image";

const sites = [
  {
    href: "https://georgiawilliams.com",
    img: "/images/georgia-movies.jpg",
    name: "Georgia Williams",
    tagline: "His Finest Achievement",
    desc: "Chef-in-training, dog whisperer, and the reason he showed up at the movies in a Millennium Falcon shirt. Her website is objectively better than this one. He accepts this.",
    label: "Visit Georgia's Site →",
    accent: "#2a5082",
  },
  {
    href: "https://ireallyhatemary.com",
    img: "/images/stpatricks-2026.jpg",
    name: "Mary Williams",
    tagline: "His Sister. It's Complicated.",
    desc: "One of Michael's nine siblings. The subject of a whole website dedicated to her particular brand of drama. The title is affectionate. Mostly. She's at every St. Patrick's Day.",
    label: "Visit Mary's Site →",
    accent: "#c0392b",
  },
  {
    href: "https://williamsfamily.org",
    img: "/images/family-myrtle.jpg",
    name: "The Williams Family",
    tagline: "All Ten of Them",
    desc: "Robert R. Williams and his extraordinary brood — ten children, countless grandchildren, and one very active family newsletter. Reunion: July 17, 2026, Rock Hill, SC. Mark your calendar.",
    label: "Visit the Family Site →",
    accent: "#1e3a5f",
  },
];

export default function Family() {
  return (
    <section id="family" className="bg-[#1e3a5f] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c8963e] font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            The Extended Universe
          </p>
          <h2 className="font-serif text-5xl font-bold text-white mb-6">
            The Williams World
          </h2>
          <div className="w-16 h-1 bg-[#c8963e] mx-auto mb-6" />
          <p className="text-white/60 font-sans max-w-lg mx-auto">
            Michael Williams does not exist in a vacuum. He exists in a large,
            loud, deeply entertaining family. They each have their own websites.
            This is apparently a thing the Williams family does.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sites.map((site) => (
            <a
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={site.img}
                  alt={site.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-sans text-white/70 text-xs font-semibold uppercase tracking-wider">{site.tagline}</p>
                  <h3 className="font-serif text-white text-2xl font-bold">{site.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="font-sans text-white/65 text-sm leading-relaxed mb-4">{site.desc}</p>
                <span className="font-sans text-[#c8963e] text-sm font-semibold group-hover:underline">
                  {site.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
