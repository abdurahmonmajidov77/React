import Button from "../ButtonCommon";
import {useState} from "react"

function Input(){
    const [modal , setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    return(
        <>
        <Button onClick={openModal}/>
        {modal ? <div className="modal">
            Modal
        </div>: null}
        </>
    );
}

export default Input