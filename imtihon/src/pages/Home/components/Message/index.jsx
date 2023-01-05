import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { PostMessage } from '../../../../redux/message';
import './style.css'

function Message() {
    const dispatch = useDispatch();
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const HandleSubmit = (e) => {
        e.preventDefault();
        const body = {
            name: name.current.value,
            email: email.current.value,
            message: message.current.value
        }
        dispatch(PostMessage(body))
        name.current.value = null
        email.current.value = null
        message.current.value = null
        alert('Your Message is sended to admin!')
    }
    return(
        <>
        <div className="Messageas">
            <h1>Contact me</h1>
            <form onSubmit={HandleSubmit}>
                <p>Name</p>
                <input ref={name} type="text" placeholder='Enter Your Name' required/>
                <p>Email</p>
                <input ref={email} type="text" placeholder='Enter Your Email' required/>
                <p>Message</p>
                <input ref={message} type="text" placeholder='Enter Your Message' required/>
                <button type="submit">Send me</button>
            </form>
        </div>
        </>
    )
}
export default Message