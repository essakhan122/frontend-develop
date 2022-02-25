import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function InputBox ({name,placeholder,value,onChange}) {
    const [textValue,setTextValue]=useState('');
    let boxType;
    let disabled;
    if(placeholder.includes("password")){
         boxType="Password"
    }
    else{
        boxType=placeholder;
    }
    const handleChange = (event) => {
        setTextValue( event.target.value);
      }
      if(textValue){
         disabled=false
      }
    return (
        <div>
        <TextField id="filled-basic" disabled={disabled} style={{paddingBottom:"10px",width:"350px"}} onChange={handleChange} label={placeholder} variant="filled" error={false} helperText={boxType +" "+ "is required"}/>
        </div>
    )
}

