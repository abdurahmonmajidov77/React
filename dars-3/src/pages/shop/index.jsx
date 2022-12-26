import './app.css';
import ShopImg from '../../assets/pngwing 1.png'
import PreImg1 from '../../assets/PreImg 1.png'
import PreImg2 from '../../assets/PreImg 2.png'
import PreImg3 from '../../assets/PreImg 3.png'
import PreImg4 from '../../assets/PreImg 4.png'
import PreImg5 from '../../assets/PreImg 5.png'
import { NavLink } from 'react-router-dom';

function Shop() {
    return (
      <>
      <div className="Shop">
        <div className="ShopHead">
            <img src={ShopImg} alt="" />
            <div className="ShopBoxHead">
              <h1 className='ShopTitleHead'>Home Shopping, <br /> Your Choice!</h1>
              <p className="ShopTextHead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button className="ShopBtnHead">Find out More</button>
            </div>
        </div>
        <div className="ShopListBox">
            <div className="ShopList">
                <NavLink className="ShopItem" to="/more">
                    <i class='fa-solid fa-heart'></i>
                    <div className="ShopItemBox">
                        <img src={PreImg3} alt="" />
                        <h2 className='ShopItemTitle'>Urbano Jacket</h2>
                        <p className='ShopRate'>★ ★ ★ ★ ★</p>
                        <p className='ShopItemText'>watchmenow</p>
                        <p className="ShopCost">$99</p>
                    </div>
                </NavLink>
                <NavLink className="ShopItem" to="/more">
                    <i class='fa-solid fa-heart'></i>
                    <div className="ShopItemBox">
                        <img src={PreImg4} alt="" />
                        <h2 className='ShopItemTitle'>Urbano Jacket</h2>
                        <p className='ShopRate'>★ ★ ★ ★ ★</p>
                        <p className='ShopItemText'>watchmenow</p>
                        <p className="ShopCost">$99</p>
                    </div>
                </NavLink>
                <NavLink className="ShopItem" to="/more">
                    <i class='fa-solid fa-heart'></i>
                    <div className="ShopItemBox">
                        <img src={PreImg1} alt="" />
                        <h2 className='ShopItemTitle'>Urbano Jacket</h2>
                        <p className='ShopRate'>★ ★ ★ ★ ★</p>
                        <p className='ShopItemText'>watchmenow</p>
                        <p className="ShopCost">$99</p>
                    </div>
                </NavLink>
                <NavLink className="ShopItem" to="/more">
                    <i class='fa-solid fa-heart'></i>
                    <div className="ShopItemBox">
                        <img src={PreImg2} alt="" />
                        <h2 className='ShopItemTitle'>Urbano Jacket</h2>
                        <p className='ShopRate'>★ ★ ★ ★ ★</p>
                        <p className='ShopItemText'>watchmenow</p>
                        <p className="ShopCost">$99</p>
                    </div>
                </NavLink>
                <NavLink className="ShopItem" to="/more">
                    <i class='fa-solid fa-heart'></i>
                    <div className="ShopItemBox">
                        <img src={PreImg5} alt="" />
                        <h2 className='ShopItemTitle'>Urbano Jacket</h2>
                        <p className='ShopRate'>★ ★ ★ ★ ★</p>
                        <p className='ShopItemText'>watchmenow</p>
                        <p className="ShopCost">$99</p>
                    </div>
                </NavLink>
                <NavLink className="ShopItem" to="/more">
                    <i class='fa-solid fa-heart'></i>
                    <div className="ShopItemBox">
                        <img src={PreImg4} alt="" />
                        <h2 className='ShopItemTitle'>Urbano Jacket</h2>
                        <p className='ShopRate'>★ ★ ★ ★ ★</p>
                        <p className='ShopItemText'>watchmenow</p>
                        <p className="ShopCost">$99</p>
                    </div>
                </NavLink>
                <NavLink className="ShopItem" to="/more">
                    <i class='fa-solid fa-heart'></i>
                    <div className="ShopItemBox">
                        <img src={PreImg2} alt="" />
                        <h2 className='ShopItemTitle'>Urbano Jacket</h2>
                        <p className='ShopRate'>★ ★ ★ ★ ★</p>
                        <p className='ShopItemText'>watchmenow</p>
                        <p className="ShopCost">$99</p>
                    </div>
                </NavLink>
                <NavLink className="ShopItem" to="/more">
                    <i class='fa-solid fa-heart'></i>
                    <div className="ShopItemBox">
                        <img src={PreImg1} alt="" />
                        <h2 className='ShopItemTitle'>Urbano Jacket</h2>
                        <p className='ShopRate'>★ ★ ★ ★ ★</p>
                        <p className='ShopItemText'>watchmenow</p>
                        <p className="ShopCost">$99</p>
                    </div>
                </NavLink>
            </div>
            <button className='ShopListBtn'>See More</button>
        </div>
      </div>
      </>
    );
  }
  
  export default Shop;