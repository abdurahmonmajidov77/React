import { useTranslation } from "react-i18next"
import "./style.css"
import speaker from "../../assets/Speacer (3).png"

function Header() {
    const {t, i18n} = useTranslation()
    return(
        <div className="header">
            <div className="container">
                <div className="headerTexts">
                    <span>{t("Header.1")}</span>
                    <h2>{t("Header.2")}</h2>
                    <p>{t("Header.3")}</p>
                    <span>
                        <button>{t("Header.4")}</button>
                        <h5>$249.99 <p>$249.99</p></h5>
                    </span>
                </div>
                <img src={speaker} alt="header" />
            </div>
        </div>
    )
}
export default Header