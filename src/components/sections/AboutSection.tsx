import { ArrowRight } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="mx-auto grid max-w-[1210px] items-center gap-8 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-12 md:py-20 lg:gap-16" id="tentang">
      <div className="image-frame relative reveal">
        <img
          className="h-[280px] w-full object-cover sm:h-[340px]"
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=90"
          alt="Lobby Grand Aruna dengan interior hangat dan tanaman tropis"
        />
        <div className="image-caption"><span>01</span><span>Keanggunan yang terasa hangat</span></div>
      </div>
      <div className="max-w-[500px] reveal md:py-5">
        <p className="eyebrow text-[#a78652]">TENTANG GRAND ARUNA</p>
        <h2 className="section-title mt-3">Sambutan hangat, <em>kenangan indah.</em></h2>
        <p className="mt-4 text-sm leading-7 text-[#73736c]">
          Di jantung Semarang, Grand Aruna menghadirkan perpaduan sempurna antara kenyamanan modern dan keramahan khas Indonesia. Setiap sudut dirancang untuk membuat Anda merasa benar-benar berada di tempat yang tepat.
        </p>
        <a className="outline-button mt-6" href="#fasilitas">
          Kenali Kami <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}
