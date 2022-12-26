import './app.css';
import { useRef } from 'react';
import brat from './Brat.svg'
import Images from './Images.svg'
import Images1 from './Images (1).svg'

function Header() {
    const Modal = useRef();
    const Overlay = useRef();
    const ModalBtn = () => {
        Modal.current.style.display = "block"
        Overlay.current.style.display = "block"
    }
    const ModalBtnF = () => {
        Modal.current.style.display = "none"
        Overlay.current.style.display = "none"
    }
    const OverlayY = () => {
        Modal.current.style.display = "none"
        Overlay.current.style.display = "none"
    }
  return (
    <>
        <div className='Header'>
            <div className='HeaderContainer'>
                <div className='Navbar'>
                    <h3 className='NavbarTitle'>Web.Dev</h3>
                    <div className='NavbarLc'>
                        <div className='NavbarList'>
                            <h3 className='NavbarItem'>Home</h3>
                            <h3 className='NavbarItem'>About</h3>
                            <h3 className='NavbarItem'>Testimonials</h3>
                            <h3 className='NavbarItem'>Contact</h3>
                            <h3 className='NavbarItem'>Sign in</h3>
                        </div>
                        <h3 className='NavbarItem1' onClick={ModalBtn}>Sign up</h3>
                    </div>
                </div>
                <div className='div'>
                <img src={Images} alt="" />
                <div className='HeaderBox'>
                    <h1 className='HeaderTitle'>We Develop <h1>Shopify <h1 className='HeaderTitle'> sites</h1></h1></h1>
                    <p className='HeaderText'>Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. Pointed toes. Padded insole with geometrical design. </p>
                    <div className='HeaderBtnBox'>
                        <button className='HeaderBtn'>Contact Us</button>
                        <button className='HeaderBtn'>Watch Video<i className='fa-sharp fa-solid fa-caret-right'></i></button>
                    </div>
                </div>
                <img src={Images1} alt="" />
                </div>
                <div className='HeaderModal' ref={Modal}>
                    <div className="HeaderModalTop">
                        <h3 className='HeaderTopTitle'>Xodim sahifasi</h3>
                        <i className='fa-sharp fa-solid fa-pen'></i>
                        <i className='fa-sharp fa-solid fa-star'></i>
                        <i className='fa-sharp fa-solid fa-xmark' onClick={OverlayY}></i>
                    </div>
                    <div className='HeaderModalMid'>
                        <img src={brat} alt="" className='HeaderMidImg'/>
                        <p className='HeaderMidTitle'>Habibjon Kadirov</p>
                    </div>
                    <div className='HeaderModalBot'>
                        <p className='HeaderBotText'>Ismi va Familyasi</p>
                        <input type="text" name="" className='HeaderBotInt'/>
                        <p className='HeaderBotText'>Telefon</p>
                        <input type="text" name="" className='HeaderBotInt'/>
                        <p className='HeaderBotText'>Tug’ilgan kuni</p>
                        <input type="date" name="" className='HeaderBotInt'/>
                        <p className='HeaderBotText'>Jinsi</p>
                        <div className='HeaderIntBox'>
                            <input type="radio" name="Int" id=""/>
                            <p className='RadioIntText'>Erkak</p>
                            <input type="radio" name="Int" id=""/>
                            <p className='RadioIntText'>Ayol</p>
                        </div>
                        <button className='HeaderBotBtn' onClick={ModalBtnF}>Qo’ng’iroq qilish</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="Overlay" ref={Overlay} onClick={OverlayY}></div>
    </>
  );
}

export default Header;