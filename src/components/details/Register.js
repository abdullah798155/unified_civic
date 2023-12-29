import React, { useState,useEffect } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, CardActions } from '@mui/material';
import './login.css'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navreg from '../navbar/Navreg'

const Register = () => {
    const navigate = useNavigate();
  let {register,handleSubmit,formState:{errors}} = useForm()

  const submit = async (data)=>{
    await axios.post('http://localhost:3001/register',data)
    .then(navigate('/login'))
    .catch((err)=>console.log(err))
    console.log(data);
   
    }
      
  return (
    <div>
      <Navreg/>
    <div className='d-flex justify-content-center align-items-center form-outer'>
      <form className='form'onSubmit={handleSubmit(submit)} >
        <h1>Register</h1>
        <div className='p-3'>
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("name")}
          />
        </div>
        <div className='p-3'>

          <TextField
            id="Phone no"
            label="Phoneno"
            variant="outlined"
         
            sx={{ width: "100%" }}
            {...register("phoneno")}
          />
        </div>
        <div className='p-3'>
          <TextField
            id="Username"
            label="Username"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("username")}
          />
        </div>
        <div className='p-3'>

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            sx={{ width: "100%" }}
            {...register("password")}
          />
        </div>
        
       
        <div className='d-flex justify-content-center p-3'>
          <Button variant="contained" type='submit' >Register</Button>


          </div>
         {/* <h5>New here? <a href="https://">Register</a></h5> */}

        
      </form>
    </div>
    </div>

  );
};

export default Register;