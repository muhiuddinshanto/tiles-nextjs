const CTA = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-20 md:mb-32">
      
      <div className="bg-[#7D2237] p-10 md:p-20 text-center relative overflow-hidden rounded-2xl">
        
        {/* Background  */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2),transparent)]"></div>
        </div>

        <div className="relative z-10 space-y-6 md:space-y-8 max-w-2xl mx-auto">
          
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Let’s build something together!
          </h2>
          
          <p className="text-base md:text-lg text-white/80 leading-relaxed px-2">
            Our team is ready to transform your architectural vision into reality. 
            Contact us for a free consultation.
          </p>

          <div className="pt-4 md:pt-6">
           
            <button className="w-full sm:w-auto bg-white text-[#7D2237] px-10 py-4 md:py-5 font-bold uppercase tracking-widest text-xs md:text-sm rounded-md hover:bg-zinc-100 transition-all duration-300 active:scale-95">
              START A PROJECT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;