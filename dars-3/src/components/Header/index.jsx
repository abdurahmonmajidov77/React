import './app.css';
import Logo from '../logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <>
          <div className='Header'>
            <div className='Navbar'>
              <h1 className='NavTitle'>
                <img src={Logo} alt="" />
                Tetrad.uz
              </h1>
              <div className='NavList'>
                <h3 className='NavItem'><i class="fa-solid fa-phone"></i> Call Center</h3>
                <h3 className='NavItem'><i class="fa-solid fa-truck"></i> Shipping & Returns</h3>
              </div>
            </div>
            <div className='NavbarBot'>
              <div className="NavBList">
                <NavLink className='NavBItem' to="/">Home</NavLink>
                <NavLink className='NavBItem' to="/shop">Shop</NavLink>
                <NavLink className='NavBItem'>Promo</NavLink>
                <NavLink className='NavBItem' to="/gallery">Blog</NavLink>
              </div>
              <div className='NavBSearchBox'>
                <input type="text" placeholder='Search what you need'/>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className='NavBLa'>
              <i class="fa-solid fa-envelope"></i>
              <i class="fa-solid fa-heart"></i>
              <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
              <NavLink to="/profile"><i class="fa-solid fa-user"></i></NavLink>
              </div>
            </div>
          </div>
      </>
    );
  }
  
  export default Header;