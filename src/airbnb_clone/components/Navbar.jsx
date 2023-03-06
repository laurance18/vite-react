import './Navbar.css'
import logo from '../assests/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="w-20 pl-8 pt-6"/>
        </nav>
    )
}