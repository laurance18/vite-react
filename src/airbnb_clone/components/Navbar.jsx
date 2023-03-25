import './Navbar.css'
import logo from '../assests/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo"/>
        </nav>
    )
}