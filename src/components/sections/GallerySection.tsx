import { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { gallery, type GalleryPhoto } from '../../data/hotel'

export function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null)

  return (
    <>
      <section id="galeri" className="bg-[#f7f5f0]  px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-[1210px]">
          <div className="flex flex-wrap items-end justify-between gap-4 reveal">
            <div>
              <p className="eyebrow text-[#a78652]">POTRET BRAND HOTEL</p>
              <h2 className="section-title mt-2">Momen yang berkesan</h2>
            </div>
            <span className="hidden items-center gap-2 text-[10px] uppercase tracking-[.16em] text-[#77766f] sm:flex">Geser untuk melihat <ArrowRight size={13} /></span>
          </div>
          <div className="gallery-grid mt-7">
            {gallery.map((photo, index) => (
              <button
                className={`gallery-photo gallery-photo-${index + 1} group relative reveal overflow-hidden text-left`}
                key={photo.src}
                type="button"
                style={{ transitionDelay: `${index * 70}ms` }}
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`Perbesar foto: ${photo.alt}`}
              >
                <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={photo.src} alt={photo.alt} loading="lazy" />
                <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedPhoto.alt} onClick={() => setSelectedPhoto(null)}>
          <button className="lightbox-close z-50" type="button" aria-label="Tutup foto" onClick={() => setSelectedPhoto(null)}><X size={22} /></button>
          <img src={selectedPhoto.src} alt={selectedPhoto.alt} onClick={(event) => event.stopPropagation()} />
          <p>{selectedPhoto.alt}</p>
        </div>
      )}
    </>
  )
}
