import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footers() {
    return (
        
           
            <div className="footer mt-3 bottom">
                <ul className="nav justify-content-center border-bottom ">
                    <li className="nav-item"><Link to='/contact/eag' className="nav-link px-2 ">Contact</Link></li>
                    <li className="nav-item"><Link to='/contact/eag' className="nav-link px-2 ">Address</Link></li>
                </ul>
                <p className="text-center p-3">© 2023 Company, Inc</p>
            </div>
            
            
    )
}

export default Footers