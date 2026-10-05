import { useState } from 'react'
import { ArrowRight, Crown, Menu, X } from 'lucide-react'
import { navItems } from '../../data/hotel'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="hero-header relative z-20 mx-auto flex max-w-[1380px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
      <a className="brand flex items-center gap-2.5" href="#beranda" aria-label="Grand Aruna, beranda">
        <Crown className="h-7 w-7 text-[#c9a66b]" strokeWidth={1.35} />
        <span className="flex flex-col leading-none">
          <span className="brand-name">GRAND ARUNA</span>
          <span className="mt-1 text-[8px] tracking-[.25em] text-white/65">HOTEL & RESORT</span>
        </span>
      </a>

      <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
        {navItems.map((item) => (
          <a
            key={item.href}
            className="nav-link text-[11px] font-medium tracking-wide text-white/85 transition-colors hover:text-[#e0bd80]"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="gold-button hidden lg:inline-flex" href="#reservasi">
        Pesan Sekarang <ArrowRight size={14} />
      </a>

      <button
        className="grid h-10 w-10 place-items-center border border-white/25 text-white lg:hidden"
        type="button"
        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={19} /> : <Menu size={19} />}
      </button>

      {menuOpen && (
        <nav className="mobile-menu absolute inset-x-4 top-[76px] z-30 flex flex-col bg-[#17211e] p-3 shadow-2xl lg:hidden" aria-label="Navigasi seluler">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="border-b border-white/10 px-4 py-3 text-sm text-white/85 last:border-0"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="gold-button mt-3 justify-center" href="#reservasi" onClick={() => setMenuOpen(false)}>
            Pesan Sekarang <ArrowRight size={14} />
          </a>
        </nav>
      )}
    </header>
  )
}
