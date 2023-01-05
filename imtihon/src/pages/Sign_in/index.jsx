import './style.css';
import SingImg from '../../assets/Sign.png';
import axios from 'axios';
import { LOGIN_URL } from "../../utils/index";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Sign() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(false)
  const HandleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const body = {
        email: email.current.value,
        password: password.current.value
      }
      const res = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:nPizd2um/auth/login', body)
      window.localStorage.setItem("authToken", res.data.authToken)
      if(res.data.authToken){
      navigate('/admin')
      console.log('ok');
      }
      setError(false)
    } catch (error) {
      setError(true)
    }
  }
  return (
    <div className="Sign">
        <div className="SignBox">
          <form onSubmit={HandleSubmit}>
            <h2>Sign In</h2>
            <p>Welcome, please enter your phone or email <br /> and your password.</p>
            <input required ref={email} type="email" placeholder='email'/>
            <input required ref={password} type="password" placeholder='password'/>
            {error ? <p className='ErrorP'>Your email or password is wrong!</p>: null}
            <button type='submit'>Sign In</button>
          </form>
        </div>
        <div className="SignBoxe">
            <img src={SingImg} alt="" />
        </div>
    </div>
  );
}

export default Sign;