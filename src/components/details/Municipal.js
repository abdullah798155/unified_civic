import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './municipal.css'
import Navbar from '../navbar/Navbr'

function Municipal() {

    let [mun,setMun] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/municipal")
        .then(
            response => {
                setMun(response.data)
                // console.log(response.data)
            }
        )
        .catch(err => {
            console.log(err)
        })
    },[])
    // function getDoctorsData() {
       

    // }
    // useEffect(getDoctorsData,[])
  return (
    <div>
        <Navbar/>
    
    <div className='municipal-table d-flex justify-content-center'>
        <div>
            <h1 className="display-5">Municipal Data</h1>
        <table className='table table-bordered table-hover rounded-2 mt-4'>
            <thead className=''>
                <tr>
                    <th>Item_name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    
                </tr>
            </thead>
            <tbody>
                { 
                    mun.map((mun)=>
                    <tr key={mun.id} className='d-table-row'>
                        <td>{mun.Item_name}</td>
                        <td>{mun.Description}</td>
                        <td>{mun.Quantity}</td>
                        <td>{mun.Price}</td>
                        
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

export default Municipal