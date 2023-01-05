import { useTranslation } from 'react-i18next';
import ShopImg1 from '../../assets/Speacer (4).png'
import ShopImg2 from '../../assets/iPad.png'
import ShopImg3 from '../../assets/Drone.png'
import ShopImg4 from '../../assets/Speacer (1).png'
import ShopImg5 from '../../assets/Mac.png'
import ShopImg6 from '../../assets/iPhone.png'
import ShopImg7 from '../../assets/Headphone (1).png'
import './style.css';

function Shop() {
    const {t, i18n} = useTranslation();
    return (
        <div className="Shop">
            <h4>{t("Shop.0")}</h4>
            <h2>{t("Shop.1")}</h2>
            <p>{t("Shop.2")}</p>
            <ul>
                <li>
                    <div className="UsImg">
                    <img src={ShopImg1} alt="" />
                    </div>
                    <div className="UsImg">
                    <img src={ShopImg2} alt="" />
                    </div>
                </li>
                <li>
                    <div className="UsImg">
                    <img src={ShopImg3} alt="" />
                    </div>
                    <div className="UsImg">
                    <img src={ShopImg4} alt="" />
                    </div>
                    <div className="UsImg">
                    <img src={ShopImg5} alt="" />
                    </div>
                </li>
                <li>
                    <div className="UsImg">
                    <img src={ShopImg6} alt="" />
                    </div>
                    <div className="UsImg">
                    <img src={ShopImg7} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Shop