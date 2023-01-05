import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { GetBlog } from '../../../../redux/blog'
import './style.css'

function BlogerB(props) {
    const DataMap = []
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const dataBlog = useSelector(state => state.blog)
    useEffect(() => {
        dispatch(GetBlog())
    },[])
    for (let i = 0; i < props.number; i++) {
        const elem = dataBlog.getBlog?.Data[i];
        DataMap.push(elem)
    }
    const HandleItem = (e) => {
        console.log(e.target.value);
        window.localStorage.setItem('MoreId', e.target.value)
        navigate('/more_blog')
    }
    return(
        <div className="BlogerB">
            <div className="BlogerBBox">
                <div className="BlogerBNav">
                    <h2>{props.title}</h2>
                    <NavLink to="/view">
                    <button>{props.name}</button>
                    </NavLink>
                </div>
            <ul>
            {dataBlog.getBlog.Success == true ? DataMap.map((elem, index) => 
            <li key={index}>
                <button value={elem.id} onClick={HandleItem}></button>
                <img src={elem.img} alt="" />
                <div className="SideTe">
                <h4>{elem.title}</h4>
                <p>{elem.text}</p>
                    <div className="BlogSDate">
                      <h5>{elem.name}</h5>
                      <h5>{elem.date}</h5>
                    </div>
                </div>
            </li>)
            :dataBlog.getBlog.Loading == true ? <i class="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataBlog.getBlog.Error == true ? <h3 className='Error'><i class="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
            </ul>
            </div>
        </div>
    )
}
export default BlogerB