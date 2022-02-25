import React, { useState,useEffect } from 'react'
import Buttons from '../../../components/Button/Button'
import InputBox from '../../../components/inputbox/InputBox'
export default function SignIn() {
  
  const [textValueSignIn,setTextValueSignIn]=useState('');
  const [textValuePassword,setTextValuePassword]=useState('');
  const [disabled,setDisabled]=useState(true);
  useEffect(() => {
    if(textValueSignIn.length>0 && textValuePassword.length>0 )
    {
      setDisabled(false);
    }
    else{
      setDisabled(true);
    }
  
     }, [textValueSignIn,textValuePassword]);
  const handleChange = (event) =>{
    console.log(event.target.name)
    setTextValueSignIn(event.target.value)
  } 


  return (
    <div>  
    <InputBox name="Email" placeholder="Email"onChange={(text)=>{
      handleChange(text)
    }}/>
    <InputBox  name="Password" placeholder="Enter your password" onChange={(text)=>{
      handleChange(text)}}/>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Buttons  name="Sign In" variant="contained" disabled={disabled}/>
    <Buttons  name ="Create account" type ="CREATE_ACCOUNT" variant="outlined"/>
    </div>  
    <div style={{justifyContent:"centre",marginLeft:"69px",marginTop:"12px"}}>
      <Buttons name="Forgot Password" styleName="touchable-opacity"/>
    </div>
    </div>
  )
}
