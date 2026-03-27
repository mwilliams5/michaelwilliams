import Image from "next/image";

const sections = [
  {
    title: "The Early Archive",
    subtitle: "Before the gray. Before the beard. Same energy.",
    photos: [
      {
        src: "/images/beach-2001.jpg",
        caption: "August 2001. Beach trip with the guys. The gray had not yet arrived. The smile had always been there.",
        year: "2001",
      },
      {
        src: "/images/splash-mountain.jpg",
        caption: "Disneyland, July 16, 2003. The kids were thrilled. He was managing. Everyone got wet. Memories were made.",
        year: "2003",
      },
      {
        src: "/images/family-myrtle.jpg",
        caption: "Myrtle Beach, 2004. The Williams clan descends on the Atlantic coast. He is the handsome one in the front.",
        year: "2004",
      },
      {
        src: "/images/five-and-ten.jpg",
        caption: "February 5, 2011. A milestone occasion. Good company, good porch, good times. The math is left as an exercise for the reader.",
        year: "2011",
      },
    ],
  },
  {
    title: "Father of the Year",
    subtitle: "Documented evidence of excellent parenting.",
    photos: [
      {
        src: "/images/georgia-sweatshirt.jpg",
        caption: "Matching Williams/Georgia sweatshirts. This was Georgia's idea. He was completely, one hundred percent, absolutely thrilled about it.",
        year: "~2012",
      },
      {
        src: "/images/georgia-movies.jpg",
        caption: "Star Wars night at the movies. He wore the Millennium Falcon shirt because he is teaching Georgia what matters in this world.",
        year: "~2018",
      },
      {
        src: "/images/margarita-fest.jpg",
        caption: "OC Fair Margarita Festival, 2025. Parenting looks different after 21. He calls this 'research.' Georgia seems fine with it.",
        year: "2025",
      },
      {
        src: "/images/georgia-date-night.jpg",
        caption: "February 2026. Date night. Georgia's choice of venue, obviously. He wore the fish shirt. She did not veto it.",
        year: "2026",
      },
    ],
  },
  {
    title: "The Social Calendar",
    subtitle: "A man fully committed to showing up.",
    photos: [
      {
        src: "/images/stpatricks-2025.jpg",
        caption: "St. Patrick's Day 2025. Green beer. Every year. No exceptions. He has never missed one. This is not hyperbole.",
        year: "Mar 2025",
      },
      {
        src: "/images/stpatricks-2026.jpg",
        caption: "St. Patrick's Day 2026. The family assembles. The green beer arrives. All is right with the world.",
        year: "Mar 2026",
      },
      {
        src: "/images/christmas-2021.jpg",
        caption: "Christmas 2021. He owns three Santa hats. This is the fancy one. His opinion on this is firm.",
        year: "Dec 2021",
      },
      {
        src: "/images/july4-2024.jpg",
        caption: "Fourth of July 2024. Please note the custom shirt featuring his daughter Georgia's face. He made it himself. It was his idea.",
        year: "Jul 2024",
      },
      {
        src: "/images/pool-2023.jpg",
        caption: "Pool day, August 2023. Someone has to host. He has accepted this responsibility with characteristic enthusiasm.",
        year: "Aug 2023",
      },
      {
        src: "/images/golf-2025.jpg",
        caption: "Golf, September 2025. Currently unranked by any official golf organization. The scorecard is private.",
        year: "Sep 2025",
      },
    ],
  },
  {
    title: "The Inner Circle",
    subtitle: "The therapist. The people he tolerates most.",
    photos: [
      {
        src: "/images/dog-foggy.jpg",
        caption: "Morning walk, October 2020. His therapist. Non-judgmental. Excellent listener. Significantly better at outdoor mornings than Michael is.",
        year: "Oct 2020",
      },
    ],
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#fdf9f4] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c8963e] font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            The Evidence
          </p>
          <h2 className="font-serif text-5xl font-bold text-[#1e3a5f] mb-6">
            A Life in Photos
          </h2>
          <div className="w-16 h-1 bg-[#c8963e] mx-auto" />
        </div>

        <div className="space-y-20">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="mb-8">
                <h3 className="font-serif text-3xl font-bold text-[#1e3a5f]">{section.title}</h3>
                <p className="font-sans text-[#888] italic mt-1">{section.subtitle}</p>
                <div className="w-10 h-0.5 bg-[#c8963e] mt-3" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {section.photos.map((photo) => (
                  <div key={photo.src} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <span className="font-sans text-[#c8963e] text-xs font-bold">{photo.year}</span>
                      <p className="font-sans text-[#444] text-xs leading-relaxed mt-1">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
