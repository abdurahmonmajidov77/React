import './app.css';
import PreImg1 from '../../assets/PreImg 1.png'
import PreImg2 from '../../assets/PreImg 2.png'
import PreImg3 from '../../assets/PreImg 3.png'
import PreImg4 from '../../assets/PreImg 4.png'

function Prem() {
    return (
      <>
        <div className="Prem">
            <h1 className='PreTitle'>Our Premium Collection</h1>
            <div className='PreNav'>
              <p className='PreNavItem'>All Products</p>
              <p className='PreNavItem'>Coats & Jacket</p>
              <p className='PreNavItem'>Dressed</p>
              <p className='PreNavItem'>Playsuit</p>
              <p className='PreNavItem'>Short</p>
              <p className='PreNavItem'>Skirt</p>
              <p className='PreNavItem'>T-Shirt</p>
            </div>
            <div className="PreList">
              <div className="PreItem">
                <img src={PreImg1} alt="" />
                <p className='PreItemText'>Category Dress</p>
                <h2 className='PreItemTitle'>Tropical Suit</h2>
                <button className='PreItemBtn'>Order <i class="fa-solid fa-right-long"></i></button>
              </div>
              <div className="PreItem">
                <img src={PreImg2} alt="" />
                <p className='PreItemText'>Category Dress</p>
                <h2 className='PreItemTitle'>Tropical Suit</h2>
                <button className='PreItemBtn'>Order <i class="fa-solid fa-right-long"></i></button>
              </div>
              <div className="PreItem">
                <img src={PreImg3} alt="" />
                <p className='PreItemText'>Category Dress</p>
                <h2 className='PreItemTitle'>Tropical Suit</h2>
                <button className='PreItemBtn'>Order <i class="fa-solid fa-right-long"></i></button>
              </div>
              <div className="PreItem">
                <img src={PreImg2} alt="" />
                <p className='PreItemText'>Category Dress</p>
                <h2 className='PreItemTitle'>Tropical Suit</h2>
                <button className='PreItemBtn'>Order <i class="fa-solid fa-right-long"></i></button>
              </div>
              <div className="PreItem">
                <img src={PreImg3} alt="" />
                <p className='PreItemText'>Category Dress</p>
                <h2 className='PreItemTitle'>Tropical Suit</h2>
                <button className='PreItemBtn'>Order <i class="fa-solid fa-right-long"></i></button>
              </div>
              <div className="PreItem">
                <img src={PreImg1} alt="" />
                <p className='PreItemText'>Category Dress</p>
                <h2 className='PreItemTitle'>Tropical Suit</h2>
                <button className='PreItemBtn'>Order <i class="fa-solid fa-right-long"></i></button>
              </div>
            </div>
            <button className="PreBtn">Find out More</button>
          </div>
      </>
    );
  }
  
  export default Prem;