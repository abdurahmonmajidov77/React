import './app.css';
import Prem from '../../components/Prem'
import Top from '../../components/Top'
import Good from '../../components/Good'
import HeaderImg from '../../assets/pngwing 1.png'
import PreImg5 from '../../assets/PreImg 5.png'
import PreImg6 from '../../assets/PreImg 6.png'
import PreImg7 from '../../assets/PreImg 7.png'
import Logo1 from '../../assets/logo 1.png'
import Logo2 from '../../assets/logo 2.png'
import Logo3 from '../../assets/logo 3.png'
import Logo4 from '../../assets/logo 4.png'
import Logo5 from '../../assets/logo 5.png'
import Logo6 from '../../assets/logo 6.png'
function Home() { 
    return (
      <>
        <div className='Home'>
          <div className="HHeader">
            <img src={HeaderImg} alt="" />
            <div className="HHeaderBox">
              <h1 className='HHeaderTitle'>Your Premium <br /> Sound, Unplugged!</h1>
              <p className="HHeaderText">Promptly produced and timely delivered to the supplier printing products that <br /> meet the company's quality standards and at an affordable price.</p>
              <button className="HHeaderBtn">Find out More</button>
            </div>
          </div>
          <Prem/>
          <Top/>
          <div className='Our'>
            <div className="OurBox">
            <img src={PreImg5} alt="" />
            <div>
              <h1 className='OurTitle'>Story about <br /> Our Brand</h1>
              <p className="OurText">Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company</p>
              <button className='OurBtn'>Read full story</button>
            </div>
            </div>
            <div className='OurInbox'>
              <h1 className='OurTitle1'>Testimonials from Our Clients</h1>
              <div className="OurList">
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
                <img src={Logo6} alt="" />
              </div>
            </div>
          </div>
          <Good/>
          <div className="New">
            <div className="NewTop">
              <h1 className='NewTitle'>News</h1>
              <button className='NewBtn'>See more</button>
            </div>
            <div className="NewList">
              <div className="NewItem">
                <img src={PreImg7} alt="" />
                <h2 className='NewItemTitle'>Best Summer Outfit Style</h2>
                <h4 className='NewItemSubtitle'>14 Feb • Livina Style</h4>
                <p className='NewItemText'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <button className='NewItemBtn'>Explore More</button>
              </div>
              <div className="NewItem">
                <img src={PreImg6} alt="" />
                <h2 className='NewItemTitle'>Best Summer Outfit Style</h2>
                <h4 className='NewItemSubtitle'>14 Feb • Livina Style</h4>
                <p className='NewItemText'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <button className='NewItemBtn'>Explore More</button>
              </div>
              <div className="NewItem">
                <img src={PreImg6} alt="" />
                <h2 className='NewItemTitle'>Best Summer Outfit Style</h2>
                <h4 className='NewItemSubtitle'>14 Feb • Livina Style</h4>
                <p className='NewItemText'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <button className='NewItemBtn'>Explore More</button>
              </div>
              <div className="NewItem">
                <img src={PreImg7} alt="" />
                <h2 className='NewItemTitle'>Best Summer Outfit Style</h2>
                <h4 className='NewItemSubtitle'>14 Feb • Livina Style</h4>
                <p className='NewItemText'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <button className='NewItemBtn'>Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Home;