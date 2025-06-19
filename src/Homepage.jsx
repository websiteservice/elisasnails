import './Homepage.css';
import PhotoCarousel from './components/PhotoCarousel';
import Header from './components/Header';
import Footer from './components/Footer';
// import vanessaImg from './assets/vanessa.jpeg';



function Homepage() {
  return (
    <>
      <Header />

      <main className="homepage-content">
        <h1 className="Heading">Elisa's Nails</h1>

        <section className="intro">
          {/* <img src={vanessaImg} className="headshotImg" alt="Vanessa" /> */}

          <div className="bio">
            <h2 className="name">Hi, I&apos;m Elisa!</h2>
            <p className="description">
              I'm a passionate nail artist based in Manukau, Auckland. I specialize in creating elegant, creative, and custom nail designs that reflect your unique style. 
              Whether you're after a classic set, something trendy, or bold nail art, I'm here to bring your nail dreams to life.
            </p>
            <p className="description">
              With a focus on quality, hygiene, and care, I ensure every appointment is a relaxing and rewarding experience. 
              I can&apos;t wait to make your nails your new favourite accessory!
            </p>
          </div>
        </section>

        <section className="carousel-section">
          <h2 className="gallery-heading">Gallery</h2>
          
          {/* <PhotoCarousel /> */}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Homepage;
