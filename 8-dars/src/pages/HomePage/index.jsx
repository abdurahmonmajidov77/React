import { Wrapper } from './styled-index'
import Logo from '../../assets/Logo.png';
import Tom from '../../assets/Tom.png';
import { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import List from '../../components/ListComponent';

function Admin() {
    const Side = useRef();
    const s = useRef();
    const a = useRef();
    const h = useRef();
    const w = useRef();
    const m = useRef();
    const t = useRef();
    const Sid = useRef();
    const navigate = useNavigate()
    const Title = document.querySelectorAll('.SedTitle')
    const HandleNav = () => {
        if(window.localStorage.getItem('authToken')){
            navigate("/admin")
        }
        if(!window.localStorage.getItem('authToken')){
            navigate("/login")
        }
    }
    const HandleSide = () => {
        Title.style.display = 'none'
        a.style.display = 'none'
        s.style.display = 'none'
        m.style.display = 'none'
        t.style.display = 'none'
        h.style.display = 'none'
        w.style.display = 'none'
        Side.current.style.display = 'none'
        Sid.current.style.display = 'block'
        console.log('ok');
    }
    const HandleSid = () => {
        Title.style.display = 'block'
        Side.current.style.display = 'block'
        Sid.current.style.display = 'none'
    }
    return (
        <Wrapper>
            <div className="Sidebar">
                <button className='SidBtn' ref={Side} onClick={HandleSide}>
                    <img src={Logo} alt="" />
                    <h2 className="SidItem1">Play</h2>
                </button>
                <button className='SidBtn SidBtna' ref={Sid} onClick={HandleSid}>
                    <img src={Logo} alt="" />
                </button>
                <div className="SidList">
                    <h3 className="SidItem"><i class="fa-solid fa-magnifying-glass"></i> <h4 className='SedTitle' ref={s}>Search</h4></h3>
                    <h3 className="SidItem"><i class="fa-solid fa-house"></i> <h4 className='SedTitle' ref={h}>Home</h4></h3>
                    <h3 className="SidItem"><i class="fa-solid fa-arrow-trend-up"></i> <h4 className='SedTitle' ref={t}>Tranding</h4></h3>
                    <h3 className="SidItem"><i class="fa-solid fa-film"></i> <h4 className='SedTitle' ref={w}>Web Series</h4></h3>
                    <h3 className="SidItem"><i class="fa-solid fa-clapperboard"></i> <h4 className='SedTitle' ref={m}>Movies</h4></h3>
                </div>
                <div className="SidLister">
                    <button className="SidItem" onClick={HandleNav}><i class="fa-solid fa-user"></i> <h4 className='SedTitle' ref={a}>Admin</h4></button>
                    <h3 className="SidItem"><i class="fa-solid fa-gear"></i> <h4 className='SedTitle' ref={s}>Settings</h4></h3>
                </div>
            </div>
            <div className="SidRight">
                <div className="Header">
                    <img src={Tom} alt="" />
                    <div className="HeaderTexts">
                        <h1 className='HeadTitle'>Peaky Blinders</h1>
                        <p className='HeadText'>Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.</p>
                        <div className="HeadBox">
                            <p className='HeadRate'>IMDb</p>
                            8.8/10
                        </div>
                        <div className="HeadBox">
                            <p className='HeadBl'>2B+</p>
                            Streams
                        </div>
                        <div className="HeadBntBox">
                            <button className='HeadBtn'>Play</button>
                            <button className='HeadBtn1'>Watch Trailer</button>
                        </div>
                    </div>
                </div>
                <List/>
            </div>
        </Wrapper>
    )
}

export default Admin