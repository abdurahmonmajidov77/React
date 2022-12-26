import { useState } from "react"
import './app.css';

function ModalCom(){
    const [count, setCount] = useState(0)
    return(
        <>
            <div className="ModalCom">
                <h2 className="CountTitle">Hisoblagich</h2>
                <button className="CountBtn" onClick={
                    setCount(count => count + 1)
                }>+</button>
                <span>{count}</span>
                <button className="CountBtn" onClick={
                    setCount(count => count - 1)
                }>-</button>
            </div>
        </>
    )
}

export default ModalCom