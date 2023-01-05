import "./style.css"
import logo from "../../assets/Logo.png"
import { useTranslation } from "react-i18next"

function Navbar() {
    const {t, i18n} = useTranslation()
    const Language = async (e) => {
        await window.localStorage.setItem("i18nextLng", e.target.value)
        window.location.reload()
    }
    function Trans() {
        return window.localStorage.getItem("i18nextLng")
    }
    console.log(Trans());
    return(
        <div className="navbar">
            <div className="container">
                <img src={logo} alt="logo" />
                <div>
                    <a href="#">{t("Navbar.0")}</a>
                    <a href="#">{t("Navbar.1")}</a>
                    <a href="#">{t("Navbar.2")}</a>
                    <a href="#">{t("Navbar.3")}</a>
                    <a href="#">{t("Navbar.4")}</a>
                    <a href="#">{t("Navbar.5")}</a>
                    {Trans() == "en" ? 
                    <select onChange={Language}>
                        <option value="en">English</option>
                        <option value="uz">Uzbek</option>
                    </select>
                    :Trans() == "uz" ?
                    <select onChange={Language}>
                        <option value="uz">Uzbek</option>
                        <option value="en">English</option>
                    </select>
                    :null
                    }
                </div>
                <span>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-user"></i>
                </span>
            </div>
        </div>
    )
}
export default Navbar