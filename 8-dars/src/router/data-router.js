import { lazy } from "react"
const Home = lazy(() => import("../pages/HomePage"))
const Admin = lazy(() => import("../pages/AdminPage"))
const Error = lazy(() => import("../pages/ErrorPage"))
const Login = lazy(() => import("../pages/loginPage"))

export const DataRouter = [
    {
        id : 1,
        path : '/',
        Element : <Home/>
    },
    {
        id : 2,
        path :  '/admin',
        Element : <Admin/>
    },
    {
        id : 3,
        path : '/*',
        Element : <Error/>
    },
    {
        id : 4,
        path : '/login',
        Element : <Login/>
    }
]