import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logo-header.png"
import "./Header.scss"

function Header() {
    return(
        <header className="header">
            <img src={logoHeader} alt="Logo de Kasa" />
            <nav className="navbar">
                <NavLink to="/" className="navbar__link">Accueil</NavLink>
                <NavLink to="/about" className="navbar__link">À propos</NavLink>
            </nav>
        </header>
    )
}

export default Header