import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function InputBox ({name,placeholder,value,onChange}) {
    let boxType;
    if(placeholder.includes("password")){
         boxType="Password"
    }
    else{
        boxType=placeholder;
    }
    console.log(document.getElementById("filled-basic"));
    return (
        <div>
        <TextField id="filled-basic" style={{paddingBottom:"10px",width:"350px"}} label={placeholder} variant="filled" error={false} helperText={boxType +" "+ "is required"}/>
        </div>
    )
}

