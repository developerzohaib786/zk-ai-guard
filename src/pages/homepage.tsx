import Hero from '@/components/hero'
import FeaturesSection from '@/components/hero-second'
import Tokenization from '@/components/Tokenization'
import FAQSection from '@/components/faqs'
import UseCases from '@/components/use-cases'
import StackedCards from '@/components/StackedCards'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/footer'

const homepage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <FeaturesSection />
    <StackedCards />
    <UseCases />
    <Tokenization />
    <FAQSection />
    <FooterSection />
    
    </>
  )
}

export default homepage