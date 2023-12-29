import React from 'react'
import Navbar from '../navbar/Navbr'
import Navlogin from '../navbar/Navlogin'
import { useParams } from 'react-router-dom';

function Contact() {
  let a= useParams();
  console.log(a);
  return (
    <div>
      {
        a.id ? <Navlogin/>:<Navbar/>
      }
    <div >
      <div className='p1'>
        <div className='bg-light c1'>

          <h1> Contact Details</h1>
          <br></br>
          <p>Contact no: 9XXXXXXXXX</p>
          <p>Email: lorem@aaa.com</p>
          <br></br>
          <br></br>
          <h1>Address Details</h1>
          <p>townhall 56 , lane 1002 </p>


        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact