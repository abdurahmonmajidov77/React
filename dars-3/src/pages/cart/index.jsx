import './app.css';
import Top from '../../components/Top'
import CartImg from '../../assets/pngwing 1.png'
import PreImg4 from '../../assets/PreImg 4.png'
import PreImg2 from '../../assets/PreImg 2.png'
import PreImg1 from '../../assets/PreImg 1.png'
import PreImg3 from '../../assets/PreImg 3.png'

function Cart() {
    return (
      <>
        <div className="Cart">
          <div className="CartHead">
            <img src={CartImg} alt="" />
            <div className="CartBoxHead">
              <h1 className='CartTitleHead'>Our Gallery, <br /> Your Dreams!</h1>
              <p className="CartTextHead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button className="CartBtnHead">Find out More</button>
            </div>
          </div>
          <div className="MyCart">
            <div className="MyCInbox">
              <div className="MyNetBox">
                <p className='MyEnt'>1. Shopping Cart</p>
                <p className='MyEnt'>2. Checkout</p>
                <p className='MyEnt'>3. Order Succesed</p>
              </div>
              <h1 className='MyTitle'>My Cart</h1>
              <div className="MyList">
                <div className="MyItem">
                  <img src={PreImg4} alt="" />
                  <div className="MyItemBox">
                    <h4 className='MyItemTitle'>Tropical Playsuit</h4>
                    <div className="MoreBoxMore">
                      <p className="MoreMore">Quality :</p>
                      <p className="MoreMore">- 5 +</p>
                    </div>
                    <div className="MyCostBox">
                      <h3 className="MyCost">$99</h3>
                      <div className="myBtnBox">
                        <button className='Mybtn'><i class="fa-solid fa-trash"></i></button>
                        <button className='Mybtn'>Wishlist <i className='fa-solid fa-heart'></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MyItem">
                  <img src={PreImg2} alt="" />
                  <div className="MyItemBox">
                    <h4 className='MyItemTitle'>Tropical Playsuit</h4>
                    <div className="MoreBoxMore">
                      <p className="MoreMore">Quality :</p>
                      <p className="MoreMore">- 5 +</p>
                    </div>
                    <div className="MyCostBox">
                      <h3 className="MyCost">$99</h3>
                      <div className="myBtnBox">
                        <button className='Mybtn'><i class="fa-solid fa-trash"></i></button>
                        <button className='Mybtn'>Wishlist <i className='fa-solid fa-heart'></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MyItem">
                  <img src={PreImg1} alt="" />
                  <div className="MyItemBox">
                    <h4 className='MyItemTitle'>Tropical Playsuit</h4>
                    <div className="MoreBoxMore">
                      <p className="MoreMore">Quality :</p>
                      <p className="MoreMore">- 5 +</p>
                    </div>
                    <div className="MyCostBox">
                      <h3 className="MyCost">$99</h3>
                      <div className="myBtnBox">
                        <button className='Mybtn'><i class="fa-solid fa-trash"></i></button>
                        <button className='Mybtn'>Wishlist <i className='fa-solid fa-heart'></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MyItem">
                  <img src={PreImg3} alt="" />
                  <div className="MyItemBox">
                    <h4 className='MyItemTitle'>Tropical Playsuit</h4>
                    <div className="MoreBoxMore">
                      <p className="MoreMore">Quality :</p>
                      <p className="MoreMore">- 5 +</p>
                    </div>
                    <div className="MyCostBox">
                      <h3 className="MyCost">$99</h3>
                      <div className="myBtnBox">
                        <button className='Mybtn'><i class="fa-solid fa-trash"></i></button>
                        <button className='Mybtn'>Wishlist <i className='fa-solid fa-heart'></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MyCInbox">
              <div className='Mg'>
              <div className="MyInboxCup">
                <h2 className='MyCup'>Have a Coupon?</h2>
                <input placeholder='Input your email here' type="text" id="" />
                <button className='MyCupBtn'>Apply</button>
              </div>
              <div className="MyCartt">
                <h3 className='MyCartTTitle'>Cart Totals</h3>
                <div className="mf">
                <div className="MyToaBox">
                  <p className='mYtoat'>Subtotal</p>
                  <p className='mYtoat'>Shipping</p>
                  <p className='mYtoat'>Total</p>
                </div>
                <div className="MyToaBox">
                  <p className='mYtoa'>$150</p>
                  <p className='mYtoa'>Free Shipping</p>
                  <p className='mYtoa'>Shipping to Sidney</p>
                  <p className='mYtoat'>$350</p>
                </div>
                <p className='MyChange'>Change</p>
                </div>
              </div>
              <button className='MyToaBtn'>Checkout</button>
              </div>
            </div>
          </div>
          <Top/>
        </div>
      </>
    );
  }
  
  export default Cart;