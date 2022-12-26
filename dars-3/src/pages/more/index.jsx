import './app.css';
import Top from '../../components/Top'
import PreImg1 from '../../assets/PreImg 1.png'

function More() {
    return (
      <>
        <div className='More'>
          <div className="MoreTop">
            <p className='MoreTopEnt'>Grocery > Fruits > Japan Oranges</p>
            <div className="MoreTopBox">
              <div className="MoreTopInbox">
                <img src={PreImg1} className='moretopimg' alt="" />
                <div className="MoreImgsBox">
                  <img src={PreImg1} alt="" />
                  <img src={PreImg1} alt="" />
                  <img src={PreImg1} alt="" />
                </div>
              </div>
              <div className="MoreTopInbox">
                <h1 className='MoreTopInboxTitle'>Tropical Suit</h1>
                <p className='MoreTopRate'>★ ★ ★ ★ ★</p>
                <p className='MoreTopCost'>$99</p>
                <h4 className='MoreTopDet'>Details Product</h4>
                <p className='MoreTopInboxText'>Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company. Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.</p>
                <div className="MoreTopInboxBox">
                  <p className='moremore'>Quantity</p>
                  <p className='moremore1'>- 2 +</p>
                  <p className='moremore2'>Add note</p>
                </div>
                <div className="MoreTopInboxBox">
                  <p className='moremore'>Sub Total</p>
                  <p className='moremore'>$10</p>
                </div>
                <div className="MoreTopBtnBox">
                  <button className='MoreTopBtn'>Wishlist <i class='fa-solid fa-heart'></i></button>
                  <button className='MoreTopBtn2'>Add to Cart <i class='fa-solid fa-shopping-cart'></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="MoreBot">
            <div className="MoreBInbox">
              <h3 className='MoreBTitle'>Description</h3>
              <p className="MoreBText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.</p>
              <h3 className='MoreBTitle'>Reviews (2)</h3>
              <div className="MoreBList">
                  <div className="MoreBItem">
                  <div className="MoreBItemTop">
                    <h4 className='MoreBItemTitle'>Alex Iwobi</h4>
                    <p className='MoreBRate'>★ ★ ★ ★ ★</p>
                  </div>
                  <p className='MoreBItemText'>2 March 2021 at 06.30 pm</p>
                  <div className="MoreBItemImg">
                    <img src={PreImg1} alt="" />
                    <img src={PreImg1} alt="" />
                    <img src={PreImg1} alt="" />
                    <img src={PreImg1} alt="" />
                  </div>
                  <p className='MoreBItemSubtext'>Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.</p>
                </div>
                <div className="MoreBItem">
                  <div className="MoreBItemTop">
                    <h4 className='MoreBItemTitle'>Alex Iwobi</h4>
                    <p className='MoreBRate'>★ ★ ★ ★ ★</p>
                  </div>
                  <p className='MoreBItemText'>2 March 2021 at 06.30 pm</p>
                  <div className="MoreBItemImg">
                    <img src={PreImg1} alt="" />
                    <img src={PreImg1} alt="" />
                    <img src={PreImg1} alt="" />
                    <img src={PreImg1} alt="" />
                  </div>
                  <p className='MoreBItemSubtext'>Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.</p>
                </div>
              </div>
            </div>
            <div className="MoreBInbox">
              <img className='MoreBimgj' src={PreImg1} alt="" />
            </div>
          </div>
        </div>
        <Top/>
      </>
    );
  }
  
  export default More;