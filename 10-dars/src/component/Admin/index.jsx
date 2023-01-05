import './style.css';
import { GetUser } from "../../redux/user";
import { PostUser } from '../../redux/user';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from 'react';

function Admin() {
    const dispatch = useDispatch()
    const dataUser = useSelector(state => state.user)
    useEffect(() => {
        dispatch(GetUser())
    },[])
    const Name = useRef()
    const Email = useRef()
    const Password = useRef()
    const addUser = async(e) => {
        e.preventDefault()
        const body = {
            name : Name.current.value,
            email : Email.current.value,
            password : Password.current.value
        }
        await dispatch(PostUser(body))
        dispatch(GetUser())
        Name.current.value = null
        Email.current.value = null
        Password.current.value = null
    }
    return (
    <div className="Admin">
        <div className="AdminNav">
            <h2>Admin Panel</h2>
        </div>
        <div className="Tab">
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Activition</th>
            </thead>
            <tbody className='tbody'>
                {dataUser.getUser.Success == true ? dataUser.getUser?.Data.map((elem, index) => 
                    <tr key={index}>
                        <td><p>{elem.id}</p></td>
                        <td><p>{elem.name}</p></td>
                        <td><p>{elem.email}</p></td>
                        <td><div className="btnBoc"><button>Edit</button><button>Delete</button></div></td>
                    </tr>
                ): dataUser.getUser.Loading == true ? <p className='Loading'>Loading...</p>:dataUser.getUser.Error == true ? <p className='Error'>Error 500</p> : null}
            </tbody>
        </table>
        </div>
        <div className="fror">
        <form className='form' onSubmit={addUser}>
            <input ref={Name} type="text" placeholder='Enter Admin Name' />
            <input ref={Email} type="email" placeholder='Enter Admin Eamil'/>
            <input ref={Password} type="passwod" placeholder='Enter Admin Password'/>
            <button type='submit'>+ Add Admin</button>
        </form>
        </div>
    </div>
  );
}

export default Admin;