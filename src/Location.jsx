import Header from './components/Header'
import Footer from './components/Footer'
import Title from './components/Title';
import { Helmet } from 'react-helmet';

function Location() {
    return(
        <>
            <Helmet>
                <title>Elisa's Nails | Contact Us</title>
                <meta name="description" content="Visit Elisa's Nails in Hamilton. Find our salon’s address, opening hours, and get directions to enjoy professional nail services." />
            </Helmet>
            <Header />
            <Title titleName="Location"/>
            <Footer />
        </>
    );
}

export default Location;