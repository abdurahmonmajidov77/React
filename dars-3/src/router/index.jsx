import { Routes , Route } from "react-router-dom"
import { DataRouter } from './data-router'
import Header from "../components/Header"
import Footer from "../components/Footer"

function RoutesComponent() {
    return(
        <>
            <Header/>
            <Routes>
                {DataRouter.map(elem => 
                    <Route key={elem.id} path={elem.path}  element={elem.Element}/>
                )}
            </Routes>
            <Footer/>
        </>
    )
}

export default RoutesComponent