import './style.css'
import BlogerImg from '../../assets/Header.png'
import SideBlog from './components/SideBlog'
import BlogerB from './components/BlogerB'

function Bloger() {
    return(
        <div className="Bloger">
            <div className="BHeader">
                <img src={BlogerImg} alt="" />
                <h1>MY BOLG</h1>
            </div>
            <div className="BMain">
                <BlogerB number="4" name="View all" title="Designer"/>
                <SideBlog/>
            </div>
        </div>
    )
}
export default Bloger