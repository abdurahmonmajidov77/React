import { useEffect, useRef, useState } from "react";
import axios from "axios";

function List() {
    const intN = useRef();
    const intA = useRef();
    const intT = useRef();
    const intR = useRef();
    const intP = useRef();
    const Over = useRef();
    const [user, setUser] = useState([])
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/users").then((resp) => {
            const Arr = []
            resp.data.map(e => {
                if (`${e.type}` == window.localStorage.getItem('side')) {
                    Arr.push(e)
                }
                setUser(Arr)
            })
        })
    }, [user])
    const HandleModal = async (e) => {
        e.preventDefault();
        const info = {
            name: intN.current.value,
            age: intA.current.value,
            phone: intP.current.value,
            type: window.localStorage.getItem('side'),
            target: intT.current.value,
            record: intR.current.value
        }
        await axios.post("http://localhost:8000/users", info)
        intN.current.value = null
        intA.current.value = null
        intT.current.value = null
        intR.current.value = null
        intP.current.value = null
        Over.current.style.display = "none"
        setModal(false)
    }
    const HandleDel = async (e) => {
        await axios.delete(`http://localhost:8000/users/${e.target.value}`)
    }
    const HandleModBnt = () => {
        setModal(true)
        Over.current.style.display = "block"
    }
    const Overlay = () => {
        setModal(false)
        setModal1(false)
        Over.current.style.display = "none"
    }
    return (
        <>
            <div className="Main">
                <h1 className="MainTitle">ORGANIZATIONS LISTING</h1>
                <button className="MainTopBtn"><i class="fa-sharp fa-solid fa-user"></i>Add Admin</button>
                <div className="MainBox">
                    <div className="MainBoxTop">
                        <h2 className="MainTopTitle">Orgainzations</h2>
                        <button className="MainTopBtn" onClick={HandleModBnt}
                        ><i class="fa-sharp fa-solid fa-user"></i>Add user</button>
                    </div>
                    <div className="MainBoxMid">
                        <div className="MainMidList">
                            <h3 className="MainMidTitle">No</h3>
                            <h3 className="MainMidTitle">Name</h3>
                            <h3 className="MainMidTitle">Age</h3>
                            <h3 className="MainMidTitle">Target</h3>
                            <h3 className="MainMidTitle">Reyting</h3>
                            <h3 className="MainMidTitle">Phone</h3>
                        </div>
                        <h3 className="MainMidTitle act">Action</h3>
                    </div>
                    <div className="MainBot">
                        {user.map((elem, index) =>
                            <div className="MainbotItem" key={index}>
                                <p className="mainbottext">{elem.id}</p>
                                <p className="mainbottext">{elem.name}</p>
                                <p className="mainbottext">{elem.age}</p>
                                <p className="mainbottext">{elem.target}</p>
                                <p className="mainbottext">{elem.record}</p>
                                <p className="mainbottext">{elem.phone}</p>
                                <div className="btnnbtn">
                                    <button className="mainbtnbot">Update</button>
                                    <button className="mainbtnbot" value={elem.id} onClick={HandleDel}>Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                    {modal ?
                        <form className="modal" onSubmit={HandleModal}>
                            <h2 className="modTitle">Add New User</h2>
                            <p className="modText">by adding a new user you are giving them permission to make changes.</p>
                            <input required ref={intN} type="text" placeholder="Enter User Name" />
                            <input required ref={intA} type="text" placeholder="Enter User Age" />
                            <input required ref={intT} type="text" placeholder="Enter User Target" />
                            <input required ref={intR} type="text" placeholder="Enter User Reyting" />
                            <input required ref={intP} type="text" placeholder="Enter User Phone" />
                            <div className="modBox">
                                <input type="checkbox" required/>
                                <p className="modLink">I grant permission</p>
                            </div>
                            <button className="modBtn" type="submit">Add User</button>
                        </form>
                     : null}
                    {modal1 ?
                        <form className="modal1">

                        </form>
                    : null}
            </div>
        </div>
        <div className="Overlay" onClick={Overlay} ref={Over}></div>
        </>
    );
}

export default List;