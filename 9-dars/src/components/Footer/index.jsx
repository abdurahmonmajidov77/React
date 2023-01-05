import { useTranslation } from 'react-i18next';
import FootImg from '../../assets/Logo(0).png'
import './style.css';

function Foot() {
    const {t, i18n} = useTranslation();
    return (
        <div className="Foot">
            <ul>
                <li>
                    <img src={FootImg} alt="" />
                    <p>{t("Foot.0")}</p>
                </li>
                <li>
                    <h4>{t("Foot.1")}</h4>
                    <a href="#">{t("Foot.2")}</a>
                    <a href="#">{t("Foot.3")}</a>
                    <a href="#">{t("Foot.4")}</a>
                    <a href="#">{t("Foot.5")}</a>
                    <a href="#">{t("Foot.6")}</a>
                    <a href="#">{t("Foot.7")}</a>
                </li>
                <li>
                    <h4>{t("Foot.8")}</h4>
                    <a href="#">{t("Foot.14")}</a>
                    <a href="#">{t("Foot.2")}</a>
                    <a href="#">{t("Foot.4")}</a>
                    <a href="#">{t("Foot.5")}</a>
                    <a href="#">{t("Foot.9")}</a>
                    <a href="#">{t("Foot.10")}</a>
                </li>
                <li>
                    <h4>{t("Foot.11")}</h4>
                    <a href="#">{t("Foot.14")}</a>
                    <a href="#">{t("Foot.2")}</a>
                    <a href="#">{t("Foot.4")}</a>
                    <a href="#">{t("Foot.5")}</a>
                    <a href="#">{t("Foot.9")}</a>
                    <a href="#">{t("Foot.10")}</a>
                </li>
                <li>
                    <h4>{t("Foot.11")}</h4>
                    <p>{t("Foot.0")}</p>
                    <a href="#">www.company.com</a>
                    <div className="FootLinkBox">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Foot;