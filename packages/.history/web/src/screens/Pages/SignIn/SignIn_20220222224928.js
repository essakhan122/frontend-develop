import React, { useState } from 'react'
import Buttons from '../../../components/Button/Button'
import InputBox from '../../../components/inputbox/InputBox'
export default function SignIn() {
  const [signInValue,setSignInValue]=useState("");
  const [textValue,setTextValue]=useState('');
  let disabled=true;
  const handleChange = (event) => {
    setTextValue( event.target.email.value);
    console.log(textValue)
  }
  if(textValue){
     disabled=false
  }
  return (
    <div>  
    <InputBox className="email"  name="email" placeholder="Email"/>
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
