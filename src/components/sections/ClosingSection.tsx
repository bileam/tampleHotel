import { ArrowRight } from 'lucide-react'

export function ClosingSection() {
  return (
    <section className="closing-banner relative isolate px-5 py-12 text-center text-white sm:py-14">
      <div className="relative z-10 reveal">
        <p className="eyebrow text-[#dfc18e]">PENGALAMAN TERBAIK DIMULAI DI SINI</p>
        <h2 className="mt-2 font-serif text-2xl sm:text-3xl">Pesan langsung, nikmati penawaran terbaik.</h2>
        <a className="gold-button mx-auto mt-5" href="#reservasi">Pesan Sekarang <ArrowRight size={14} /></a>
      </div>
    </section>
  )
}
