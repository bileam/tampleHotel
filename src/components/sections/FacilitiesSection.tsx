import { amenities } from '../../data/hotel'

export function FacilitiesSection() {
  return (
    <section id="fasilitas" className="amenities-section relative isolate px-5 py-16 text-white sm:px-8 md:py-20">
      <div className="relative z-10 mx-auto max-w-[1210px]">
        <div className="section-heading reveal text-center">
          <p className="eyebrow text-[#d6b477]">DIRANCANG UNTUK ANDA</p>
          <h2 className="section-title mt-2 text-white">Lebih dari sekadar menginap</h2>
          <p className="mt-2 text-sm text-white/65">Semua yang Anda butuhkan, dalam satu tempat.</p>
        </div>
        <div className="mt-11 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-8">
          {amenities.map(({ icon: Icon, title, detail }, index) => (
            <div className="amenity-item reveal text-center" key={title} style={{ transitionDelay: `${index * 90}ms` }}>
              <Icon className="mx-auto text-[#d5b273]" size={28} strokeWidth={1.4} />
              <h3 className="mt-4 font-serif text-xl">{title}</h3>
              <p className="mt-1 text-xs text-white/60">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
