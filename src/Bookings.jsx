import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import './Bookings.css';

function Bookings() {
  return (
    <>
      <Header />
      <main className="bookings-container">
        <Title titleName="Bookings" />
        <iframe 
        src="https://elisasnails.simplybook.me/v2/" 
        width="100%" 
        height="600px" 
        frameborder="0">
      </iframe>

        <div className='intro'>
          <section className="booking-info">
            <h3>How to Book</h3>
            {/* <p>
              To schedule an appointment, please contact me via Instagram DM 
              <a href="https://instagram.com/vanessamercedes_nails" target="_blank" rel="noopener noreferrer">
                @vanessamercedes_nails
              </a>, or send an email to <a href="mailto:vanessa@nails.com">vanessa@nails.com</a>.
            </p> */}
            <p>Appointments are confirmed once a deposit is received.</p>

            <h3>Appointment Preparation</h3>

            <p>Please arrive with clean hands and nails. Remove gel or acrylic nails if applicable before appointment.</p>

            <p>If you have any nail art ideas or inspiration, bring along your photos to the appointment.</p>
            <p>If you have specific nail decorations or colour polish you want to use from home, bring them along to the appointment. (Note no discounts will be applied)</p>

            {/* <h3>Payment Methods</h3>
            <p>Payment via cash only.</p> */}
            <h3>Booking Policies</h3>
            <br></br>

            <h4>Cancellation Policy</h4>
            <p>
              Please provide at least 24 hours notice for cancellations. Cancellations made less than 24 hours in advance will incur a 50% cancellation fee.
            </p>

            <h4>Rescheduling</h4>
            <p>
              Rescheduling is allowed up to 48 hours before your appointment without penalty. After that, rescheduling will be treated as a late cancellation.
            </p>

            <h4>Late Fees</h4>
            <p>
              If you arrive more than 15 minutes late, your appointment may be shortened or rescheduled, and a late fee of $20 may apply.
            </p>

            <h4>No-Show Policy</h4>
            <p>
              No-shows will be charged 100% of the booked service price. Please respect appointment times to avoid fees.
            </p>

            <h4>Public Holiday Fees</h4>
            <p>
              Appointments booked on public holidays will incur a 20% surcharge.
            </p>

            <h4>Deposit</h4>
            <p>
              A $10 deposit is required to secure your booking. This deposit will be deducted from your final payment.
            </p>

            <h4>Premises</h4>
            <p>
              No smoking or vaping inside of outside nearby the property.
            </p>

            <div id="centered">
              <h3>Thank you!</h3>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Bookings;
