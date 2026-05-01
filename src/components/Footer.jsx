

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 w-full py-20 mt-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-8">
        <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-display">ARCHETYPE</div>
        
        <div className="flex gap-10">
          <a href="#" className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-display text-sm uppercase tracking-widest">
            Privacy Policy
          </a>
          <a href="#" className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-display text-sm uppercase tracking-widest">
            Terms of Service
          </a>
          <a href="#" className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-display text-sm uppercase tracking-widest">
            LinkedIn
          </a>
          <a href="#" className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-display text-sm uppercase tracking-widest">
            Instagram
          </a>
        </div>

        <p className="text-zinc-500 dark:text-zinc-400 font-display text-sm uppercase tracking-widest">
          © 2024 Archetype Digital. Precision in Craft.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
