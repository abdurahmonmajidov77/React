import './style.css';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
        <ul>
            <li>
                <NavLink className="NavLink" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="NavLink" to="/about">About me</NavLink>
            </li>
            <li>
                <NavLink className="NavLink" to="/contact">Contact me</NavLink>
            </li>
            <li>
                <NavLink className="NavLink" to="admin">Hire me</NavLink>
            </li>
        </ul>
    </div>
  );
}

export default Navbar;