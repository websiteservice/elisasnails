import './Header.css'
import { Link } from 'react-router-dom'

const Header = () =>{
    return (
        <div className="navBar">

            <Link to="/" className="navBtn">Home</Link>
            <Link to="/bookings" className="navBtn">Bookings</Link>
            <Link to="/pricing" className="navBtn">Pricing</Link>
            <Link to="/location" className="navBtn">Location</Link>
            <Link to="/contact" className="navBtn">Contact Me</Link>
        </div>
    );
}

export default Header;