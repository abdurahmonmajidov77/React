import './App.css';
import Header from './components/HeaderComponent/index';
import Cost from './components/CostComponent/index';
import Logo from './photos/LOGO.svg'
import Logo1 from './photos/LOGO (1).svg'
import Logo2 from './photos/LOGO (2).svg'
import Logo3 from './photos/LOGO (3).svg'
import Logo4 from './photos/LOGO (4).svg'
import WebFlow from './photos/Group.svg'
import Shop from './photos/Group (1).svg'
import Figma from './photos/Figma.svg'
import php from './photos/Vector.svg'
import rec377 from './photos/Rectangle 377.svg'
import rec378 from './photos/Rectangle 378.svg'
import rec379 from './photos/Rectangle 379.svg'
import rec380 from './photos/Rectangle 380.svg'


function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        <div className='SecLogo'>
          <div className='Container'>
            <div className='LogoList'>
              <div className='LogoItem'>
                <img alt='' src={Logo}/>
              </div>
              <div className='LogoItem'>
                <img alt='' src={Logo1}/>
              </div>
              <div className='LogoItem'>
                <img alt='' src={Logo2}/>
              </div>
              <div className='LogoItem'>
                <img alt='' src={Logo3}/>
              </div>
              <div className='LogoItem'>
                <img alt='' src={Logo4}/>
              </div>
            </div>
          </div>
        </div>
        <div className='SecOur'>
          <p className='OurText'>What we Do?</p>
          <h1 className='OurTitle'>Our Specialization</h1>
          <div className='OurList'>
            <div className='OurItem'>
              <div className='OurTopBox'>
                <img alt='' src={WebFlow}/>
                <h3 className='OurTopTitle'>Webflow Development</h3>
              </div>
              <p className='OurSubtext'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
              <p className='OurLink'>Read More</p>
            </div>
            <div className='OurItem'>
              <div className='OurTopBox'>
                <img alt='' src={Shop}/>
                <h3 className='OurTopTitle'>Shopify Development</h3>
              </div>
              <p className='OurSubtext'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
              <p className='OurLink'>Read More</p>
            </div>
            <div className='OurItem'>
              <div className='OurTopBox'>
                <img alt='' src={Figma}/>
                <h3 className='OurTopTitle'>Figma Web Designing</h3>
              </div>
              <p className='OurSubtext'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
              <p className='OurLink'>Read More</p>
            </div>
            <div className='OurItem'>
              <div className='OurTopBox'>
                <img alt='' src={php}/>
                <h3 className='OurTopTitle'>Php Development</h3>
              </div>
              <p className='OurSubtext'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
              <p className='OurLink'>Read More</p>
            </div>
          </div>
          <button className='OurBtn'>Learn More</button>
        </div>
        <div className='SecPro'>
          <p className='ProText'>What we Do?</p>
          <h1 className='ProTitle'>Our Specialization</h1>
          <div className='ProList'>
            <div className='ProItem'>
              <img alt='' src={rec377}/>
              <div className='ProBox'>
                <p className='ProSubtext'>Fashion Landing page</p>
                <p className='ProSubLink'>View Details</p>
              </div>
            </div>
            <div className='ProItem'>
              <img alt='' src={rec378}/>
              <div className='ProBox'>
                <p className='ProSubtext'>Health & Fitness</p>
                <p className='ProSubLink'>View Details</p>
              </div>
            </div>
            <div className='ProItem'>
              <img alt='' src={rec379}/>
              <div className='ProBox'>
                <p className='ProSubtext'>Furniture Shop</p>
                <p className='ProSubLink'>View Details</p>
              </div>
            </div>
            <div className='ProItem'>
              <img alt='' src={rec380}/>
              <div className='ProBox'>
                <p className='ProSubtext'>IT Solution Provider</p>
                <p className='ProSubLink'>View Details</p>
              </div>
            </div>
          </div>
          <button className='OurBtn'>All Projects</button>
        </div>
        <div className='SecCon'>
            <p className='ConSubext'>Testimonials</p>
            <h1 className='ConSubtitle1'>What Customers Say</h1>
            <div className='ConBox'></div>
            <div className='ConList'>
              <div className='ConItem'>
                <h3 className='ConTitle'>Superb Work!</h3>
                <p className='ConText'>“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”</p>
                <div className='ConStar'>★★★★★</div>
                <h3 className='ConSubtitle'>Sabo Masties</h3>
              </div>
              <div className='ConItem'>
                <h3 className='ConTitle'>Superb Work!</h3>
                <p className='ConText'>“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”</p>
                <div className='ConStar'>★★★★★</div>
                <h3 className='ConSubtitle'>Sabo Masties</h3>
              </div>
              <div className='ConItem'>
                <h3 className='ConTitle'>Superb Work!</h3>
                <p className='ConText'>“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”</p>
                <div className='ConStar'>★★★★★</div>
                <h3 className='ConSubtitle'>Sabo Masties</h3>
              </div>
            </div>
              <div className='ConStairs'>
                <i className='fa-sharp fa-solid fa-left-long'></i>
                <i className='fa-sharp fa-solid fa-right-long'></i>
              </div>
        </div>
        <Cost/>
        <div className='SecNed'>
          <h1 className='NedTitle'>Need a little more home to grow?</h1>
          <button className='NedBtn'>Contact Us</button>
          <div className='NedList'>
            <div className='NedItem'>
              <h2 className='NedSubtitle'>Web.Dev</h2>
              <p className='NedText'>You’ll find your next home loan valu you prefer.</p>
              <div className='NedBox'>
                <p>f</p>
                <i className='fa-sharp fa-solid fa-dove'></i>
                <p>in</p>
              </div>
            </div>
            <div className='NedItem'>
              <h2 className='NedItemTitle'>Resources</h2>
              <p className='NedLink'>Our Agents</p>
              <p className='NedLink'>Member Stories</p>
              <p className='NedLink'>Video</p>
              <p className='NedLink'>Free trial</p>
            </div>
            <div className='NedItem'>
              <h2 className='NedItemTitle'>Company</h2>
              <p className='NedLink'>Patnerships</p>
              <p className='NedLink'>Terms of use</p>
              <p className='NedLink'>Privacy</p>
              <p className='NedLink'>Sitemap</p>
            </div>
            <div className='NedItem'>
              <h2 className='NedItemTitle'>Get in touch</h2>
              <button className='NedBtn1'>Enter your mail <i className='fa-sharp fa-solid fa-right-long'></i></button>
            </div>
          </div>
          <div className='NedBigBox'>
            <p className='NedBigText'>Copyright 2021 ©Web.Dev  All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
