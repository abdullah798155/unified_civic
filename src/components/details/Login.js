import React, { useState,useEffect, useContext } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, CardActions } from '@mui/material';
import './login.css'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate, useOutletContext } from "react-router-dom";
import Navlogin from '../navbar/Navlogin';
import Footers from '../footer/Footers'

const Login = () => {
    const navigate = useNavigate();
  let {register,handleSubmit,formState:{errors}} = useForm()

  // setpath(path);
  const submit = async (data)=>{
    // console.log("ACTUALLLLLL :"+data.username+data.password)
    const verify = await axios.get(`http://localhost:3001/verify?username=${data.username}&password=${data.password}`, data);
    let f=0;
    for(let i=0;i<verify.data.length;i++){
      if(verify.data[i].username===data.username && verify.data[i].password===data.password){
        f=1;

        navigate('/home')
        window.location.reload();
        break;
      }
    }
    if(f===0){
      alert("Invalid Credentials")
    }
    }
      
  return (
    <div>
      <Navlogin/>
    <div className='d-flex justify-content-center align-items-center form-outer'>
      
      <form className='form'onSubmit={handleSubmit(submit)} >
        <h1>Login</h1>
        <div className='p-3'>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("username")}
          />
        </div>
        <div className='p-3'>

          <TextField
            id="password"
            label="password"
            variant="outlined"
            type="password"
            sx={{ width: "100%" }}
            {...register("password")}
          />
        </div>
        
       
        <div className='d-flex justify-content-center p-3'>
          <Button variant="contained" type='submit' >Login</Button>


          </div>
          <div>
         <h5>New here?</h5>
         <Button  onClick={()=>navigate('/register')}>Register</Button>
         </div>

        
      </form>
    </div>
    <Footers/>
    </div>

  );
};

export default Login;