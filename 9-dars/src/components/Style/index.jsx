import "./style.css"
import speak1 from "../../assets/Speacer (2).png"
import speak2 from "../../assets/Headphone.png"
import { useTranslation } from "react-i18next"

function Style() {
    const [t, i18n] = useTranslation()
    return(
        <div className="style">
            <div className="container">
                <div className="speaks">
                    <div className="speak">
                        <img src={speak1} alt="speaker" />
                        <div className="speakTexts">
                            <h4>{t("Style.0")}</h4>
                            <p>{t("Style.1")}</p>
                            <span>$249.99 /<p>249.99$</p></span>
                            <span>
                                <i>★</i>
                                <i>★</i>
                                <i>★</i>
                                <i>★</i>
                                <i>★</i>
                            </span>
                        </div>
                    </div>
                    <div className="speak">
                        <img src={speak2} alt="speaker" />
                        <div className="speakTexts">
                            <h4>{t("Style.0")}</h4>
                            <p>{t("Style.1")}</p>
                            <span>$249.99 /<p>249.99$</p></span>
                            <span>
                                <i>★</i>
                                <i>★</i>
                                <i>★</i>
                                <i>★</i>
                                <i>★</i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Style