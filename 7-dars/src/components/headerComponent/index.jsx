import Grouped from "../../common/Search";
import Logo from '../../assetes/Logo.png'
import L1 from '../../assetes/Furniture 1.png'
import L2 from '../../assetes/Container (2).png'
import L3 from '../../assetes/Container.png'
import L4 from '../../assetes/Container (8).png'
import L5 from '../../assetes/Vector.png'
import L6 from '../../assetes/001---Present.png'
import L7 from '../../assetes/Vector (1).png'
import L8 from '../../assetes/Vector (2).png'
import {useEffect, useRef} from 'react'
import axios from "axios"
import './app.css';

function Header() {
    const Bobl1 = useRef();
    const Bobl2 = useRef();
    const Bobl3 = useRef();
    const Bobl4 = useRef();
    const [photo , setPhoto] = ([])
    useEffect(() => {
        axios.get("http://localhost:8000/Photos").then((resp) => {
            resp.data.map(e => {
                setPhoto(e)
            })
        })
    }, [photo])
    const Bob = (e) => {
        Bobl1.current.style.padding = "10px"
        Bobl1.current.style.background = "rgba(122, 199, 81, 0.29)"
        Bobl2.current.style.padding = "10px"
        Bobl2.current.style.background = "rgba(122, 199, 81, 0.29)"
        Bobl3.current.style.padding = "10px"
        Bobl3.current.style.background = "rgba(122, 199, 81, 0.29)"
        Bobl4.current.style.padding = "10px"
        Bobl4.current.style.background = "rgba(122, 199, 81, 0.29)"
        if(e.target.value == Bobl1.current.value){
            Bobl1.current.style.padding = "10px 20px"
            Bobl1.current.style.background = "#7AC751"
        }
        if(e.target.value == Bobl2.current.value){
            Bobl2.current.style.padding = "10px 20px"
            Bobl2.current.style.background = "#7AC751"
        }
        if(e.target.value == Bobl3.current.value){
            Bobl3.current.style.padding = "10px 20px"
            Bobl3.current.style.background = "#7AC751"
        }
        if(e.target.value == Bobl4.current.value){
            Bobl4.current.style.padding = "10px 20px"
            Bobl4.current.style.background = "#7AC751"
        }
    }
    return (
        <>
            <div className="Header">
                <div className="Navbar">
                    <div className="NavTop">
                        <h2>Welcome to our online shop</h2>
                        <div className="navTopList">
                            <p className="NavTopText">English (USD) ^</p>
                            <p className="NavTopText">|</p>
                            <p className="NavTopText">Login or Sign up</p>
                        </div>
                    </div>
                    <div className="NavMid">
                        <img src={Logo} alt="" />
                        <div className="IntBox">
                            <Grouped/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="IconBox">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <i className="fa-solid fa-bell"></i>
                        <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div className="HeaderBox">
                        <div className="HeaderSidebar">
                            <h2 className="SidTitle">ALL COLLECTIONS</h2>
                            <p className="SidLink">All</p>
                            <p className="SidLink">New Arrivals</p>
                            <p className="SidLink">Hot Sale</p>
                            <p className="SidLink">Furniture</p>
                            <p className="SidLink">Amrature</p>
                            <p className="SidLink">Table</p>
                            <p className="SidLink">Chair</p>
                            <p className="SidLink">Sofa</p>
                            <p className="SidLink">Mirrors</p>
                            <p className="SidLink">Stools</p>
                            <p className="SidLink">Benches</p>
                        </div>
                        <div className="HeaderInbox">
                            <div className="HeaderINav">
                                <h2 className="HeaderIText">Home</h2>
                                <h2 className="HeaderIText">Shop</h2>
                                <h2 className="HeaderIText">Blog</h2>
                                <h2 className="HeaderIText">About</h2>
                                <h2 className="HeaderIText">Contact Us</h2>
                            </div>
                            <div className="HeaderIBox">
                                <div className="HeaderIItem">
                                    <div className="">
                                        <p className="HeaderIIText">TOP COLLECTIONS 2022</p>
                                        <h1 className="HeaderIITitle">We Serve Your <br /> Dream Furniture</h1>
                                        <p className="HeaderIISubtext">Get 50% off all products</p>
                                        <button className="HeaderIIBnt">Shop Now</button>
                                    </div>
                                    <img src={L1} alt="" />
                                </div>
                                <div className="">
                                <div className="HIItem">
                                    <img src={L2} alt="" />
                                    <p className="HICost">$120</p>
                                    <p className="HIText">Office Desk Chair</p>
                                </div>
                                <div className="HIItem">
                                    <img src={L3} alt="" />
                                    <p className="HICost">$180</p>
                                    <p className="HIText">	Home Alisa Sofa</p>
                                </div>
                                <div className="HIItem">
                                    <img src={L4} alt="" />
                                    <p className="HICost">$250</p>
                                    <p className="HIText">Modern Chair</p>
                                </div>
                                </div>
                            </div>
                                <div className="HIIbtnBox">
                                    <button className="Boble" ref={Bobl1} onClick={Bob} value="1"></button>
                                    <button className="Boble" ref={Bobl2} onClick={Bob} value="2"></button>
                                    <button className="Boble" ref={Bobl3} onClick={Bob} value="3"></button>
                                    <button className="Boble" ref={Bobl4} onClick={Bob} value="4"></button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="HHH">
                    <div className="HHHItem">
                        <img src={L5} alt="" />
                        <div className="hhd">                            
                        <p className="HHHTitle">Free Shipping</p>
                        <p className="HHHText">Orders over $100</p>
                        </div>
                    </div>
                    <div className="HHHItem">
                        <img src={L6} alt="" />
                        <div className="hhd">                            
                        <p className="HHHTitle">Smart Gift Card</p>
                        <p className="HHHText">Buy $1000 to get card</p>
                        </div>
                    </div>
                    <div className="HHHItem">
                        <img src={L7} alt="" />
                        <div className="hhd">                            
                        <p className="HHHTitle">Quick Payment</p>
                        <p className="HHHText">100% secure payment</p>
                        </div>
                    </div>
                    <div className="HHHItem">
                        <img src={L8} alt="" />
                        <div className="hhd">                            
                        <p className="HHHTitle">24/7 Support</p>
                        <p className="HHHText">Quick support</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;