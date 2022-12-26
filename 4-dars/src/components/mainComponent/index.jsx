import './app.css';
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Form from '../FormComponent';

function Main() {
    const Overlay2 = useRef();
    const int = useRef();
    const int1 = useRef();
    const Form = useRef();
    const Form1 = useRef();
    const [message, setMessage] = useState([]);
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const info = {
            "groupId": window.localStorage.getItem('Group'),
            "message": int.current.value
        }
        await axios.post("http://localhost:8000/messages", info)
        int.current.value = null
    }
    const HandleSubmit1 = async (e) => {
        e.preventDefault();
        const d = window.localStorage.getItem('Edit')
        const info = {
            "groupId": window.localStorage.getItem('Group'),
            "message": int1.current.value
        }
        await axios.put(`http://localhost:8000/messages/${d}`, info);
        int1.current.value = null
        Form.current.style.display = 'block'
        Form1.current.style.display = 'none'
    }
    useEffect(() => {
        axios.get("http://localhost:8000/messages").then((resp) => {
            const messageArr = []
            resp.data.map(e => {
                if (`${e.groupId}` == window.localStorage.getItem('Group')) {
                    messageArr.push(e)
                }
                setMessage(messageArr)
            })
        })
    }, [message])
    const HandleP = (e) => {
        const f = document.querySelectorAll('.Btnv')
        for (var i of f) {
            i.style.display = 'none'
            if (e.target.value == Number(i.id)) {
                i.style.display = 'block'
                Overlay2.current.style.display = 'block'
            }
        }
    }
    const Overlay1 = () => {
        const f = document.querySelectorAll('.Btnv')
        for (var i of f) {
            i.style.display = 'none'
            Overlay2.current.style.display = 'none'
        }
    }
    const HandleDelete = async (e) => {
        await axios.delete(`http://localhost:8000/messages/${e.target.value}`);
    }
    const HandleEdit = async (e) => {
        window.localStorage.setItem('Edit', e.target.value)
        Form.current.style.display = 'none'
        int1.current.value = null
        Form1.current.style.display = 'block'
    }
    return (
        <>
            <div className='ItMain'>
                <h2 className='ItNavTitle'>Messages</h2>
                <div className='Mono'>
                    {message.map((elem, index) =>
                        <button className='message' onClick={HandleP} value={elem.id} key={index}>
                            <div className='Btnv' id={elem.id}>
                                <button value={elem.id} onClick={HandleDelete} class="fa-solid fa-trash"></button><button value={elem.id} onClick={HandleEdit} class="fa-solid fa-edit"></button>
                            </div>
                            {elem.message}</button>
                    )}
                </div>
                <form className='from' ref={Form} onSubmit={HandleSubmit}>
                    <input ref={int} type="text" placeholder='Message...' />
                    <button className='SendBtn' type='submit'>Send</button>
                </form>
                <form className='from1' ref={Form1} onSubmit={HandleSubmit1}>
                    <input ref={int1} type="text" placeholder='Edit message...' />
                    <button className='SendBtn' type='submit'>Edit</button>
                </form>
            </div>
            <div className="Overlay1" onClick={Overlay1} ref={Overlay2}></div>
        </>
    )
}

export default Main