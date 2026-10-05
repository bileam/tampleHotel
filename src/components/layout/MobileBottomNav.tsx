import { useEffect, useState } from 'react'
import { BedDouble, CalendarCheck, House, MapPin, Utensils } from 'lucide-react'

const items = [
  { href: '#beranda', label: 'Beranda', icon: House },
  { href: '#kamar', label: 'Kamar', icon: BedDouble },
  { href: '#reservasi', label: 'Pesan', icon: CalendarCheck, featured: true },
  { href: '#dining', label: 'Dining', icon: Utensils },
  { href: '#lokasi', label: 'Lokasi', icon: MapPin },
]

export function MobileBottomNav() {
  const [activeHref, setActiveHref] = useState('#beranda')

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null)
    const visibleSections = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(`#${entry.target.id}`, entry.intersectionRatio)
          } else {
            visibleSections.delete(`#${entry.target.id}`)
          }
        })

        const currentSection = [...visibleSections.entries()].sort(
          (first, second) => second[1] - first[1],
        )[0]

        if (currentSection) setActiveHref(currentSection[0])
      },
      { rootMargin: '-38% 0px -48% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="mobile-bottom-nav" aria-label="Navigasi utama seluler">
      {items.map(({ href, label, icon: Icon, featured }) => {
        const isActive = activeHref === href

        return (
          <a
            className={`mobile-bottom-item${isActive ? ' is-active' : ''}${featured ? ' is-featured' : ''}`}
            href={href}
            key={href}
            aria-current={isActive ? 'location' : undefined}
          >
            <span className="mobile-bottom-icon"><Icon size={19} strokeWidth={1.7} /></span>
            <span className="mobile-bottom-label">{label}</span>
          </a>
        )
      })}
    </nav>
  )
}
