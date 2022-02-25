import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function InputBox ({name,placeholder,value,onChange,disabled}) {
    let boxType;
    if(placeholder.includes("password")){
         boxType="Password"
    }
    else{
        boxType=placeholder;
    }
    const [textValue,setTextValue]=useState('');
    let disabled=true;
    useEffect(() => {
      handleChange((event) =>setTextValue(event.target.value));
    }, [textValue]);
    // const handleChange = (event) => {
    //   setTextValue( event.target.email.value);
    //   console.log(textValue)
    // }
    if(textValue){
       disabled=false
    }
  
    return (
        <div>
        <TextField id="filled-basic" style={{paddingBottom:"10px",width:"350px"}} label={placeholder} variant="filled" error={false} helperText={boxType +" "+ "is required"}/>
        </div>
    )
}

