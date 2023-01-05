import "./style.css"
import logo1 from "../../assets/Logo(1).png"
import logo2 from "../../assets/Logo(2).png"
import logo3 from "../../assets/Logo(3).png"
import logo4 from "../../assets/Logo(4).png"

function Logo() {
    return(
        <div className="logo">
            <div className="container">
                <div className="logos">
                    <img src={logo1} alt="logo" />
                    <img src={logo2} alt="logo" />
                    <img src={logo3} alt="logo" />
                    <img src={logo4} alt="logo" />
                </div>
            </div>
        </div>
    )
}
export default Logo