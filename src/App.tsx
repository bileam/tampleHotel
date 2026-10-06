import { AboutSection } from './components/sections/AboutSection'
import { BookingForm } from './components/sections/BookingForm'
import { ClosingSection } from './components/sections/ClosingSection'
import { DiningSection } from './components/sections/DiningSection'
import { FacilitiesSection } from './components/sections/FacilitiesSection'
import { GallerySection } from './components/sections/GallerySection'
import { HeroSection } from './components/sections/HeroSection'
import { LocationSection } from './components/sections/LocationSection'
import { OfferSection } from './components/sections/OfferSection'
import { RoomsSection } from './components/sections/RoomsSection'
import { MobileBottomNav } from './components/layout/MobileBottomNav'
import { SiteHeader } from './components/layout/SiteHeader'
import { SiteFooter } from './components/layout/SiteFooter'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#252822] ">
      <SiteHeader />
      <HeroSection />
      <main>
        <BookingForm />
        <AboutSection />
        <RoomsSection />
        <FacilitiesSection />
        <DiningSection />
        <OfferSection />
        <GallerySection />
        <LocationSection />
        <ClosingSection />
      </main>
      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}

export default App
