import logoFooter from "../../assets/logo-footer.png"
import "./Footer.scss"

function Footer() {
    return(
        <footer className="footer">
            <img src={logoFooter} alt="Logo de Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer