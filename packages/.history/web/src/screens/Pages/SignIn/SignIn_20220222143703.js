import React, { useState } from 'react'
import Buttons from '../../../components/Button/Button'
import InputBox from '../../../components/inputbox/InputBox'
export default function SignIn() {
  const [signInValue,setSignInValue]=useState("");
  console.log(document.getElementsByClassName("email").value)
  // setSignInValue(document.getElementsByName("email").value)
  //  const [enableSignIn,setEnableSignIn]=useState(true);
  //  if(signInValue){
  //    setEnableSignIn(false)
  //    console.log("basheer")
  //  }
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
