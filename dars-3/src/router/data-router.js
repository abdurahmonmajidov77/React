import Home from '../pages/home'
import About from '../pages/about_us'
import Cart from '../pages/cart'
import Gallery from '../pages/gallery'
import More from '../pages/more'
import Profile from '../pages/profile'
import Shop from '../pages/shop'

export const DataRouter = [
    {
        id : 1,
        path : '/',
        Element : <Home/>
    },
    {
        id : 2,
        path : '/*',
        Element : <About/>
    },
    {
        id : 3,
        path : '/cart',
        Element : <Cart/>
    },
    {
        id : 4,
        path : '/gallery',
        Element : <Gallery/>
    },
    {
        id : 5,
        path : '/more',
        Element : <More/>
    },
    {
        id : 6,
        path : '/profile',
        Element : <Profile/>
    },
    {
        id : 7,
        path : '/shop',
        Element : <Shop/>
    }
]