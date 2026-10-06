import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { heroSlides } from '../../data/hotel'

function getHeroBackground(image: string) {
  return `linear-gradient(90deg, rgba(12, 18, 18, .72) 0%, rgba(12, 18, 18, .35) 48%, rgba(12, 18, 18, .12) 100%), linear-gradient(0deg, rgba(8, 14, 13, .5), transparent 45%), url('${image}')`
}

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [previousSlide, setPreviousSlide] = useState<number | null>(null)
  const slide = heroSlides[activeSlide]

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setPreviousSlide(activeSlide)
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, 4000)

    return () => window.clearInterval(slideTimer)
  }, [activeSlide])

  useEffect(() => {
    if (previousSlide === null) return

    const fadeTimer = window.setTimeout(() => setPreviousSlide(null), 900)
    return () => window.clearTimeout(fadeTimer)
  }, [previousSlide])

  function showSlide(nextSlide: number) {
    setPreviousSlide(activeSlide)
    setActiveSlide(nextSlide)
  }

  return (
    <section
      id="beranda"
      className="hero relative  isolate min-h-[680px] bg-[#15201d] text-white sm:min-h-[720px]"
    >
      {previousSlide !== null && (
        <div
          aria-hidden="true"
          className="hero-background"
          style={{ backgroundImage: getHeroBackground(heroSlides[previousSlide].image) }}
        />
      )}
      <div
        aria-hidden="true"
        className={`hero-background ${previousSlide !== null ? 'hero-background-enter' : ''}`}
        style={{ backgroundImage: getHeroBackground(slide.image) }}
      />
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
            onClick={() => showSlide(index)}
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
          onClick={() => showSlide((activeSlide + heroSlides.length - 1) % heroSlides.length)}
        >
          <ChevronLeft size={17} />
        </button>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/60 text-white transition hover:bg-white hover:text-[#18211f]"
          type="button"
          aria-label="Slide berikutnya"
          onClick={() => showSlide((activeSlide + 1) % heroSlides.length)}
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </section>
  )
}
