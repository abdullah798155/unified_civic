import React from 'react'
import { Outlet } from 'react-router-dom'
import MyCarousel from './MyCarousel'
import Footer from './footer/Footer'
import Navbr from './navbar/Navbr'

function Rootlayout() {
  const path= window.location.href.split('/')[3];
  console.log("path: "+path);
  return (
    <div>
        
        {/* <Navbr/> */}
        <Outlet/>
        {
         path==="login" ?null:<Footer/ >
        }
    </div>
  )
}

export default Rootlayout