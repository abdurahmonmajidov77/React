import Logo from "./assets/image/logo.png";
import img13 from "./assets/image/image13.png";
import img35 from "./assets/image/image 35.png";
import img36 from "./assets/image/image 36.png";
import img37 from "./assets/image/image 37.png";
import img38 from "./assets/image/image 38.png";
import img39 from "./assets/image/image 39.png";
import img1 from "./assets/image/image 1.png";
import img2 from "./assets/image/image 2.png";
import img3 from "./assets/image/image 3.png";
import img4 from "./assets/image/image 4.png";
import img5 from "./assets/image/image 5.png";
import img6 from "./assets/image/image 6.png";
import imgStar from "./assets/image/star.png";
import img17 from "./assets/image/image 17.png";
import img16 from "./assets/image/image 16.png";
import img18 from "./assets/image/image 18.png";
import img19 from "./assets/image/image 19.png";
import img20 from "./assets/image/image 20.png";
import img21 from "./assets/image/image 21.png";
import img22 from "./assets/image/image 22.png";
import img23 from "./assets/image/image 23.png";
import img24 from "./assets/image/image 24.png";
import img25 from "./assets/image/image 25.png";
import img26 from "./assets/image/image 26.png";
import img27 from "./assets/image/image 27.png";
import img28 from "./assets/image/image 28.png";
import img29 from "./assets/image/image 29.png";
import img30 from "./assets/image/image 30.png";
import img31 from "./assets/image/image 31.png";
import img32 from "./assets/image/image 32.png";
import img33 from "./assets/image/image 33.png";
import img12 from "./assets/image/image 12.png";
import img14 from "./assets/image/image 14.png";
import img15 from "./assets/image/image 15.png";
import img42 from "./assets/image/image 42.png";
import img45 from "./assets/image/image 45.png";
import './App.css';
import { useState } from "react";

function App() {
    const [count, setCount] = useState(53)
    const [count1, setCount1] = useState(53)
    const [count2, setCount2] = useState(53)
    const [count3, setCount3] = useState(53)
    const [count4, setCount4] = useState(53)
    const [count5, setCount5] = useState(58)
    const [count6, setCount6] = useState(58)
    const [count7, setCount7] = useState(58)
    const [count8, setCount8] = useState(58)
    const [count9, setCount9] = useState(58)
    return (
        <>
        <div className="Container">
            <div className="Overflow"></div>
            <div className="Header">
                <div className="Navbar">
                    <div className="NavbarTop">
                        <img src={Logo} alt="" className="NavbarLogoImg"/>
                        <div className="TopBox"><i class="fa-shrap fa-solid fa-location-dot"></i>Москва</div>
                        <div className="TopBox1">
                            <h4 className='tel'>8 495 018-32-10</h4>
                            <div className='TopInbox'><i class="fa-shrap fa-solid fa-chevron-down"></i></div>
                            <p>Заказать звонок</p>
                        </div>
                        <div className="NavbarBox">
                            <h4 className="NavbarLink">Оплата</h4>
                            <h4 className="NavbarLink">Доставка</h4>
                            <h4 className="NavbarLink">Поставщикам</h4>
                            <h4 className="NavbarLink">Статьи</h4>
                            <h4 className="NavbarLink">Контакты</h4>
                        </div>
                    </div>
                    <div className="NavbarDown">
                        <h2 className="NavbarLog"><i class="fa-solid fa-bars"></i>КАТАЛОГ ТОВАРОВ</h2>
                        <h2 className="NavbarLog">АКЦИИ</h2>
                        <h2 className="NavbarLog">БРЕНДЫ</h2>
                        <div className="IntBox">
                            <input type="text" placeholder="Что вы ищете?"/><i class="fa-shrap fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="LogoBox">
                            <h2 className="NavbarLog1"><i class="fa-solid fa-user"></i></h2>
                            <h2 className="NavbarLog1"><i class="fa-regular fa-heart"></i></h2>
                            <h2 className="NavbarLog1"><i class="fa-sharp fa-solid fa-cart-shopping"></i></h2>
                        </div>
                    </div>
                </div>
                <div className="HeaderBox">
                    <div className="BigBoxTr">
                        <div className="BigBoxInto">
                            <i class="fa-shrap fa-solid fa-chevron-left"></i>
                            <img src={img13} alt="" className="BigBoxImg"/> 
                            <div className="BigBoxTexts">
                                <h1 className="BigBoxTitle">СМЕСИТЕЛИ RAIBER</h1>
                                <h3 className="BigBoxText">уже в наличии</h3>
                                <button>ПОДРОБНЕЕ</button>
                            </div>
                            <i class="fa-shrap fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="SmBoxBx">
                            <div className="SmBoxTr">
                                <img src={img13} alt="" className="SmBoxImg"/> 
                                <div>
                                    <h2 className="SmBoxTitle">УНИТАЗЫ ДО 10.000 ₽</h2>
                                    <button className="SmBoxBnt">ПОДРОБНЕЕ</button>
                                </div>
                            </div>
                            <div className="SmBoxTr">
                                <img src={img13}  alt="" className="SmBoxImg"/> 
                                <div>    
                                    <h2 className="SmBoxTitle">ТОВАРЫ СО СКИДКОЙ</h2>
                                    <button className="SmBoxBnt">ПОДРОБНЕЕ</button>
                                </div>
                            </div>
                        </div>
                        <div className="CircleBox">
                            <div className="Circle"></div>
                            <div className="Circle"></div>
                            <div className="Circle"></div>
                            <div className="Circle"></div>
                            <div className="Circle"></div>
                        </div>
                    </div>
                </div>
                <div className="HeaderInfoList">
                    <div className="HeaderInfoItem"><i class="fa-solid fa-truck-fast"></i>Быстрая доставка по Москве и в любой регион России</div>
                    <div className="HeaderInfoItem"><i class="fa-sharp fa-solid fa-shield"></i>Все товары имеют официальную гарантию производителя</div>
                    <div className="HeaderInfoItem"><i class="fa-sharp fa-solid fa-truck-ramp-box"></i>Более 100 000 товаров</div>
                    <div className="HeaderInfoItem"><i class="fa-sharp fa-solid fa-ruble-sign"></i>Любой способ оплаты</div>
                    <div className="HeaderInfoItem"><i class="fa-sharp fa-solid fa-thumbs-up"></i>Высокие оценки клиентов</div>
                </div>
            </div>
            <div className="SectionHeader">
                <h1 className="SecTitle">Коллекции плитки</h1>
                <div className="ImgBox">
                    <div className="ImgTr">
                        <img src={img35} alt="" className="ImgBxBig"/>
                        <div className="ImgTitleBox ImgTitleBox1">
                            <div className="ImgTitle">Сияние</div>
                            <p className="ImgText">Kerama Marazzi</p>
                        </div>
                    </div>
                    <div className="ImgInbox">
                        <div className="ImgInboxBx">
                            <div className="ImgTr">
                                <img src={img36} alt="" className="ImgBxMid"/>
                                <div className="ImgTitleBox ImgTitleBox2">
                                    <div className="ImgTitle">Вестанвинд</div>
                                    <p className="ImgText">LB-Ceramics</p>
                                </div>
                            </div>
                            <div className="ImgTr">
                                <img src={img37} alt="" className="ImgBxSm"/>
                                <div className="ImgTitleBox ImgTitleBox3">
                                    <div className="ImgTitle">Rotterdam</div>
                                    <p className="ImgText">Gracia Ceramica</p>
                                </div>
                            </div>
                        </div>
                        <div className="ImgInboxBx">
                            <div className="ImgTr">
                                <img src={img39} alt="" className="ImgBxSm"/>
                                <div className="ImgTitleBox ImgTitleBox4">
                                    <div className="ImgTitle">Rane</div>
                                    <p className="ImgText">Alma Ceramica</p>
                                </div>
                            </div>
                            <div className="ImgTr">
                                <img src={img38} alt="" className="ImgBxMid"/>
                                <div className="ImgTitleBox ImgTitleBox5">
                                    <div className="ImgTitle">Гинардо</div>
                                    <p className="ImgText">Kerama Marazzi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SectionSc">
                <h1 className="ScTitle">Хиты продаж</h1>
                <div className="ScNavbar">
                    <button className="ScBtn">Любые товары</button>
                    <button className="ScNavBtn">Раковины</button>
                    <button className="ScNavBtn">Ванны</button>
                    <button className="ScNavBtn">Унитазы</button>
                    <button className="ScNavBtn">Душевые системы</button>
                    <button className="ScNavBtn">Смесители</button>
                    <button className="ScNavBtn">Зеркала</button>
                    <button className="ScNavBtn">Душевые кабины</button>
                    <button className="ScNavBtn">Стиральные машины</button>
                </div>
                <div className="ScList">
                    <i id="I" class="fa-shrap fa-solid fa-chevron-left"></i>
                    <div className="ScItem">
                        <img src={img2} className="ScItemImg"/>
                        <img src={imgStar} className="ScItemStar"/>
                        <p className="ScItemTitle">Раковина Roca Debba 32799400Y, 60x48 см</p>
                        <p className="ScItemText">Испания</p>
                        <div className="ScCostBox">
                            <h3 className="ScCost">2.601 ₽</h3>
                            <button className="ScListbtn">В КОРЗИНУ</button>
                        </div>
                    </div>
                    <div className="ScItem">
                        <img src={img3} alt="" className="ScItemImg"/>
                        <img src={imgStar} alt="" className="ScItemStar"/>
                        <p className="ScItemTitle">Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB</p>
                        <p className="ScItemText">Германия</p>
                        <div className="ScCostBox">
                            <div>
                                <h3 className="ScCost">26.990 ₽</h3>
                                <h3 className="ScCost1">28.601 ₽</h3>
                            </div>
                            <button className="ScListbtn">В КОРЗИНУ</button>
                        </div>
                    </div>
                    <div className="ScItem">
                        <img src={img4} alt="" className="ScItemImg"/>
                        <img src={imgStar} alt="" className="ScItemStar"/>
                        <p className="ScItemTitle">Душевая система Raiber R0808, хром</p>
                        <p className="ScItemText">Германия</p>
                        <div className="ScCostBox">
                            <h3 className="ScCost">12.207 ₽</h3>
                            <button className="ScListbtn">В КОРЗИНУ</button>
                        </div>
                    </div>
                    <div className="ScItem">
                        <img src={img5} alt="" className="ScItemImg"/>
                        <img src={imgStar} alt="" className="ScItemStar"/>
                        <p className="ScItemTitle">Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт</p>
                        <p className="ScItemText">Испания</p>
                        <div className="ScCostBox">
                            <h3 className="ScCost">14.764 ₽</h3>
                            <button className="ScListbtn">В КОРЗИНУ</button>
                        </div>
                    </div>
                    <div className="ScItem">
                        <img src={img6} alt="" className="ScItemImg"/>
                        <img src={imgStar} alt="" className="ScItemStar"/>
                        <p className="ScItemTitle">Полотенцесушитель электрический Laris Кватро П7 40 x 60 см, 85 Вт, со...</p>
                        <p className="ScItemText">Россия, Украина</p>
                        <div className="ScCostBox">
                            <h3 className="ScCost">12.730 ₽</h3>
                            <button className="ScListbtn">В КОРЗИНУ</button>
                        </div>
                    </div>
                    <i id="I" class="fa-shrap fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className="SectionScc">
                <div>
                <h1 className="SccTitle">Акции</h1>
                <div className="ScNavbar">
                    <button className="ScBtn">Любые товары</button>
                    <button className="ScNavBtn">Смесители</button>
                    <button className="ScNavBtn">Полотенцесушители</button>
                    <button className="ScNavBtn">Биде</button>
                    <button className="ScNavBtn">Душевые системы</button>
                    <button className="ScNavBtn">Ванны</button>
                    <button className="ScNavBtn">Унитазы</button>
                    <button className="ScNavBtn">Отопители</button>
                    <button className="ScNavBtn">Посудомоечные машины</button>
                </div>
                <div className="ScList">
                    <i id="I" class="fa-shrap fa-solid fa-chevron-left"></i>
                    <div className="ScItem">
                        <img src={img1} className="ScItemImg"/>
                        <img src={imgStar} className="ScItemStar"/>
                        <p className="ScItemTitle">Раковина Laufen Palace 120 см 8.1170.4.000.104.1</p>
                        <p className="ScItemText">Швейцария</p>
                        <div className="ScCostBox">
                        <button className="SccCostN" onClick={() => {
                                setCount9(count9 => count9 + 58)
                                setCount(count => count + 53)
                            }}>+</button>
                            <h3 className="ScCost">{count}₽</h3>
                            <button className="SccCostN" onClick={() => {
                                setCount9(count9 => count9 - 58)
                                setCount(count => count - 53)
                            }}>-</button>
                        </div>
                        <h3 className="ScCost1">{count9}₽</h3>
                    </div>
                    <div className="ScItem">
                        <img src={img1} className="ScItemImg"/>
                        <img src={imgStar} className="ScItemStar"/>
                        <p className="ScItemTitle">Раковина Laufen Palace 120 см 8.1170.4.000.104.1</p>
                        <p className="ScItemText">Швейцария</p>
                        <div className="ScCostBox">
                        <button className="SccCostN" onClick={() => {
                                setCount5(count5 => count5 + 58)
                                setCount1(count1 => count1 + 53)
                            }}>+</button>
                            <h3 className="ScCost">{count1}₽</h3>
                            <button className="SccCostN" onClick={() => {
                                setCount5(count5 => count5 - 58)
                                setCount1(count1 => count1 - 53)
                            }}>-</button>
                        </div>
                        <h3 className="ScCost1">{count5}₽</h3>
                    </div><div className="ScItem">
                        <img src={img1} className="ScItemImg"/>
                        <img src={imgStar} className="ScItemStar"/>
                        <p className="ScItemTitle">Раковина Laufen Palace 120 см 8.1170.4.000.104.1</p>
                        <p className="ScItemText">Швейцария</p>
                        <div className="ScCostBox">
                        <button className="SccCostN" onClick={() => {
                                setCount6(count6 => count6 + 58)
                                setCount2(count2 => count2 + 53)
                            }}>+</button>
                            <h3 className="ScCost">{count2}₽</h3>
                            <button className="SccCostN" onClick={() => {
                                setCount6(count6 => count6 - 58)
                                setCount2(count2 => count2 - 53)
                            }}>-</button>
                        </div>
                        <h3 className="ScCost1">{count6}₽</h3>
                    </div><div className="ScItem">
                        <img src={img1} className="ScItemImg"/>
                        <img src={imgStar} className="ScItemStar"/>
                        <p className="ScItemTitle">Раковина Laufen Palace 120 см 8.1170.4.000.104.1</p>
                        <p className="ScItemText">Швейцария</p>
                        <div className="ScCostBox">
                        <button className="SccCostN" onClick={() => {
                                setCount3(count3 => count3 + 53)
                                setCount7(count7 => count7 + 58)
                            }}>+</button>
                            <h3 className="ScCost">{count3}₽</h3>
                            <button className="SccCostN" onClick={() => {
                                setCount3(count3 => count3 - 53)
                                setCount7(count7 => count7 - 58)
                            }}>-</button>
                        </div>
                        <h3 className="ScCost1">{count7}₽</h3>
                    </div><div className="ScItem">
                        <img src={img1} className="ScItemImg"/>
                        <img src={imgStar} className="ScItemStar"/>
                        <p className="ScItemTitle">Раковина Laufen Palace 120 см 8.1170.4.000.104.1</p>
                        <p className="ScItemText">Швейцария</p>
                        <div className="ScCostBox">
                            <button className="SccCostN" onClick={() => {
                                setCount4(count4 => count4 + 53)
                                setCount8(count8 => count8 + 58)
                            }}>+</button>
                            <h3 className="ScCost">{count4}₽</h3>
                            <button className="SccCostN" onClick={() => {
                                setCount4(count4 => count4 - 53)
                                setCount8(count8 => count8 - 58)
                            }}>-</button>
                        </div>
                        <h3 className="ScCost1">{count8}₽</h3>
                    </div>
                    <i id="I" class="fa-shrap fa-solid fa-chevron-right"></i>
                </div>
                </div>
            </div>
            <div className="SectionBtn">
                <button className="SectionBtnBt">ЕЩЕ ОДИН БАННЕР</button>
            </div>
            <div className="SecBlend">
                <div>
                <h1 className="BlendTitle">Популярные бренды</h1>
                <div className="BlendList">
                    <div className="BlendItem">
                        <img src={img17} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img16} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img18} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img19} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img20} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img21} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img22} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img23} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img24} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img25} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img26} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img27} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img28} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img29} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img30} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img31} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img32} alt="" className="BlendImg"/>
                    </div>
                    <div className="BlendItem">
                        <img src={img33} alt="" className="BlendImg"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="SecSat">
                <div>
                    <h1 className="SatTitle">Статьи</h1>
                    <div className="SatList">
                        <i id="I" class="fa-shrap fa-solid fa-chevron-left"></i> 
                        <div className="SatItem">
                            <img className="SatImg" alt="" src={img12}/>
                            <h3 className="SatTitle1">Актуальные и необычные аксессуары для ванной комнаты </h3>
                        </div>
                        <div className="SatItem">
                            <img className="SatImg" alt="" src={img13}/>
                            <h3 className="SatTitle1">Какой температуры должна быть горячая вода? </h3>
                        </div>
                        <div className="SatItem">
                            <img className="SatImg" alt="" src={img14}/>
                            <h3 className="SatTitle1">Конденсат на бачке унитаза: причины появления и способы устранения </h3>
                        </div>
                        <div className="SatItem">
                            <img className="SatImg" alt="" src={img15}/>
                            <h3 className="SatTitle1">Анаэробный герметик для резьбовых соединений </h3>
                        </div>
                        <i id="I" class="fa-shrap fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="SatBookList">
                        <h1 className="BookTitle">Блок SEO-текста про магазин</h1>
                        <div className="SetBookItem">
                            <img alt="" src={img42} className="BookImg"/>
                            <p className="BookText">GG Promarket — крупный ритейлер сантехнического оборудования, плитки и аксессуаров. Мы нацелены на то, чтобы сделать процесс выбора и покупки сантехники максимально простым и интуитивно понятным. При создании и обновлении сайта santehnika-online.ru мы продумали логичную структуру каталога, организовали систему поиска, снабдили карточки товаров подробными описаниями и характеристиками. Выбирать оборудование в нашем магазине легко даже тем, кто впервые имеет дело с сантехникой. А уточнить детали и получить информацию о совместимости товаров круглосуточно помогут опытные консультанты нашего контакт-центра. С нами вы полюбите выбирать!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SecBot">
                <div>
                    <div className="BotList">
                        <div className="BotItem">
                            <p className="BotLink">Плитка</p>
                            <p className="BotLink">Сантехника</p>
                            <p className="BotLink">Мебель для ванной</p>
                            <p className="BotLink">Электроника и бытовая техника</p>
                            <p className="BotLink">Отопление</p>
                            <p className="BotLink">Напольное покрытие</p>
                            <img className="BotImg1" alt="" src={Logo}/>
                            <p className="BotLogoText">© 2020 ggpromarket.ru</p>
                        </div>
                        <div className="BotItem">
                            <p className="BotLink">Оплата</p>
                            <p className="BotLink">Доставка</p>
                            <p className="BotLink">Поставщикам</p>
                            <p className="BotLink">Статьи</p>
                            <p className="BotLink">Контакты</p>
                        </div>
                        <div className="BotItem">
                            <h4 className="BotTitle">8 495 018-32-10</h4>
                            <button className="BotBtn">ЗАКАЗАТЬ ЗВОНОК</button>
                            <p className="BotText">Пн-Пт: 10:00 — 20:00</p>
                            <p className="BotText">Сб: 10:00 — 18:00</p>
                            <p className="BotText">Вс: выходной</p>
                            <div className="FaList">
                            <i className="fa-sharp fa-solid fa-phone"></i>
                            <i className="fa-sharp fa-solid fa-camera"></i>
                            <i className="fa-sharp fa-solid fa-paper-plane"></i>
                            </div>
                        </div>
                        <div className="BotItem">
                            <p className="BotText">Склад:</p>
                            <p className="BotText">Москва, ул. Салтыковская, 6 стр 11</p>
                            <p className="BotLink">zakaz@ggpromarket.ru</p>
                            <img className="BotImg2" alt="" src={img45}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SecBet">
                <div>
                    <p className="BetText1">Копирование всех составляющих частей сайта в какой бы то ни было форме без письменного разрешения владельцев авторских прав запрещено. Сайт носит исключительно информационный характер, и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437(2) Гражданского кодекса Российской Федерации.Наличие и цены уточняйте у наших операторов.</p>
                    <p className="BetText2">Сайт использует технологию cookie. Используя сайт, Вы соглашаетесь с правилами использования cookie, а также даете согласие на обработку персональных данных</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default App