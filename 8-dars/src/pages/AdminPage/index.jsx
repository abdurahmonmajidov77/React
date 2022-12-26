import { useEffect, useState } from 'react'
import { Wrapper } from './styled-index'
import axios from "axios"
import Logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom'
import Main from '../../assets/Main.png';
import './app.css'

function Admin() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/movies").then(res => {
            const movieArr = []
            res.data.map(e => {
                movieArr.push(e)
            })
            setMovie(movieArr)
        })
    }, [movie])
    const AddMovie = () => {

    }
    return (
        <Wrapper>
            <div className="container">
                <div className="overlay"></div>
                <div className="modal">
                    <h2>Add Movie</h2>
                    int
                </div>
                <div className="AdminNav">
                    <h1> <img src={Logo} alt="" /> Good Evening ..!</h1>
                    <button className='button' onClick={AddMovie}>+ Add Movie</button>
                </div>
                <div className="AdminMain">
                    <div className="mainBox">
                    <div className="AdminMainTexts">
                        <p>Movies</p>
                        <div className='h1'>Welcome to <h1> Admin </h1> <h1>Page</h1> </div>
                        <p>Let's begin started</p>
                        <NavLink className="btn" to='/'>Back to Home</NavLink>
                    </div>
                    <div className="MainImgBox1">
                        <img src={Main} alt="" />
                    </div>
                    </div>
                </div>
                <div className="AdminList">
                    <h2>Movies</h2>
                    <ul className='ul'>
                        {movie.map((elem, index) =>
                            <li className='li' key={index}>
                                <img src={elem.image} alt="movieImg" />
                                <div className="videoBox">
                                <video className='video' width='270' src={elem.video} controls></video>
                                </div>
                                <h3>{elem.title}</h3>
                                <h3 className='mah3'>{elem.id}</h3>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </Wrapper>
    )
}

export default Admin