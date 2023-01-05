import './style.css'
import BratImg from "../../../../assets/Brat.png"
import MacImg from "../../../../assets/Mac.png"
import { NavLink } from 'react-router-dom'

function Contact() {
    return(
        <>
        <div className="Contact">
            <h1>About me</h1>
            <div className="ContactBox">
                <img src={BratImg} alt="" />
                <div className="ContactTexts">
                    <h2>Saikat Mondal</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac ut tristique facilisis lectus est tristique vestibulum aliquam. Hendrerit donec eget sed pellentesque.</p>
                    <NavLink to="/contact" className="NavBtn">Contact me</NavLink>
                    <div className="ContactBrands">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="Skill">
            <img src={MacImg} alt="" />
            <div className="SkillBoxw">
            <h1>My Skills</h1>
            <div className="SkillBox">
                <div className="SkillTexts">
                <p>Lorem ipsum dolor sit amet consectetur. Nisl sit integer sollicitudin a. Sapien ut vitae rhoncus aliquet lacus cras est diam aliquam. Mattis condimentum ut pharetra curabitur ullamcorper nibh rhoncus. Massa mi mi ut ipsum est </p>
                <button>Download My CV</button>
                </div>
                <ul>
                    <li>
                        <p>Html & CSS</p>
                        <p>95%</p>
                    </li>
                    <li>
                        <p>Javascript</p>
                        <p>75%</p>
                    </li>
                    <li>
                        <p>PHP</p>
                        <p>80%</p>
                    </li>
                    <li>
                        <p>WordPress</p>
                        <p>95%</p>
                    </li>
                    <li>
                        <p>Laravel</p>
                        <p>50%</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        </>
    )
}
export default Contact