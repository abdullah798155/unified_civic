import Complaint from './components/complaint/Complaint'
import {Navigate, RouterProvider ,createBrowserRouter } from 'react-router-dom';
import Rootlayout from './components/Rootlayout';
import Home from './components/home/Home';
import './App.css'
import Doctor from './components/details/Doctor';
import Teachers from './components/details/Teachers';
import Rationshop from './components/details/Rationshop';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ViewComplaints from './components/ViewComplaints';
import Municipal from './components/details/Municipal';
import View from './components/details/View'
import Login from './components/details/Login';
import Register from './components/details/Register'
// import Contacts from './components/contact/Contacts'
function App() {
      
    const router=createBrowserRouter([
      {
        path:'/',
        element: <Navigate to={'/login'}/>,
      },
      {
        path:'/',
        element:<Rootlayout/>,
      children:[
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/complaint',
          element:<Complaint/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/home',
          element:<Home/>
        },
        {
          path:'/doctors',
          element:<Doctor/>
        },
        {
          path:'/teachers',
          element:<Teachers/>
        },
        {
          path:'/municipal',
          element:<Municipal/>
        },
        {
          path:'/view',
          element:<View/>
        },
        {
          path:'/rationshops',
          element:<Rationshop/>
        },{
          path:'/about-us',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/contact/:id',
          element:<Contact/>
        },
        {
          path:"/complaint-details",
          element:<ViewComplaints/>
        }
      ]
    }
    ])




  return (

    
    <div>
      <RouterProvider router={router}/>
    </div>
   
  );
}

export default App;