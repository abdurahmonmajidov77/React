import './app.css'
import { NavLink } from 'react-router-dom'
import Bomb from '../../assets/Bomb.png'

function Error() {
    return(
        <div className="Error">
            <img src={Bomb} alt="" />
            <h1>Oops! This Page is Not Found.</h1>
            <p>The requested page dose not exist</p>
            <NavLink className='Buto' to='/'>Back to Home</NavLink>
        </div>
    )
}

export default Error