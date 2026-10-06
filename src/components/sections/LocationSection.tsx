import { ArrowUpRight, MapPin } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="lokasi" className="mx-auto grid max-w-[1210px] gap-5 px-5 pb-16 sm:px-8 md:grid-cols-[.9fr_1fr_1.25fr] md:pb-20">
      <div className="map-frame reveal min-h-[220px] overflow-hidden">
        <iframe
          title="Peta lokasi Brand Hotel Hotel di Semarang"
          src="https://www.openstreetmap.org/export/embed.html?bbox=110.405%2C-7.005%2C110.455%2C-6.955&layer=mapnik&marker=-6.98%2C110.43"
          loading="lazy"
        />
      </div>
      <div className="location-card reveal flex flex-col justify-center px-7 py-7">
        <p className="eyebrow text-[#a78652]">TEMUKAN KAMI</p>
        <h2 className="mt-3 font-serif text-2xl text-[#292c27]">Brand Hotel</h2>
        <p className="mt-2 text-xs leading-5 text-[#77766f]">Jl. Gajah Mada No. 88, Semarang Tengah, Jawa Tengah 50134</p>
        <a className="outline-button mt-5" href="https://maps.google.com/?q=Semarang" target="_blank" rel="noreferrer">Petunjuk Arah <ArrowUpRight size={13} /></a>
      </div>
      <div className="location-photo reveal relative min-h-[220px] overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1100&q=85" alt="Tampak luar hotel pada malam hari" loading="lazy" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span className="absolute bottom-5 left-5 flex items-center gap-2 text-xs tracking-wide text-white"><MapPin size={15} className="text-[#e0bd80]" /> Semarang, Indonesia</span>
      </div>
    </section>
  )
}
