import './app.css';
import { useEffect, useRef, useState } from "react";
import axios from 'axios';

function Header() {
    const Modal = useRef();
    const Overlay = useRef();
    const intModal = useRef();
    const [Group, setGroup] = useState([]);
    const HandleSubmitModal = async (e) => {
        e.preventDefault();
        const info = {
            "groupName": intModal.current.value
        }
        await axios.post("http://localhost:8000/group", info)
        intModal.current.value = null
        Modal.current.style.display = 'none'
        Overlay.current.style.display = 'none'
    }
    useEffect(() => {
        axios.get("http://localhost:8000/group").then((resp) => {
        setGroup(resp.data)
        })
    }, [Group])
    const HandleList = (e) => {
        window.localStorage.setItem('Group', e.target.value)
    }
    const HandleListAdd = () => {
        Modal.current.style.display = 'block'
        Overlay.current.style.display = 'block'
    }
    const Overlay1 = () => {
        Modal.current.style.display = 'none'
        Overlay.current.style.display = 'none'
    }
    return (
        <>
            <div className='ItNavbar'>
                <h1 className='ItNavTitle'>Item Groups</h1>
                <div className='ItNavList'>
                    {Group.map((elem) => 
                        <button className='ItNavItem' value={elem.id} key={elem.id} onClick={HandleList}>{elem.groupName}</button>
                    )}
                    <button className='ItNavItem' onClick={HandleListAdd}>+ Add Group</button>
                </div>
                <form onSubmit={HandleSubmitModal} className="Modal" ref={Modal}>
                    <input className='input' placeholder='Enter group name...' type="text" ref={intModal} />
                    <button type='submit' className='SendBtn'>Add</button>
                </form>
            </div>
            <div className="Overlay" onClick={Overlay1} ref={Overlay}></div>
        </>
    )
}

export default Header