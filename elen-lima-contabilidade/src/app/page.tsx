import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Services from '@/components/Services'
import CalculadoraCLTPJ from '@/components/CalculadoraCLTPJ'
import GuiasNicho from '@/components/GuiasNicho'
import LeadMagnet from '@/components/LeadMagnet'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import InstagramButton from '@/components/InstagramButton'

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <SocialProof />
        <Services />
        <CalculadoraCLTPJ />
        <GuiasNicho />
        <LeadMagnet />
        <Contact />
      </main>

      <Footer />

      {/* Widgets flutuantes */}
      <WhatsAppButton />
      <InstagramButton />
      <CookieBanner />
    </>
  )
}
