import './style.css'
import HeaderImg from "../../assets/Header.png"
import Contact from './components/Contact'
import Project from './components/Project'
import Blog from './components/Blog'
import Message from './components/Message'

function Home() {
    return(
        <>
        <div className="Home">
            <div className="HHeader">
                <img src={HeaderImg} alt="" />
                <div className="HHeaderTexts">
                    <h1>Web Developer and Designer</h1>
                    <p>Practices development since 2018</p>
                    <button>Go Profile</button>
                </div>
            </div>
            <Contact/>
            <Project/>
            <Blog number="6"/>
            <Message/>
        </div>
        </>
    )
}
export default Home