import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { heroSlides } from '../../data/hotel'

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]

  return (
    <section
      id="beranda"
      className="hero relative  isolate min-h-[680px] bg-[#15201d] text-white sm:min-h-[720px]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(12, 18, 18, .72) 0%, rgba(12, 18, 18, .35) 48%, rgba(12, 18, 18, .12) 100%), linear-gradient(0deg, rgba(8, 14, 13, .5), transparent 45%), url('${slide.image}')`,
      }}
    >
      <div className="relative pt-25 z-10 mx-auto flex min-h-[530px] max-w-[1380px] items-center px-6 pb-24 pt-10 sm:px-12 lg:min-h-[560px] lg:px-24">
        <div className="hero-copy max-w-[590px] pb-10">
          <p className="eyebrow mb-4 text-[#dfc18e]">{slide.eyebrow}</p>
          <h1 className="display-title max-w-[580px] text-[clamp(3rem,7vw,5.8rem)] leading-[.91] text-white">
            {slide.title} <em>{slide.emphasis}</em>
          </h1>
          <p className="mt-6 max-w-[390px] text-[13px] leading-6 text-white/80 sm:text-sm">
            {slide.description}
          </p>
          <a className="gold-button mt-7" href="#reservasi">
            Pesan Penginapan <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-[94px]  left-6 z-10 hidden flex-col gap-3 md:flex lg:left-12">
        {heroSlides.map((item, index) => (
          <button
            key={item.eyebrow}
            className="group flex items-center gap-3 text-left"
            type="button"
            aria-label={`Tampilkan slide ${index + 1}`}
            aria-pressed={activeSlide === index}
            onClick={() => setActiveSlide(index)}
          >
            <span className="text-[9px] tracking-[.14em] text-white/60">0{index + 1}</span>
            <span className={`h-px transition-all ${activeSlide === index ? 'w-9 bg-[#d4b274]' : 'w-5 bg-white/45 group-hover:w-8'}`} />
          </button>
        ))}
      </div>

      <div className="absolute bottom-24 right-6 z-10 flex gap-2 sm:right-10">
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/60 text-white transition hover:bg-white hover:text-[#18211f]"
          type="button"
          aria-label="Slide sebelumnya"
          onClick={() => setActiveSlide((activeSlide + heroSlides.length - 1) % heroSlides.length)}
        >
          <ChevronLeft size={17} />
        </button>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/60 text-white transition hover:bg-white hover:text-[#18211f]"
          type="button"
          aria-label="Slide berikutnya"
          onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)}
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </section>
  )
}
