import { useTranslation } from 'react-i18next';
import DroneImg1 from '../../assets/Drone(1).png'
import DroneImg2 from '../../assets/Camera.png'
import './style.css';

function Drone() {
    const {t, i18n} = useTranslation();
    return (
        <div className="Drone">
            <div className="DroneBox">
                <div className="DroneTexts">
                <p>{t("Dron.0")}</p>
                <h3>{t("Dron.2")}</h3>
                <button>{t("Dron.4")}</button>
                </div>
                <img src={DroneImg1} alt="" />
            </div>
            <div className="DroneBox">
                <div className="DroneTexts">
                <p>{t("Dron.1")}</p>
                <h3>{t("Dron.3")}</h3>
                <button>{t("Dron.4")}</button>
                </div>
                <img src={DroneImg2} alt="" />
            </div>
        </div>
    )
}
export default Drone