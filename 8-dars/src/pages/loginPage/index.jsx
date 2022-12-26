import { LoginWrap } from "./styled-component"
import images from "../../assets/Icons.png"
import login from "../../assets/Login.png"
import { NavLink, useNavigate } from "react-router-dom"
import { useState, useRef } from "react"
import axios from "axios"

function Login() {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const HandleSubmit = async(e) => {
        e.prevenDefault()
        try {
            const body = {
                "email": email.current.value,
                "password": password.current.value
            }
            const res = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:nPizd2um/auth/login", body)
            setError(false)
            window.localStorage.setItem("authToken", res.message)
            navigate("/admin")
        } catch (error) {
            setError(true)
        }
    }
    return(
        <LoginWrap>
            <div className="container">
                <img src={login} alt="" />
                <form onSubmit={HandleSubmit} className="logintexts">
                    <input placeholder="Enter the  email ..." ref={email} type="email" required/>
                    <input placeholder="Enter the  password ..." ref={password} type="password" required/>
                    <span>
                        <span>
                            <input type="checkbox" />
                            <p>Remeber me</p>
                        </span>
                        <a href="#">Forgot Password</a>
                    </span>
                    {error ? <p className="errorText">404 error not found</p>:null}
                    <p>Or Log in other apps</p>
                    <img src={images} alt="icons" />
                    <p>Do you have not an account? <NavLink to="/signup">Sign Up</NavLink></p>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </LoginWrap>
    )
}
export default Login