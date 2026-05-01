import Image from "next/image";



const ProtfolioTiles = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-[#7D2237] font-label-lg uppercase tracking-[0.2em] block mb-4">Curated Works</span>
            <h2 className="font-headline-lg text-on-surface">Selected Case Studies</h2>
          </div>
          <a href="#" className="font-label-lg border-b border-on-surface pb-1 hover:text-[#7D2237] hover:border-primary transition-colors">
            Browse Archive
          </a>
        </div>

        <div className="grid grid-cols-12 gap-gutter">
          {/* Project 1 */}
          <div className="col-span-12 lg:col-span-8 mb-12">
            <div className="group relative overflow-hidden bg-zinc-100 aspect-[16/9]">
              <Image
                src='/images/Project1.jpg'
                width={800}
                height={400}
                alt="Big House"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 bg-white p-8 border border-zinc-200 max-w-sm">
                <span className="font-label-sm text-[#7D2237] uppercase tracking-widest mb-2 block">Fintech Excellence</span>
                <h4 className="font-headline-md text-on-surface mb-2">Nexus Alpha Dashboard</h4>
                <p className="font-body-md text-zinc-400">A complete digital overhaul for a tier-one financial institution.</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-span-12 lg:col-span-4 self-center mb-12">
            <div className="group relative overflow-hidden bg-zinc-100 aspect-[4/5]">
              <Image 
                src="/images/Project2.jpg" 
                alt="Temporis Identity" 
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                <div>
                  <h4 className="font-headline-md text-white mb-2">Temporis Identity</h4>
                  <p className="font-body-md text-white/80">Digital craftsmanship for luxury watchmakers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-span-12 lg:col-span-5 mb-12">
            <div className="group relative overflow-hidden bg-zinc-100 aspect-[1/1]">
              <Image 
                src="/images/Project3.jpg" 
                alt="Vortex Interactive" 
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="mt-6">
                <span className="font-label-sm text-[#7D2237] uppercase tracking-widest mb-2 block">Immersive Web</span>
                <h4 className="font-headline-md text-on-surface">Vortex Interactive</h4>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-span-12 lg:col-span-7 mb-12">
            <div className="group relative overflow-hidden bg-zinc-100 aspect-[16/9]">
              <Image 
                src="/images/Project4.jpg" 
                alt="Elysian Group Global" 
                width={700}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-8 right-8 bg-[#7D2237] text-white p-6 rounded-DEFAULT">
                <p className="font-label-lg">AWARD WINNING</p>
              </div>
              <div className="mt-6">
                <span className="font-label-sm text-[#7D2237] uppercase tracking-widest mb-2 block">Corporate Identity</span>
                <h4 className="font-headline-md text-on-surface">Elysian Group Global</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtfolioTiles;
