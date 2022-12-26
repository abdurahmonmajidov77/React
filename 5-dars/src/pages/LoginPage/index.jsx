import loginImg from "../../assets/Bobles.png"
import axios from "axios";
import { useRef, useState } from "react";
import {useNavigate} from 'react-router-dom';

function Login() {
    const int = useRef();
    const int1 = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false)
            const info = {
                email: int.current.value,
                password: int1.current.value
            }
            const res = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:nPizd2um/auth/login", info)
            window.localStorage.setItem('auth', res.data.authToken)
            navigate('/admin')
            window.location.reload()
        } catch (error) {
            if (error) {
                setError(true)
            }
        }
    }
    return (
        <>
            <div className='Login'>
                <img src={loginImg} alt="" />
                <form className="LoginBox" onSubmit={HandleSubmit}>
                    <div className="LoginInbox">
                        <h1 className="LoginTitle">Sign In</h1>
                        <input required ref={int} type="email" placeholder="Email Adress" />
                        <input required ref={int1} type="password" placeholder="Password" />
                        {error ? <p className="erore">Wrong email or password</p> : null}
                    </div>
                    <button className="LoginBtn" type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;