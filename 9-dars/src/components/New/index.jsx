import { useTranslation } from 'react-i18next';
import './style.css';
import NewImg1 from '../../assets/Mouse.png'
import NewImg2 from '../../assets/Speacer (2).png'
import NewImg3 from '../../assets/Keyboard.png'
import NewImg4 from '../../assets/Mac (1).png'
import NewImg5 from '../../assets/Headphone.png'
import NewImg6 from '../../assets/Speacer.png'

function New() {
    const {t, i18n} = useTranslation();
    return (
        <div className="New">
            <h4>{t("New.0")}</h4>
            <h2>{t("New.1")}</h2>
            <div className="NewNav">
                <p>{t("New.2")}</p>
                <p>{t("New.3")}</p>
                <p>{t("New.4")}</p>
                <p>{t("New.5")}</p>
            </div>
            <ul>
                <li>
                    <p>{t("New.6")}</p>
                    <img src={NewImg1} alt="" />
                    <h3>{t("New.9")}</h3>
                    <h5>$ 249.99<p>/$ 249.99</p></h5>
                    <h5 className='Rate'>★★★★★</h5>
                </li>
                <li>
                    <p>{t("New.7")}</p>
                    <img src={NewImg2} alt="" />
                    <h3>{t("New.10")}</h3>
                    <h5>$ 249.99<p>/$ 249.99</p></h5>
                    <h5 className='Rate'>★★★★★</h5>
                </li>
                <li>
                    <p>{t("New.8")}</p>
                    <img src={NewImg3} alt="" />
                    <h3>{t("New.11")}</h3>
                    <h5>$ 249.99<p>/$ 249.99</p></h5>
                    <h5 className='Rate'>★★★★★</h5>
                </li>
                <li>
                    <p>{t("New.8")}</p>
                    <img src={NewImg4} alt="" />
                    <h3>{t("New.12")}</h3>
                    <h5>$ 249.99<p>/$ 249.99</p></h5>
                    <h5 className='Rate'>★★★★★</h5>
                </li>
                <li>
                    <p>{t("New.8")}</p>
                    <img src={NewImg5} alt="" />
                    <h3>{t("New.13")}</h3>
                    <h5>$ 249.99<p>/$ 249.99</p></h5>
                    <h5 className='Rate'>★★★★★</h5>
                </li>
                <li>
                    <p>{t("New.6")}</p>
                    <img src={NewImg6} alt="" />
                    <h3>{t("New.14")}</h3>
                    <h5>$ 249.99<p>/$ 249.99</p></h5>
                    <h5 className='Rate'>★★★★★</h5>
                </li>
            </ul>
            <a href="#">{t("New.14")} -></a>
        </div>
    )
}
export default New