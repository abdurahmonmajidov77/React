import Login from "../pages/LoginPage"
import Admin from "../pages/AdminPage"
import Page from "../pages/404Page"

export const DataRouter = [
    {
        id : 1,
        path : window.localStorage.getItem('auth') ? '/admin' : '/*',
        Element : window.localStorage.getItem('auth') ? <Admin/> : <Page/>
    },
    {
        id : 2,
        path : '/',
        Element : <Login/>
    },
    {
        id : 3,
        path :  window.localStorage.getItem('auth') ? '/*' : '/*',
        Element : window.localStorage.getItem('auth') ? <Page/> : <Page/>
    }
]