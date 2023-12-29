import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './rationshop.css'
import Navbar from '../navbar/Navbr'

function Rationshop() {

    let [rationshops,setRationshops] = useState([]);
    const getRationshopData = ()=>{
        axios.get('http://localhost:3001/ration')
        .then((res)=>setRationshops(res.data))
    }
    useEffect(getRationshopData,[])
  return (
    <div>
        <Navbar/>
    <div className='rationshop-table'>
        <table className='table table-bordered table-hover rounded-2 mt-4'>
            <thead className=''>
                <tr>
                    <th>Rationshop Name</th>
                    <th>Subject</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                { 
                    rationshops.map((rationshop)=>
                    <tr key={rationshop.id} className='d-table-row'>
                        <td>{rationshop.name}</td>
                        <td>{rationshop.contact}</td>
                        <td>{rationshop.start_timing}</td>
                        <td>{rationshop.end_timing}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>   
    </div>
    </div>
  )
}

export default Rationshop