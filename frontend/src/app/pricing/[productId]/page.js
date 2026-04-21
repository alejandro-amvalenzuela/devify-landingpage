import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PricingView from '../../../components/PricingView';
import AutomationDetails from '../../../components/AutomationDetails';
import productsData from '../../../data/products.json';

export default function PricingPage({ params }) {
  const product = productsData.find(p => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '6rem', minHeight: 'calc(100vh - 80px)' }} className="bg-secondary">
        <PricingView product={product} />
        {product.id === 'automatizacion' && <AutomationDetails />}
      </main>
      <Footer />
    </>
  );
}
