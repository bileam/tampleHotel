import { ArrowRight } from 'lucide-react'

export function DiningSection() {
  return (
    <section id="dining" className="mx-auto grid max-w-[1210px] items-center gap-8 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-12 md:py-20 lg:gap-16">
      <div className="order-2 max-w-[500px] reveal md:order-1 md:py-5">
        <p className="eyebrow text-[#a78652]">PENGALAMAN KULINER</p>
        <h2 className="section-title mt-3">Hidangan yang <em>menyatukan.</em></h2>
        <p className="mt-4 text-sm leading-7 text-[#73736c]">
          Dari sarapan yang menenangkan hingga makan malam penuh suasana, nikmati sajian lokal dan internasional yang diracik dengan sepenuh hati.
        </p>
        <a className="outline-button mt-6" href="#lokasi">Jelajahi Restoran <ArrowRight size={14} /></a>
      </div>
      <div className="image-frame order-1 reveal md:order-2">
        <img
          className="h-[270px] w-full object-cover sm:h-[330px]"
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1300&q=90"
          alt="Suasana makan malam elegan di restoran hotel"
        />
      </div>
    </section>
  )
}
