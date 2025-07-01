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
          <ServiceCard title="Natural Nail Manicure" price="$40" desc="Includes nail shaping, cuticle care & base and top coat polish application." />
          {/* <ServiceCard title="Natural Nail Gel Manicure" price="$50" desc="Long-lasting gel polish with a top coat finish." /> */}
          <ServiceCard title="Acrylic Manicure" price="Starting from $40" desc="Durable acrylic extensions. Includes one solid acrylic colour and top coat. Further pricing information below." />
          <div className="pricing-card2">
          
          <h2>Acrylic Manicure Base Pricing (Full set)</h2>

          <ul class="length-prices">
            <li><span class="label">Short</span><span class="price">$40</span></li>
            <li><span class="label">Medium</span><span class="price">$50</span></li>
            <li><span class="label">Long</span><span class="price">$60</span></li>
            <li><span class="label">Extra Long</span><span class="price">$70</span></li>
            <li><span class="label">2XL</span><span class="price">$80</span></li>
            <li><span class="label">3XL</span><span class="price">$90</span></li>
          </ul>
          <img src="src/assets/nailsImages/nailLengths.jpg" alt="Nail lengths" width="400" height="500"></img>

        </div>

        <div className="pricing-card2">
          <h2>Add-On Base (Full Set)</h2>
              <ul class="addon-prices">
                <li><span class="label">Acrylic Ombre</span><span class="price">$5</span></li>
                <li><span class="label">Marble</span><span class="price">$10</span></li>
                <li><span class="label">Glitter Acrylic</span><span class="price">$10</span></li>
                <li><span class="label">Acrylic French</span><span class="price">$15</span></li>
                <li><span class="label">Simple Acrylic Colour Blocking</span><span class="price">$15</span></li>
                <li><span class="label">Encapsulation</span><span class="price">$15</span></li>
              </ul>
        </div>
        </div>

        {/* Section: Pedicures */}
        <h2 className="section-heading">Pedicures</h2>
        <div className="pricing-cards">
          <ServiceCard title="Natural Nail Pedicure" price="$40" desc="Foot soak, exfoliation, nail care & polish." />
          {/* <ServiceCard title="Natural Nail Gel Pedicure" price="$50" desc="Long-lasting gel pedicure with care and polish." /> */}
          <ServiceCard title="Acrylic Pedicure" price="$80" desc="Durable acrylic extensions with full pedicure." />
        </div>

        {/* Section: Add-ons & Extras */}
        <h2 className="section-heading">Add-ons & Extras</h2>
        <div className="pricing-cards">
        <ServiceCard title="Acrylic Infill or Rebalance" price="$40" desc="Add acrylic to nail growth." />
          {/* <ServiceCard title="Custom Nail Art" price="Starting from $1" desc="Beautiful hand-painted designs to express yourself." /> */}
          <ServiceCard title="Removal" price="$20" desc="Acetone soak off or e-file removal." />
          <ServiceCard title="Single Nail Repair" price="$10" desc="Repair a broken or damaged nail." />
          <ServiceCard title="Acrylic Manicure Shape Change" price="$10" desc="Reshaping nail to new desired shape." />
          {/* <ServiceCard title="Gift Voucher" price="$20–$100" desc="Give the gift of beauty." /> */}
          <div className="gift-voucher-card">
            <h2>🎁 Gift Voucher</h2>
            <p className="voucher-price">$20–$100</p>
            <p>Give the gift of beauty and self-care. Available in-person or digitally, redeemable for all services.</p>
          </div>

        </div>
        <h2 className="section-heading">Nail art tiers</h2>
        <div className="pricing-cards">
        <ServiceCard title="Tier 1" price="$15" desc="Simple nail art — simple lines, dots, or minimal designs. Limited gems or decals included." />
        <ServiceCard title="Tier 2" price="$25" desc="Intermediate designs with moderate gem or foil accents." />
        <ServiceCard title="Tier 3" price="$35" desc="Advanced nail art with sculpted acrylic extensions and layered designs. More detailed patterns and embellishments." />
        <ServiceCard title="Tier 4" price="$50" desc="Luxury, high-detail custom designs. Includes 3D elements, full sets of gems, intricate hand-painted art, or themed looks." />
        </div>
        

        <div className="pricing-card">Additional Design Services (Price for Full set)

          Painted French Tips $10
          Chrome: $5
          Painted ombre: $10

        </div>

        {/* <div className="pricing-card2">
          <h3>Additional Design Services (Price for Single Nail)</h3>

          <div className="line-item">
            <span className="service-name">Chrome</span>
            <span className="price">$1</span>
          </div>
          <div className="line-item">
            <span className="service-name">Aura</span>
            <span className="price">$1</span>
          </div>
          <div className="line-item">
            <span className="service-name">French tip</span>
            <span className="price">$1</span>
          </div>
          <div className="line-item">
            <span className="service-name">Ombre</span>
            <span className="price">$1</span>
          </div>
          <div className="line-item">
            <span className="service-name">Stickers</span>
            <span className="price">$1</span>
          </div>
          <div className="line-item">
            <span className="service-name">Gems</span>
            <span className="price">$2</span>
          </div>
          <div className="line-item">
            <span className="service-name">Glitter</span>
            <span className="price">$2</span>
          </div>
          <div className="line-item">
            <span className="service-name">Animal print</span>
            <span className="price">$2</span>
          </div>
          <div className="line-item">
            <span className="service-name">Charms</span>
            <span className="price">$3</span>
          </div>
          <div className="line-item">
            <span className="service-name">Solid colour</span>
            <span className="price">$1</span>
          </div>
          <div className="line-item">
            <span className="service-name">Stamping plate design</span>
            <span className="price">$3</span>
          </div>
          <div className="line-item">
            <span className="service-name">Simple painted nail art</span>
            <div className="line-item description">Dots, lines etc.</div>
            <span className="price">$5</span>
            
          </div>
          <div className="line-item">
            <span className="service-name">Complex painted nail art</span>
            <div className="line-item description">Snowflakes, floral, butterflies</div>
            <span className="price">$10</span>
            
          </div>
          <div className="line-item">
            <span className="service-name">Small acrylic flower</span>
            <span className="price">$7</span>
          </div>
          <div className="line-item">
            <span className="service-name">Large acrylic flower</span>
            <span className="price">$10</span>
          </div>
        </div> */}

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
