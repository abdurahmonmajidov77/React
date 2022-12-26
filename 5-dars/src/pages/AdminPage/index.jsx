import { useEffect, useState } from "react";
import sidebarImg from "../../assets/white 1.png"
import axios from "axios";
import List from "../../components/ListComponent";

function Admin() {
    const [ side, setSide ] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/Sidebar").then((resp) => {
            setSide(resp.data)
        })
    }, [side])
    const HandleItem = (e) => {
        window.localStorage.setItem('side', e.target.value)
    }
    return (
      <>
      <div className='Admin'>
          <div className="Sidebar">
              <img src={sidebarImg} alt="" />
              <h1 className="sideTitle">Admin Panel</h1>
              <p className="Atext">Menu</p>
              <div className="btnBox">
                  {side.map((elem, index) => 
                    <button className="AItem" onClick={HandleItem} value={elem.Name} key={index}><i class="fa-sharp fa-solid fa-building"></i> {elem.Name}</button>
                  )}
              </div>
          </div>
          <List/>
      </div>
      </>
    );
  }
  
  export default Admin;