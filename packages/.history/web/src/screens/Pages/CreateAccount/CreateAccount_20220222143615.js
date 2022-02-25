import React from 'react';
import Buttons from '../../../components/Button/Button'
import InputBox from '../../../components/inputbox/InputBox'
export default function CreateAccount() {
    return (
     <div>
      
    <InputBox name="name" placeholder="Full Name"/>
    <InputBox name="email" placeholder="Email"/>
    <InputBox name="password" placeholder="Password"/>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <Buttons name="Sign In" type="SIGN_IN" variant="contained" />
    <Buttons name="Create account" variant = "outlined" />
</div>
     </div>
    )
  }