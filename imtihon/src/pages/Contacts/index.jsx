import './style.css'
import Message from '../Home/components/Message'
import MapImg from '../../assets/Map.png'

function Contacts() {
    return(
        <>
        <div className="Contacts">
            <Message/>
            <div className="Map">
                <h1>Google Map Location</h1>
                <div className="MapImg">
                <img src={MapImg} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Contacts