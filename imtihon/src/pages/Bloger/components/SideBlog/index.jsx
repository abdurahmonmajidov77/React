import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBlog } from "../../../../redux/blog";
import './style.css'
import WorkImg from '../../../../assets/Work.png'

function SideBlog() {
    const DataMap = []
    const dispatch = useDispatch()
    const dataBlog = useSelector(state => state.blog)
    useEffect(() => {
        dispatch(GetBlog())
    },[])
    for (let i = 0; i < 4; i++) {
        const elem = dataBlog.getBlog?.Data[i];
        DataMap.push(elem)
    }
    return(
        <div className="SideBlog">
            <div className="SideBInt">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="SideMain">
                <h3>Popular Posts</h3>
                <ul>
                {dataBlog.getBlog.Success == true ? DataMap.map((elem, index) => 
                <li key={index}>
                    <img src={elem.img} alt="" />
                    <div className="SideTe">
                    <h4>{elem.title}</h4>
                    <div className="BlogSDate">
                      <h5>{elem.name}</h5>
                      <h5>{elem.date}</h5>
                    </div>
                    </div>
                </li>)
                :dataBlog.getBlog.Loading == true ? <i class="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataBlog.getBlog.Error == true ? <h3 className='Error'><i class="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
                </ul>
            </div>
            <div className="SideBTag">
                <h3>Tags</h3>
                <div className="SideBTagBtn">
                    <button>web</button>
                    <button>mobile</button>
                    <button>technology</button>
                    <button>technology</button>
                    <button>mobile</button>
                    <button>technology</button>
                </div>
            </div>
            <div className="SideBTag">
                <h3>Categorys</h3>
                <div className="SideBTagBtn">
                    <button>web</button>
                    <button>mobile</button>
                    <button>technology</button>
                    <button>technology</button>
                    <button>mobile</button>
                    <button>technology</button>
                </div>
            </div>
            <div className="SideBIcons">
            <div className="ContactBrands">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
            </div>
            <div className="SideBNews">
                <h3>Newsletter</h3>
                <p>Aliqu justo et labore at eirmod justo sea erat diam dolodiam vero kasd</p>
                <div className="SideBInt">
                    <input type="text" placeholder='Your Mail'/>
                    <button>Sign Up</button>
                </div>
                <p>Sit eirmod nonumy kasd eirmod</p>
            </div>
            <img src={WorkImg} className="SideBImg" alt="" />
        </div>
    )
}
export default SideBlog