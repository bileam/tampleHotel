import { Dumbbell, Sparkles, Utensils, Waves } from 'lucide-react'

export const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Kamar', href: '#kamar' },
  { label: 'Fasilitas', href: '#fasilitas' },
  { label: 'Dining', href: '#dining' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Lokasi', href: '#lokasi' },
]

export const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=90',
    eyebrow: 'SELAMAT DATANG DI GRAND ARUNA',
    title: 'Ruang untuk',
    emphasis: 'beristirahat.',
    description:
      'Temukan kenyamanan, ketenangan, dan keramahan yang terasa seperti rumah.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=90',
    eyebrow: 'PENGALAMAN MENGINAP YANG BERBEDA',
    title: 'Waktu indah,',
    emphasis: 'lebih bermakna.',
    description:
      'Nikmati momen istimewa dengan pelayanan hangat di jantung kota Semarang.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=90',
    eyebrow: 'LIBURAN DIMULAI DI SINI',
    title: 'Tempat sempurna untuk',
    emphasis: 'melepas penat.',
    description:
      'Dari pagi yang tenang hingga malam penuh cerita, semua terasa istimewa.',
  },
]

export const rooms = [
  {
    name: 'Deluxe Room',
    price: '1.200.000',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1100&q=85',
    size: '32 m²',
    detail: 'Pemandangan kota',
  },
  {
    name: 'Executive Room',
    price: '1.800.000',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1100&q=85',
    size: '42 m²',
    detail: 'King bed',
  },
  {
    name: 'Grand Suite',
    price: '2.600.000',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1100&q=85',
    size: '58 m²',
    detail: 'Ruang keluarga',
  },
]

export const amenities = [
  { icon: Waves, title: 'Kolam Renang', detail: 'Segarkan hari Anda' },
  { icon: Utensils, title: 'Restoran', detail: 'Cita rasa istimewa' },
  { icon: Dumbbell, title: 'Pusat Kebugaran', detail: 'Tetap aktif dan sehat' },
  { icon: Sparkles, title: 'Ruang Pertemuan', detail: 'Momen penting Anda' },
]

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85',
    alt: 'Kolam renang dengan pemandangan hotel',
  },
  {
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85',
    alt: 'Kamar tidur dengan jendela besar',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85',
    alt: 'Hidangan di restoran Grand Aruna',
  },
  {
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85',
    alt: 'Suasana hotel saat matahari terbenam',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    alt: 'Interior suite yang hangat dan nyaman',
  },
]

export type GalleryPhoto = (typeof gallery)[number]
