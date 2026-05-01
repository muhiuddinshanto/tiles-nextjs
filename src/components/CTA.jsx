
const CTA = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-8 mb-32">
      <div className="bg-[#7D2237] p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2),transparent)]"></div>
        </div>
        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-white">Let's build something significant.</h2>
          <p className="font-body-lg text-white/70">
            Our process begins with understanding the core architecture of your needs. Reach out to start the consultation.
          </p>
          <div className="pt-6">
            <button className="bg-white text-[#7D2237] px-10 py-5 font-label-lg rounded-DEFAULT hover:bg-zinc-100 transition-colors">
              START A PROJECT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
