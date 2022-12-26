import './app.css';
import Slider from 'react-slick'
import PreImg1 from '../../assets/PreImg 1.png'
import PreImg2 from '../../assets/PreImg 2.png'
import PreImg3 from '../../assets/PreImg 3.png'
import PreImg4 from '../../assets/PreImg 4.png'

function Top() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
      <>
        <div className="Top">
            <h1 className='TopTitle'>Top Items</h1>
            <p className='TopText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <Slider {...settings} className="slider">
              <div>
                <div className='TopBox'>
                    <p className='TopSale'>sale</p>
                    <div className="TopInbox">
                        <img src={PreImg1} alt="" />
                        <h3 className='TopInboxTitle'>Tracksuit Hyped</h3>
                        <p className='TopInboxText'>Apple Cherry</p>
                        <p className='TopInboxCost'>$384</p>
                    </div>
                </div>
              </div>
              <div>
                <div className='TopBox'>
                    <p className='TopSale'>sale</p>
                    <div className="TopInbox">
                        <img src={PreImg2} alt="" />
                        <h3 className='TopInboxTitle'>Tracksuit Hyped</h3>
                        <p className='TopInboxText'>Apple Cherry</p>
                        <p className='TopInboxCost'>$384</p>
                    </div>
                </div>
              </div>
              <div>
                <div className='TopBox'>
                    <p className='TopSale'>sale</p>
                    <div className="TopInbox">
                        <img src={PreImg4} alt="" />
                        <h3 className='TopInboxTitle'>Tracksuit Hyped</h3>
                        <p className='TopInboxText'>Apple Cherry</p>
                        <p className='TopInboxCost'>$384</p>
                    </div>
                </div>
              </div>
              <div>
                <div className='TopBox'>
                    <p className='TopSale'>sale</p>
                    <div className="TopInbox">
                        <img src={PreImg3} alt="" />
                        <h3 className='TopInboxTitle'>Tracksuit Hyped</h3>
                        <p className='TopInboxText'>Apple Cherry</p>
                        <p className='TopInboxCost'>$384</p>
                    </div>
                </div>
              </div>
              <div>
                <div className='TopBox'>
                    <p className='TopSale'>sale</p>
                    <div className="TopInbox">
                        <img src={PreImg1} alt="" />
                        <h3 className='TopInboxTitle'>Tracksuit Hyped</h3>
                        <p className='TopInboxText'>Apple Cherry</p>
                        <p className='TopInboxCost'>$384</p>
                    </div>
                </div>
              </div>
              <div>
                <div className='TopBox'>
                    <p className='TopSale'>sale</p>
                    <div className="TopInbox">
                        <img src={PreImg3} alt="" />
                        <h3 className='TopInboxTitle'>Tracksuit Hyped</h3>
                        <p className='TopInboxText'>Apple Cherry</p>
                        <p className='TopInboxCost'>$384</p>
                    </div>
                </div>
              </div>
              <div>
                <div className='TopBox'>
                    <p className='TopSale'>sale</p>
                    <div className="TopInbox">
                        <img src={PreImg4} alt="" />
                        <h3 className='TopInboxTitle'>Tracksuit Hyped</h3>
                        <p className='TopInboxText'>Apple Cherry</p>
                        <p className='TopInboxCost'>$384</p>
                    </div>
                </div>
              </div>
              <div>
                <div className='TopBox'>
                    <p className='TopSale'>sale</p>
                    <div className="TopInbox">
                        <img src={PreImg2} alt="" />
                        <h3 className='TopInboxTitle'>Tracksuit Hyped</h3>
                        <p className='TopInboxText'>Apple Cherry</p>
                        <p className='TopInboxCost'>$384</p>
                    </div>
                </div>
              </div>
            </Slider>
        </div>
      </>
    );
  }
  
  export default Top;