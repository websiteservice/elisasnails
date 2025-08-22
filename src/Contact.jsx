import './Contact.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Elisa's Nails | Contact Us</title>
        <meta name="description" content="Get in touch with Elisa's Nails in Hamilton for professional nail services. Book your appointment or ask questions via phone or email." />
      </Helmet>
      <Header />

      <main className="contact-container">
        <Title titleName="Contact" />

        <p className="contact-subtitle">
          For bookings, availability, or questions, please get in touch via the details below.
        </p>

        <div className="contact-details">
          <p><strong>Email:</strong> elisasbusinessemail@gmail.com</p>
          {/* <p><strong>Phone:</strong> 021 </p> */}
          <p><strong>Instagram:</strong>
            <a 
              href="https://instagram.com/elisasnails" 
              target="_blank" 
              rel="noopener noreferrer"
              className="insta-link"
            >
              @elisasnails
            </a>
          </p>
          <p><strong>Location:</strong> Manukau, Auckland, NZ</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
