import { useState, type FormEvent } from 'react'
import { ArrowRight, CalendarDays, Check } from 'lucide-react'
import { dateOffset } from '../../utils/dateOffset'

export function BookingForm() {
  const [bookingMessage, setBookingMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const checkIn = formData.get('checkin')
    const checkOut = formData.get('checkout')
    const adults = formData.get('adults')
    const children = formData.get('children')

    setBookingMessage(
      `Pencarian siap untuk ${adults} dewasa dan ${children} anak, ${checkIn} sampai ${checkOut}.`,
    )
  }

  return (
    <section id="reservasi" className="relative z-20 mx-auto -mt-8 max-w-[1210px] px-4 sm:px-8">
      <form className="booking-panel reveal grid gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-[1fr_1fr_.78fr_.78fr_1.2fr] lg:items-end lg:gap-5 lg:px-7 lg:py-5" onSubmit={handleSubmit}>
        <label className="booking-field" htmlFor="checkin">
          <span className="booking-label">Check in</span>
          <span className="booking-input-wrap">
            <CalendarDays size={17} />
            <input id="checkin" name="checkin" type="date" min={dateOffset(0)} defaultValue={dateOffset(1)} required />
          </span>
        </label>
        <label className="booking-field" htmlFor="checkout">
          <span className="booking-label">Check out</span>
          <span className="booking-input-wrap">
            <CalendarDays size={17} />
            <input id="checkout" name="checkout" type="date" min={dateOffset(1)} defaultValue={dateOffset(3)} required />
          </span>
        </label>
        <label className="booking-field" htmlFor="adults">
          <span className="booking-label">Dewasa</span>
          <span className="booking-input-wrap">
            <span className="guest-icon">01</span>
            <select id="adults" name="adults" defaultValue="2">
              <option value="1">1 dewasa</option>
              <option value="2">2 dewasa</option>
              <option value="3">3 dewasa</option>
              <option value="4">4 dewasa</option>
            </select>
          </span>
        </label>
        <label className="booking-field" htmlFor="children">
          <span className="booking-label">Anak</span>
          <span className="booking-input-wrap">
            <span className="guest-icon">00</span>
            <select id="children" name="children" defaultValue="0">
              <option value="0">Tanpa anak</option>
              <option value="1">1 anak</option>
              <option value="2">2 anak</option>
              <option value="3">3 anak</option>
            </select>
          </span>
        </label>
        <button className="gold-button h-[48px] justify-center lg:w-full" type="submit">
          Cek Ketersediaan <ArrowRight size={15} />
        </button>
      </form>
      {bookingMessage && (
        <p className="booking-message" aria-live="polite">
          <Check size={15} /> {bookingMessage}
        </p>
      )}
    </section>
  )
}
