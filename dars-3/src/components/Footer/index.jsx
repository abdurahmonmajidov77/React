import './app.css';
import Loc from '../location.png'
import Logo from '../logo.png'

function Footer() {
    return (
      <>
        <div className='Footer'>
            <img className='footerImg' src={Loc} alt="" />
                <div className="FooterList1">
                    <h1 className='FooterTitle'>
                      <img src={Logo} alt="" />
                      Tetrad.uz
                    </h1>
                    <p className='FooterText'>Privacy Policy</p>
                    <p className='FooterText'>Terms and Condition</p>
                    <p className='FooterText'>Yunusabad, Construction <br /> Center 227-office, Uzbekistan</p>
                    <p className='FooterTextB'>@2022 Supersite.uz</p>
                </div>
                <div className="FooterList2">
                    <p className='FooterTextL'>Help</p>
                    <p className='FooterSubText'>Shop</p>
                    <p className='FooterSubText'>Promo</p>
                    <p className='FooterSubText'>News</p>
                    <p className='FooterSubText'>Testimonials from Our Clients</p>
                    <div className='FooterBot'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest"></i>
                    </div>
                </div>
        </div>
      </>
    );
  }
  
  export default Footer;