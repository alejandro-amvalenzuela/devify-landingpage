import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import TrustLogos from '../components/TrustLogos';
import Features from '../components/Features';
import Products from '../components/Products';
import CustomSoftware from '../components/CustomSoftware';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <TrustLogos />
        <Features />
        <Products />
        <CustomSoftware />
      </main>
      <Footer />
    </>
  )
}
