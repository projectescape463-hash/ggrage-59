import { About } from './components/About/About'
import { Booking } from './components/Booking/Booking'
import { Contacts } from './components/Contacts/Contacts'
import { Faq } from './components/Faq/Faq'
import { Footer } from './components/Footer/Footer'
import { Gallery } from './components/Gallery/Gallery'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Process } from './components/Process/Process'
import { Services } from './components/Services/Services'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        К содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Process />
        <Gallery />
        <Faq />
        <Booking />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
