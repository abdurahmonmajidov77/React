import { useTranslation } from 'react-i18next';
import './style.css';

function Us() {
    const {t, i18n} = useTranslation();
    return (
        <div className="Us">
            <div className="UsBox">
                <h4>{t("Us.0")}</h4>
                <h2>{t("Us.1")}</h2>
                <p>{t("Us.2")}</p>
            </div>
            <div className="UsBox1">
                <input type="text" placeholder={t("Us.3")} />
                <button>{t("Us.4")}</button>
            </div>
        </div>
    )
}
export default Us