import { useEffect, useState } from "react"
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function List(){
    const [movie, setMovie] = useState([])
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    useEffect(() => {
        axios.get("http://localhost:8000/movies").then((resp) => {
            const movieArr = []
            resp.data.map(e => {
                movieArr.push(e)
            })
            setMovie(movieArr)
        })
    }, [movie])
    return (
      <div className="List">
        <h2 className="ListTitle">New Movies</h2>
        <Slider className="Slider" {...settings}>
          {movie.map((elem, index) => 
              <div className="ListItem" value={elem.id} key={index}>
                  <img src={elem.image} alt="" />
                  <h3 className="ListItemTitle">{elem.title}</h3>
              </div>
          )}
        </Slider>
      </div>
    );
}
export default List