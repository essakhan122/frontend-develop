import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function InputBox ({name,placeholder,value,onChange,errorType}) {
    let boxType;
    if(placeholder.includes("password")){
         boxType="Password"
    }
    else{
        boxType=placeholder;
    }

//      function handleChange(event) {
//     setName(event.target.value);
//   }
  
    return (
        <div>
        <TextField  id="filled-basic" style={{paddingBottom:"10px",width:"350px"}} label={placeholder} variant="filled" onChange= {onChange} error={false} helperText={boxType +" "+ "is required"}/>
        </div>
    )
}

