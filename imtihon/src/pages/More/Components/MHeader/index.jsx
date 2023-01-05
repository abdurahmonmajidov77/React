import './style.css'
import MoreImg from '../../../../assets/Header.png'
import { useDispatch, useSelector } from 'react-redux'
import { GetBlogMore } from '../../../../redux/blog'
import { useEffect } from 'react'

function MHeader() {
    const Ider = window.localStorage.getItem('MoreId')
    const dispatch = useDispatch()
    const dataBlog = useSelector(state => state.blog)
    useEffect(() => {
        dispatch(GetBlogMore(Ider))
    },[])
    const Data = dataBlog.getBlogMore?.Data
    return(
        <div className="MHeader">
            <img src={MoreImg} alt="" />
            <div className="MHTexts">
                <h1>{Data.title}</h1>
                <div className="MHTIcons">
                    <div className="MHTIBox">
                        <i className='fa-solid fa-calendar'></i>
                        <h4>{Data.date}</h4>
                    </div>
                    <div className="MHTIBox">
                        <i className='fa-solid fa-user'></i>
                        <h4>{Data.name}</h4>
                    </div>
                </div>
                <div className="MHBrands">
                    <button>
                        <i className='fa-brands fa-facebook'></i>
                        Share on Facebook
                    </button>
                    <button>
                        <i className='fa-brands fa-twitter'></i>
                        Share on Twitter
                    </button>
                </div>
            </div>
        </div>
    )
}
export default MHeader