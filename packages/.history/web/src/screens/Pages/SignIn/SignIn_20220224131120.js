import React, { useState,useEffect } from 'react'
import Buttons from '../../../components/Button/Button'
import InputBox from '../../../components/inputbox/InputBox'
export default function SignIn() {
  
  const [textValue,setTextValue]=useState('');
  const [disabled,setDisabled]=useState(true);
  useEffect(() => {
    if(textValue.length>0)
    {
      setDisabled(false);
    }
    else{
      setDisabled(true);
    }
  
     }, [textValue]);
  const handleChange = (event) =>{
    setTextValue(event.target.value)
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
