import { useTransition } from "react"
import ModalCom from "./modalCom"
import ModalCop from "./modalCop"

function Modal() {
    return(
        // ModalCom = (false);
        // ModalCop = (true);
    <>
        <div className="Modal">
            <ModalCom/>
            <ModalCop/>
        </div>
    </>
    )
}

export default Modal