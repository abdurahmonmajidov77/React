import { NavLink } from 'react-router-dom';
import './style.css';

function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li>
          <h2>About Blog</h2>
          <h5>Lorem ipsum dolor sit amet consectetur. Aliquam pellentesque mi dis nisl id. Sit tortor orci ultrices pellentesque. Nec sed adipiscing quisque amet lectus orci pellentesque fringilla egestas.</h5>
        </li>
        <li>
          <h2>Archive</h2>
          <p>• January  2023</p>
          <p>• January  2023</p>
          <p>• January  2023</p>
        </li>
        <li>
          <h2>Other Links </h2>
          <NavLink className="Link" to="/privacy">• privacy policy</NavLink>
          <p>• term and condition</p>
          <p>• declaration</p>
        </li>
      </ul>
      <h1>© Your Site Name. All Rights Reserved. Designed by ♪𝔸𝕊𝔻👨‍💻</h1>
    </div>
  );
}

export default Footer;