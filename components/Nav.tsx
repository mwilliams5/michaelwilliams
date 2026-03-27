export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e3a5f]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-serif text-white text-xl font-semibold tracking-tight">
          Michael Williams
          <span className="text-[#c8963e] text-sm font-sans font-normal ml-2">.org</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-sans text-white/80">
          <a href="#about" className="hover:text-[#c8963e] transition-colors">About</a>
          <a href="#achievements" className="hover:text-[#c8963e] transition-colors">Achievements</a>
          <a href="#gallery" className="hover:text-[#c8963e] transition-colors">Gallery</a>
          <a href="#family" className="hover:text-[#c8963e] transition-colors">Family</a>
        </div>
      </div>
    </nav>
  );
}
