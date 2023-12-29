import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './view.css'
import Navbar from '../navbar/Navbr'

function View() {

    let [Views,setViews] = useState([]);
    const getViews= ()=>{
        axios.get('http://localhost:3001/view')
        .then((res)=>setViews(res.data))
    }
    useEffect(getViews,[])
  return (
    <div>
        <Navbar/>
    <div className='view-table d-flex justify-content-center'>
        <div>
            <h1 className="display-5">Your complaints</h1>
        <table className='table table-bordered table-hover rounded-2 mt-4'>
            <thead className=''>
                <tr>
                    <th>Name</th>
                    <th>Pno</th>
                    <th>Domain</th>
                    <th>Against</th>
                    <th>Complaint</th>
                </tr>
            </thead>
            <tbody>
                { 
                    Views.map((view)=>
                    <tr key={view.id} className='d-table-row'>
                        <td>{view.name}</td>
                        <td>{view.pno}</td>
                        <td>{view.domain}</td>
                        <td>{view.against}</td>
                        <td>{view.complaint}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>   
        </div>
    </div>
    </div>
  )
}

export default View