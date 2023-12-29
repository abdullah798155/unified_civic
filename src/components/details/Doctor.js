import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './doctor.css'
import Navbar from '../navbar/Navbr'

function Doctor() {

    let [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/doctors")
        .then(
            response => {
                setDoctors(response.data)
                console.log("atten "+response.data)
            }
        )
        .catch(err => {
            console.log(err)
        })
    },[])
  return (
    <div>
        <Navbar/>
    <div className='doctor-table d-flex justify-content-center'>
        <div>
            <h1 className="display-5">Hospital Data</h1>
        <table className='table table-bordered table-hover rounded-2 mt-4'>
            <thead className=''>
                <tr>
                    <th>Doctor Name</th>
                    <th>Specialization</th>
                    <th>Contact</th>
                    <th>Timing - start</th>
                    <th>Timing - end</th>
                </tr>
            </thead>
            <tbody>
                { 
                    doctors.map((doc)=>
                    <tr key={doc.id} className='d-table-row'>
                        <td>{doc.doctor_name}</td>
                        <td>{doc.specialization}</td>
                        <td>{doc.contact}</td>
                        <td>{doc.start_timing}</td>
                        <td>{doc.end_timing}</td>
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

export default Doctor