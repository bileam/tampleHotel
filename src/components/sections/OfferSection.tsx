import { ArrowRight } from 'lucide-react'

export function OfferSection() {
  return (
    <section className="offer-banner relative isolate flex min-h-[300px] items-center px-6 py-12 text-white sm:px-12 md:min-h-[360px] lg:px-24">
      <div className="relative z-10 mx-auto w-full max-w-[1210px] reveal">
        <p className="eyebrow text-[#dfc18e]">PENAWARAN SPESIAL</p>
        <h2 className="display-title mt-3 max-w-[500px] text-4xl leading-[1.05] sm:text-5xl">Tinggal lebih lama, <em>hemat lebih banyak.</em></h2>
        <p className="mt-4 max-w-[380px] text-sm leading-6 text-white/75">Nikmati keuntungan eksklusif saat Anda memesan langsung bersama kami.</p>
        <a className="gold-button mt-6" href="#reservasi">Lihat Penawaran <ArrowRight size={14} /></a>
      </div>
    </section>
  )
}
