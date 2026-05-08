import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Differentials } from './components/Differentials'
import { Intelligence } from './components/Intelligence'
import { TaxCalculator } from './components/TaxCalculator'
import { FAQ } from './components/FAQ'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Intelligence />
        <TaxCalculator />
        <FAQ />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
