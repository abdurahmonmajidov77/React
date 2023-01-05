import { Routes , Route, useLocation } from "react-router-dom"
import {DataRouter} from './data-router'
import Navbar from "../pages/Navbar"
import Footer from "../pages/Footer"

function RoutesComponent() {
    const location = useLocation();
    return(
        <>
            {window.location.pathname == '/admin' || window.location.pathname == '/sign' ? null : <Navbar/>}
            <Routes>
                {DataRouter.map(elem => 
                    <Route key={elem.id} path={elem.path}  element={elem.Element}/>
                )}
            </Routes>
            {window.location.pathname == '/admin' || window.location.pathname == '/sign' ? null : <Footer/>}
        </>
    )
}

export default RoutesComponent