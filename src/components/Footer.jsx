const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 w-full py-12 lg:py-20 mt-20 lg:mt-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col items-center text-center md:text-left md:flex-row md:justify-between md:items-center gap-10">
        
        {/* LOGO */}
        <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100 font-display tracking-tighter">
          ARCHETYPE
        </div>
        
        {/* LINKS - Mobile এ ২ কলাম বা ফ্লেক্স র‍্যাপ হবে */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-10">
          <a href="#" className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-display text-xs sm:text-sm uppercase tracking-widest">
            Privacy Policy
          </a>
          <a href="#" className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-display text-xs sm:text-sm uppercase tracking-widest">
            Terms of Service
          </a>
          <a href="#" className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-display text-xs sm:text-sm uppercase tracking-widest">
            LinkedIn
          </a>
          <a href="#" className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-display text-xs sm:text-sm uppercase tracking-widest">
            Instagram
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-zinc-500 dark:text-zinc-400 font-display text-[10px] sm:text-sm uppercase tracking-widest leading-relaxed">
          © 2026 Archetype Digital. <br className="md:hidden" /> Precision in Craft.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;