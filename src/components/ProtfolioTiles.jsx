import Image from "next/image";

const ProtfolioTiles = () => {
  return (
    <section className="py-16 lg:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20 gap-4">
          <div>
            <span className="text-[#7D2237] font-bold uppercase tracking-[0.2em] block mb-2 sm:mb-4 text-xs sm:text-sm">
              Curated Works
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 leading-tight">
              Selected Case Studies
            </h2>
          </div>
          <a href="#" className="text-sm font-bold border-b-2 border-zinc-900 pb-1 hover:text-[#7D2237] hover:border-[#7D2237] transition-all">
            Browse Archive
          </a>
        </div>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-8">
          
          {/* Project 1 - 8 Columns on Desktop */}
          <div className="col-span-12 lg:col-span-8">
            <div className="group relative overflow-hidden bg-zinc-100 aspect-square sm:aspect-video lg:aspect-[16/9]">
              <Image
                src='/images/Project1.jpg'
                width={800}
                height={450}
                alt="Nexus Alpha Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Box - Hidden on very small screens, or repositioned */}
              <div className="hidden sm:block absolute bottom-6 left-6 lg:bottom-8 lg:left-8 bg-white p-6 lg:p-8 border border-zinc-200 max-w-xs lg:max-w-sm shadow-xl">
                <span className="text-[10px] lg:text-xs font-bold text-[#7D2237] uppercase tracking-widest mb-2 block">Fintech Excellence</span>
                <h4 className="text-xl lg:text-2xl font-bold text-zinc-900 mb-2">Nexus Alpha Dashboard</h4>
                <p className="text-sm text-zinc-500">A complete digital overhaul for a tier-one financial institution.</p>
              </div>
            </div>
            {/* Mobile View Content (Shown only on extra small screens) */}
            <div className="sm:hidden mt-4">
               <span className="text-[10px] font-bold text-[#7D2237] uppercase tracking-widest mb-1 block">Fintech Excellence</span>
               <h4 className="text-xl font-bold text-zinc-900 mb-1">Nexus Alpha Dashboard</h4>
               <p className="text-sm text-zinc-500">Digital overhaul for a tier-one financial institution.</p>
            </div>
          </div>

          {/* Project 2 - 4 Columns on Desktop */}
          <div className="col-span-12 lg:col-span-4 flex items-center">
            <div className="group relative overflow-hidden bg-zinc-100 aspect-square sm:aspect-[4/5] w-full">
              <Image 
                src="/images/Project2.jpg" 
                alt="Temporis Identity" 
                width={400}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#7D2237]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">Temporis Identity</h4>
                  <p className="text-sm text-white/80">Digital craftsmanship for luxury watchmakers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - 5 Columns on Desktop */}
          <div className="col-span-12 lg:col-span-5">
            <div className="group relative overflow-hidden bg-zinc-100 aspect-square">
              <Image 
                src="/images/Project3.jpg" 
                alt="Vortex Interactive" 
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 sm:mt-6">
              <span className="text-[10px] lg:text-xs font-bold text-[#7D2237] uppercase tracking-widest mb-1 lg:mb-2 block">Immersive Web</span>
              <h4 className="text-xl lg:text-2xl font-bold text-zinc-900">Vortex Interactive</h4>
            </div>
          </div>

          {/* Project 4 - 7 Columns on Desktop */}
          <div className="col-span-12 lg:col-span-7">
            <div className="group relative overflow-hidden bg-zinc-100 aspect-square sm:aspect-video lg:aspect-[16/9]">
              <Image 
                src="/images/Project4.jpg" 
                alt="Elysian Group Global" 
                width={700}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-[#7D2237] text-white px-3 py-1 lg:px-6 lg:py-3 text-[10px] lg:text-xs font-bold tracking-tighter sm:tracking-normal">
                AWARD WINNING
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <span className="text-[10px] lg:text-xs font-bold text-[#7D2237] uppercase tracking-widest mb-1 lg:mb-2 block">Corporate Identity</span>
              <h4 className="text-xl lg:text-2xl font-bold text-zinc-900">Elysian Group Global</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProtfolioTiles;