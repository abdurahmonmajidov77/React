import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { GetBlog } from '../../../../redux/blog'
import './style.css'

function Blog(props) {
    const dispatch = useDispatch()
    const dataBlog = useSelector(state => state.blog)
      useEffect(() => {
          dispatch(GetBlog())
      },[])
    const DataMap = []
    for (let i = 0; i < props.number; i++) {
        const elem = dataBlog.getBlog?.Data[i];
        DataMap.push(elem)
    }
    return(
        <>
        <div className="Blogs">
            <h1>My Blog</h1>
            
            <ul>
                {dataBlog.getBlog.Success == true ? DataMap.map((elem, index) => 
                <li key={index}>
                    <img src={elem.img} alt="" />
                    <h3>{elem.title}</h3>
                    <p>{elem.text}</p>
                    <div className="BlogDate">
                      <h5>{elem.name}</h5>
                      <h5>{elem.date}</h5>
                    </div>
                </li>)
                :dataBlog.getBlog.Loading == true ? <i class="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataBlog.getBlog.Error == true ? <h3 className='Error'><i class="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
            </ul>
            <NavLink to="/Bloger">
            <button>Load More...</button>
            </NavLink>
        </div>
        </>
    )
}
export default Blog