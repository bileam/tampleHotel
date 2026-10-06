import { ArrowUpRight, AtSign, Clock3, Crown, MapPin, Phone } from 'lucide-react'
import { navItems } from '../../data/hotel'

export function SiteFooter() {
  return (
    <footer className="site-footer bg-[#111815] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto grid max-w-[1210px] gap-8 border-b border-white/10 pb-8 sm:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_1fr_1.1fr]">
        <div>
          <a className="brand inline-flex items-center gap-2.5" href="#beranda">
            <Crown className="h-7 w-7 text-[#c9a66b]" strokeWidth={1.35} />
            <span className="flex flex-col leading-none">
              <span className="brand-name">BRAND HOTEL</span>
              <span className="mt-1 text-[8px] tracking-[.25em] text-white/55">HOTEL & RESORT</span>
            </span>
          </a>
          <p className="mt-4 max-w-[230px] text-xs leading-5 text-white/55">Keramahan dan kenyamanan untuk setiap perjalanan Anda.</p>
        </div>

        <div>
          <h3 className="footer-heading">Tautan</h3>
          <div className="mt-4 flex flex-col gap-2.5 text-xs text-white/60">
            {navItems.slice(1, 5).map((item) => (
              <a className="transition hover:text-[#dfc18e]" href={item.href} key={item.href}>{item.label}</a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-heading">Hubungi Kami</h3>
          <div className="mt-4 flex flex-col gap-3 text-xs text-white/60">
            <a className="flex items-center gap-2.5 hover:text-white" href="tel:+62243555088"><Phone size={13} /> +62 24 3555 088</a>
            <a className="flex items-center gap-2.5 hover:text-white" href="mailto:hello@grandaruna.id"><MapPin size={13} /> Semarang, Indonesia</a>
            <span className="flex items-center gap-2.5"><Clock3 size={13} /> Resepsionis 24 jam</span>
          </div>
        </div>

        <div>
          <h3 className="footer-heading">Ikuti Cerita Kami</h3>
          <p className="mt-4 text-xs leading-5 text-white/55">Momen istimewa dari Brand Hotel, langsung di linimasa Anda.</p>
          <a className="mt-4 inline-flex items-center gap-2 text-xs text-[#d5b273] hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer"><AtSign size={14} /> @grandarunahotel <ArrowUpRight size={12} /></a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1210px] flex-wrap items-center justify-between gap-3 pt-5 text-[10px] text-white/40">
        <span>© 2025 Brand Hotel Hotel</span>
        <div className="flex gap-5"><a className="hover:text-white" href="#beranda">Kebijakan Privasi</a><a className="hover:text-white" href="#beranda">Syarat & Ketentuan</a></div>
      </div>
    </footer>
  )
}
