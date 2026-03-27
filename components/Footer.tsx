export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl font-bold mb-3">Michael Williams</h2>
          <p className="font-sans text-white/40 text-sm italic">
            The correct one.
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-[#c8963e] mx-auto mb-10" />

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 font-sans text-sm text-white/50">
          <a href="#about" className="hover:text-[#c8963e] transition-colors">About</a>
          <span className="text-white/20">·</span>
          <a href="#achievements" className="hover:text-[#c8963e] transition-colors">Achievements</a>
          <span className="text-white/20">·</span>
          <a href="#gallery" className="hover:text-[#c8963e] transition-colors">Gallery</a>
          <span className="text-white/20">·</span>
          <a href="#family" className="hover:text-[#c8963e] transition-colors">Family</a>
          <span className="text-white/20">·</span>
          <a href="https://georgiawilliams.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c8963e] transition-colors">Georgia's Site</a>
          <span className="text-white/20">·</span>
          <a href="https://ireallyhatemary.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c8963e] transition-colors">Mary's Site</a>
          <span className="text-white/20">·</span>
          <a href="https://williamsfamily.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#c8963e] transition-colors">Family Site</a>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="font-sans text-white/30 text-xs">
            © {new Date().getFullYear()} Michael Williams. All rights reserved.
          </p>
          <p className="font-sans text-white/20 text-xs italic">
            No, not THAT Michael Williams. This one.
          </p>
          <p className="font-sans text-white/15 text-xs">
            Built with love, green beer, and an unreasonable number of selfies.
          </p>
        </div>
      </div>
    </footer>
  );
}
