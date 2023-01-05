import './style.css'
import ViewImg from '../../assets/Header.png'
import BlogerB from '../Bloger/components/BlogerB'
import SideBlog from '../Bloger/components/SideBlog'
import { useDispatch, useSelector } from 'react-redux'
import { GetBlog } from '../../redux/blog'
import { useEffect } from 'react'

function View() {
    const dispatch = useDispatch()
    const dataBlog = useSelector(state => state.blog)
    useEffect(() => {
        dispatch(GetBlog())
    },[])
    const DataLength = dataBlog.getBlog?.Data.length
    return(
        <div className="View">
            <div className="VHeader">
                <img src={ViewImg} alt="" />
                <h1>Archive</h1>
            </div>
            <div className="VMain">
                <BlogerB title="My All Blogs" number={DataLength}/>
                <SideBlog/>
            </div>
        </div>
    )
}
export default View