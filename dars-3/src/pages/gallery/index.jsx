import './app.css';
import GalImg from '../../assets/pngwing 1.png'
import Prem from '../../components/Prem'
import Good from '../../components/Good'

function Gallery() {
    return (
      <>
        <div className="Gallery">
          <div className="GalHead">
              <img src={GalImg} alt="" />
              <div className="GalBoxHead">
                <h1 className='GalTitleHead'>Our Gallery, <br /> Your Dreams!</h1>
                <p className="GalTextHead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button className="GalBtnHead">Find out More</button>
              </div>
          </div>
          <Prem/>
          <Good/>
        </div>
      </>
    );
  }
  
  export default Gallery;