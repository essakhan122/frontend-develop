import React from 'react';
import React, { useState, useEffect } from 'react'
import Buttons from '../../../components/Button/Button'
import InputBox from '../../../components/inputbox/InputBox'
export default function CreateAccount() {
  const [textValueFullName, setTextValueFullName] = useState('');
  const [textValuePassword, setTextValuePassword] = useState('');
  const [textValueEmail, setTextValueEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (textValueFullName.length > 0 && textValuePassword.length > 0 && textValueEmail.length) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }

  }, [textValueFullName, textValuePassword, textValueEmail]);
  const handleChange = (event, name) => {
    if (name === "email") {
      setTextValueEmail(event.target.value)
    }
    else if (name === "password") {
      setTextValuePassword(event.target.value)
    }
    else {
      setTextValueFullName(event.target.value)
    }
  }



  return (
    <div>

      <InputBox name="name" placeholder="Full Name" />
      <InputBox name="email" placeholder="Email" />
      <InputBox name="password" placeholder="Password" />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Buttons name="Sign In" type="SIGN_IN" variant="contained" />
        <Buttons name="Create account" variant="outlined" disabled={disabled} />
      </div>
    </div>
  )
}