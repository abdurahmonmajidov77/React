import { useTranslation } from 'react-i18next';
import OpaImg from '../../assets/Opa.png'
import './style.css';

function Opa() {
    const {t, i18n} = useTranslation();
    return (
        <div className="Opa">
            <img src={OpaImg} alt="" />
            <div className="OpaBox">
                <h4>{t("Opa.0")}</h4>
                <h2>{t("Opa.1")}</h2>
                <p>{t("Opa.2")}</p>
                <ul>
                    <li><i class="fa-solid fa-check"></i>{t("Opa.3")}</li>
                    <li><i class="fa-solid fa-check"></i>{t("Opa.4")}</li>
                    <li><i class="fa-solid fa-check"></i>{t("Opa.3")}</li>
                    <li><i class="fa-solid fa-check"></i>{t("Opa.5")}</li>
                    <li><i class="fa-solid fa-check"></i>{t("Opa.5")}</li>
                </ul>
            </div>
        </div>
    )
}
export default Opa