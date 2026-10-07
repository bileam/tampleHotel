import { ArrowRight, BedDouble } from 'lucide-react'
import { rooms } from '../../data/hotel'

export function RoomsSection() {
  return (
    <section id="kamar" className="bg-[#efede7] lg:h-screen px-5 py-16 sm:px-8 md:py-20">
      <div className="mx-auto max-w-[1210px]">
        <div className="section-heading reveal text-center">
          <p className="eyebrow text-[#a78652]">ISTIRAHAT DENGAN GAYA</p>
          <h2 className="section-title mt-2">Kamar & Suite</h2>
          <p className="mt-2 text-sm text-[#77766f]">Temukan ruang yang pas untuk cerita Anda.</p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3 md:gap-6">
          {rooms.map((room, index) => (
            <article className="room-card group reveal" key={room.name} style={{ transitionDelay: `${index * 100}ms` }}>
              <a className="block overflow-hidden" href="#reservasi" aria-label={`Pesan ${room.name}`}>
                <img className="h-[210px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[225px]" src={room.image} alt={room.name} />
              </a>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="room-title">{room.name}</h3>
                    <p className="mt-1 text-[11px] text-[#77766f]">Mulai dari Rp {room.price} / malam</p>
                  </div>
                  <BedDouble className="mt-1 shrink-0 text-[#aa8958]" size={19} strokeWidth={1.5} />
                </div>
                <div className="room-meta mt-4 flex items-center gap-5 border-t border-[#e8e4da] pt-3 text-[10px] text-[#77766f]">
                  <span>{room.size}</span><span>{room.detail}</span><span>2 tamu</span>
                </div>
                <a className="outline-button mt-4" href="#reservasi">Lihat Kamar <ArrowRight size={13} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
