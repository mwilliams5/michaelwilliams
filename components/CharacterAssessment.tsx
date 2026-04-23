const badIdeas = [
  {
    num: 1,
    text: "Sporting bad mustaches — real and fake. There is no in-between.",
  },
  {
    num: 2,
    text: "Wearing matching clothes with his brothers, including — and especially — bad Hawaiian shirts.",
  },
  {
    num: 3,
    text: 'Wearing bad hats. HAT. You know what that means. Just look at the photos.',
  },
  {
    num: 4,
    text: "Stealing salt & pepper shakers from restaurants. And allegedly, one lamp.",
  },
  {
    num: 5,
    text: 'Putting hot sauce in his sisters\' purses at bars, then yelling "Security" or "Gold Team Swarm" into his wrist as they leave. His sisters personally hate this one.',
  },
];

const goodIdeas = [
  {
    num: 1,
    text: "FEED a cold AND feed a fever — because food makes everything better and we should never starve anything.",
  },
  {
    num: 2,
    text: "Everything tastes better with bacon. Especially Bloody Marys.",
  },
  {
    num: 3,
    text: "Live sports games in the middle of the workweek are ALWAYS more fun.",
  },
  {
    num: 4,
    text: "Margaritas are best served in a 5-gallon Igloo cooler. He calls it the Rita 2000.",
  },
  {
    num: 5,
    text: "Taking control of the jukebox at a bar from your phone and picking bad songs while other people are standing next to it — IS funny.",
  },
  {
    num: 6,
    text: "We can NEVER have too many tacos.",
  },
  {
    num: 7,
    text: "Ordering food not on the menu so the restaurant will start serving it is GENIUS. Sliders and bringing back turtle pie at Silky's — verified.",
  },
  {
    num: 8,
    text: "Ordering multiple appetizers from the left side of the menu and sharing is WAY better than a single entrée.",
  },
  {
    num: 9,
    text: 'Waiting for everyone else to order so you can say "Me too" to whatever someone else picked. Also very smart.',
  },
  {
    num: 10,
    text: "ALL drinks taste better served with an umbrella.",
  },
];

export default function CharacterAssessment() {
  return (
    <section id="assessment" className="bg-[#fdf9f4] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c8963e] font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Filed by a Sister
          </p>
          <h2 className="font-serif text-5xl font-bold text-[#1e3a5f] mb-6">
            The Official Character Assessment
          </h2>
          <div className="w-16 h-1 bg-[#c8963e] mx-auto mb-6" />
          <p className="text-[#666] font-sans max-w-xl mx-auto italic">
            The following is a sworn statement submitted by a sibling with firsthand,
            decades-long experience. It has been lightly edited for the public record.
            She is a giver like that.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Bad Ideas */}
          <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🚩</span>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1e3a5f]">
                  Questionable Decisions
                </h3>
                <p className="font-sans text-red-500 text-xs font-semibold uppercase tracking-wider">
                  5 Documented Counts
                </p>
              </div>
            </div>
            <ol className="space-y-4">
              {badIdeas.map((item) => (
                <li key={item.num} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-200 text-red-700 font-sans font-bold text-sm flex items-center justify-center mt-0.5">
                    {item.num}
                  </span>
                  <p className="font-sans text-[#444] text-sm leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Good Ideas */}
          <div className="bg-green-50 border-2 border-green-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">✅</span>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1e3a5f]">
                  Certified Genius Moves
                </h3>
                <p className="font-sans text-green-600 text-xs font-semibold uppercase tracking-wider">
                  10 Verified Instances
                </p>
              </div>
            </div>
            <ol className="space-y-4">
              {goodIdeas.map((item) => (
                <li key={item.num} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-200 text-green-700 font-sans font-bold text-sm flex items-center justify-center mt-0.5">
                    {item.num}
                  </span>
                  <p className="font-sans text-[#444] text-sm leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Closing statement */}
        <div className="bg-[#1e3a5f] rounded-2xl p-8 md:p-12 text-center">
          <div className="text-4xl mb-4">💛</div>
          <blockquote className="font-serif text-white text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-6">
            &ldquo;You are a Good Time&hellip; just ask you. Life would not be the same without you.
            Thank you for making every moment so memorable and fun, and for making my life
            better just by being in it.&rdquo;
          </blockquote>
          <p className="font-sans text-[#c8963e] text-sm font-semibold uppercase tracking-widest">
            — His Sister (Not Mary)
          </p>
        </div>
      </div>
    </section>
  );
}
