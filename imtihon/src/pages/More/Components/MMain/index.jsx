import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetBlogMore } from '../../../../redux/blog'
import { useEffect } from 'react'
import SideBlog from '../../../Bloger/components/SideBlog'
import BlogerB from '../../../Bloger/components/BlogerB'

function MMain() {
    const Ider = window.localStorage.getItem('MoreId')
    const dispatch = useDispatch()
    const dataBlog = useSelector(state => state.blog)
    useEffect(() => {
        dispatch(GetBlogMore(Ider))
    },[])
    const Data = dataBlog.getBlogMore?.Data
    return(
        <div className="MMain">
            <div className="MMMain">
                <div className="MMainBox">
                    <img src={Data.img} alt="" />
                    <h2>{Data.title}</h2>
                    <p>{Data.text}</p>
                </div>
                <BlogerB number="2" name="View All" title="Designer"/>
            </div>
            <SideBlog/>
        </div>
    )
}
export default MMain