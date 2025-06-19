import './Pricing.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

function Pricing() {
  return (
    <>
      <Header />
      <Title titleName="Services" />
      <main className="pricing-container">
        <p className="pricing-subtitle">Quality nail care for every style and budget.</p>

        {/* Section: Manicures */}
        <h2 className="section-heading">Manicures</h2>
        <div className="pricing-cards">
          <ServiceCard title="Natural Nail Manicure" price="$40" desc="Includes nail shaping, cuticle care & polish application." />
          <ServiceCard title="Natural Nail Gel Manicure" price="$50" desc="Long-lasting gel polish with a top coat finish." />
          <ServiceCard title="Acrylic Manicure" price="$80" desc="Durable acrylic extensions." />
        </div>

        {/* Section: Pedicures */}
        <h2 className="section-heading">Pedicures</h2>
        <div className="pricing-cards">
          <ServiceCard title="Natural Nail Pedicure" price="$40" desc="Foot soak, exfoliation, nail care & polish." />
          <ServiceCard title="Natural Nail Gel Pedicure" price="$50" desc="Long-lasting gel pedicure with care and polish." />
          <ServiceCard title="Acrylic Pedicure" price="$80" desc="Durable acrylic extensions with full pedicure." />
        </div>

        {/* Section: Add-ons & Extras */}
        <h2 className="section-heading">Add-ons & Extras</h2>
        <div className="pricing-cards">
        <ServiceCard title="Acrylic Infill" price="$40" desc="Add acrylic to nail growth (1-3 weeks)." />
          <ServiceCard title="Custom Nail Art" price="From $15" desc="Beautiful hand-painted designs to express yourself." />
          <ServiceCard title="Removal" price="$20" desc="Acetone soak off or e-file removal." />
          <ServiceCard title="Single Nail Repair" price="$10" desc="Repair a broken or damaged nail." />
          <ServiceCard title="Gift Voucher" price="$20–$100" desc="Give the gift of beauty." />
        </div>
      </main>
      <Footer />
    </>
  );
}

// Reusable card component
function ServiceCard({ title, price, desc }) {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <p>{desc}</p>
    </div>
  );
}

export default Pricing;
