import React, { useState,useEffect } from 'react'
import Buttons from '../../../components/Button/Button'
import InputBox from '../../../components/inputbox/InputBox'
export default function SignIn() {
  
  const [textValue,setTextValue]=useState('');
    const [disabled,setDisabled]=useState(true);
  const handleChange = (text) =>{
    console.log("data : ",text)
  } 

  return (
    <div>  
    <InputBox name="email" placeholder="Email"onChange={(text)=>{
      handleChange(text)
    }}/>
    <InputBox  name="password" placeholder="Enter your password"/>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Buttons  name="Sign In" variant="contained"/>
    <Buttons  name ="Create account" type ="CREATE_ACCOUNT" variant="outlined"/>
    </div>  
    <div style={{justifyContent:"centre",marginLeft:"69px",marginTop:"12px"}}>
      <Buttons name="Forgot Password" styleName="touchable-opacity"/>
    </div>
    </div>
  )
}
