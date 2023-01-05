import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProject } from '../../../../redux/project'
import { API_URL } from '../../../../utils'
import './style.css'

function Project() {
    const dispatch = useDispatch()
    const dataProject = useSelector(state => state.project)
    useEffect(() => {
      dispatch(GetProject())
    },[])
    return(
        <>
        <div className="Project">
            <h1>My Project</h1>
            <div className="ProNav">
                <button>Woocommerce</button>
                <button>Blog</button>
                <button>Education</button>
                <button>Technology</button>
                <button>Agency</button>
            </div>
            <ul>
            {dataProject.getProject.Success == true ? dataProject.getProject?.Data.map((elem, index) => 
            <li key={index}>
                <img src={elem.img} alt="img" />
                <div className="LiTexts">
                <h3>{elem.name}</h3>
                <button>View</button>
                </div>
            </li>)
            :dataProject.getProject.Loading == true ? <i class="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataProject.getProject.Error == true ? <h3 className='Error'><i class="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
            </ul>
        </div>
        </>
    )
}
export default Project