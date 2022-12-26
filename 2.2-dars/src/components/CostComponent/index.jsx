import './app.css';
import Quest from './Question.png'
import { useRef, useState } from 'react';

function Cost() {
    const OverlaY = useRef();
    const Modal = useRef();
    const Modal1 = useRef();
    const Accept = () => {
        Modal.current.style.display = "none"
        Modal1.current.style.display = "flex"
        OverlaY.current.style.display = "block"
    }
    const DemoBtn = () => {
        Modal.current.style.display = "block"
        OverlaY.current.style.display = "block"
    }
    const Overlay = () => {
        Modal.current.style.display = "none"
        Modal1.current.style.display = "none"
        OverlaY.current.style.display = "none"
    }
  return (
    <>
        <div className='Cost'>
            <div className='CostContainer'>
                <p className='CostText'>Pricing</p>
                <h1 className='CostTitle'>Pricing Policy</h1>
                <div className='CostList'>
                    <div className='CostItem'>
                        <h3 className='CostSubtext'>For Starter</h3>
                        <h2 className='CostSubtitle'>$1499</h2>
                        <div className='CostBox'>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Feedback Categorization</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Features prioritization</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Real-time collaboration</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Feedback loop notifications</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Essential dev tools integrations</div>
                        </div>
                        <button className='CostBnt' onClick={DemoBtn}>Request Demo</button>
                    </div>
                    <div className='CostItem'>
                        <h3 className='CostSubtext'>For Teams</h3>
                        <h2 className='CostSubtitle'>$2999</h2>
                        <div className='CostBox'>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Feedback Categorization</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Features prioritization</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Real-time collaboration</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Feedback loop notifications</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Essential dev tools integrations</div>
                        </div>
                        <button className='CostBnt' onClick={DemoBtn}>Request Demo</button>
                    </div>
                    <div className='CostItem'>
                        <h3 className='CostSubtext'>For Company</h3>
                        <h2 className='CostSubtitle'>Custom</h2>
                        <div className='CostBox'>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Feedback Categorization</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Feedback loop notifications</div>
                            <div className='CostInbox'><i className='fa-sharp fa-solid fa-check'></i>Essential dev tools integrations</div>
                        </div>
                        <button className='CostBnt' onClick={DemoBtn}>Contact Us</button>
                    </div>
                </div>
                <div className='CostModal' ref={Modal}>
                    <img src={Quest} alt="" />
                    <h3 className='CostModTitle'>Mahsulotni rostan ham sotib olmoqchimisiz ?</h3>
                    <div className='CostModBtnBox'>
                        <button className='CostModBtn' onClick={Overlay}>Bekor qilish</button>
                        <button className='CostModBtn' onClick={Accept}>Tasdiqlash</button>
                    </div>
                </div>
                <div className='CostModal1' ref={Modal1}>
                    <i className='fa-sharp fa-solid fa-check'></i>
                    <h3 className='CostModTitle1'>Faolashtirish muaffaqiyatli yakulandi</h3>
                    <button className='CostModBtn1' onClick={Overlay}>OK</button>
                </div>
            </div>
        </div>
        <div className="Overlay" ref={OverlaY} onClick={Overlay}></div>
    </>
  );
}

export default Cost;