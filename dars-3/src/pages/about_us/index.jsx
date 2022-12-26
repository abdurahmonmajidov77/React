import './app.css';
import Error from '../../assets/Error.png';

function About() {
    return (
      <>
        <div className='About'>
          <img src={Error} alt="" />
          <div className='AboutBox'>
            <h1 className='AboutTitle'>Код ошибки: 404</h1>
            <p className='AboutText'>Страница, над которой вы работали, была <br /> удалена, и мне очень жаль :(</p>
          </div>
        </div>
      </>
    );
  }
  
  export default About;