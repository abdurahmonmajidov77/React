import './app.css';
import Slider from 'react-slick'
import GoodImg from '../../assets/pngwing 8.png'

function Good() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
      <>
        <div className='Good'>
            <Slider {...settings} className="GoodSlider">
                <div>
                    <div className="GoodBox">
                        <img src={GoodImg} alt="" />
                        <div className="GoodInbox">
                            <h2 className="GoodTitle">Good Seller!</h2>
                            <p className="GoodText">I am very happy with the services provided, it is very helpful, starting <br /> from the insight that the company gave from the start that I did not <br /> understand what it was so I got knowledge and made my website <br /> look better</p>
                            <h3 className='GoodSubtitle'>Anna Saraspova</h3>
                            <p className="GoodSubtext">Your Beloved Buyer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="GoodBox">
                        <img src={GoodImg} alt="" />
                        <div className="GoodInbox">
                            <h2 className="GoodTitle">Good Seller!</h2>
                            <p className="GoodText">I am very happy with the services provided, it is very helpful, starting <br /> from the insight that the company gave from the start that I did not <br /> understand what it was so I got knowledge and made my website <br /> look better</p>
                            <h3 className='GoodSubtitle'>Anna Saraspova</h3>
                            <p className="GoodSubtext">Your Beloved Buyer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="GoodBox">
                        <img src={GoodImg} alt="" />
                        <div className="GoodInbox">
                            <h2 className="GoodTitle">Good Seller!</h2>
                            <p className="GoodText">I am very happy with the services provided, it is very helpful, starting <br /> from the insight that the company gave from the start that I did not <br /> understand what it was so I got knowledge and made my website <br /> look better</p>
                            <h3 className='GoodSubtitle'>Anna Saraspova</h3>
                            <p className="GoodSubtext">Your Beloved Buyer</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
      </>
    );
  }
  
  export default Good;