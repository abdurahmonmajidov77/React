import Admin from "../pages/Admin"
import Sign from "../pages/Sign_in"
import Error from "../pages/Error"
import Home from "../pages/Home"
import About from "../pages/About"
import Contacts from "../pages/Contacts"
import Privacy from "../pages/Privacy"
import Bloger from "../pages/Bloger"
import View from "../pages/View"
import More from "../pages/More"

export const DataRouter = [
    {
        id : 1,
        path : '/admin',
        Element : <Admin/>
    },
    {
        id : 2,
        path : '/sign',
        Element : <Sign/>
    },
    {
        id : 3,
        path : '/*',
        Element : <Error/>
    },
    {
        id : 4,
        path : '/',
        Element : <Home/>
    },
    {
        id : 5,
        path : '/about',
        Element : <About/>
    },
    {
        id : 6,
        path : '/contact',
        Element : <Contacts/>
    },
    {
        id : 7,
        path : '/privacy',
        Element : <Privacy/>
    },
    {
        id : 8,
        path : '/bloger',
        Element : <Bloger/>
    },
    {
        id : 9,
        path : '/view',
        Element : <View/>
    },
    {
        id : 10,
        path : '/more_blog',
        Element : <More/>
    }
]