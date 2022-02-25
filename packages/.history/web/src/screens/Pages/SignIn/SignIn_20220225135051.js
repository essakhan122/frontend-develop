import React, { useState, useEffect } from 'react'
import Buttons from '../../../components/Button/Button'
import InputBox from '../../../components/inputbox/InputBox'

export default function SignIn() {

  const [textValueEmail, setTextValueEmail] = useState('');
  const [textValuePassword, setTextValuePassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [emailValidation, setEmailValidation] = useState(false);
  const [PasswordValidation, setPasswordValidation] = useState(false);

  useEffect(() => {
    if (textValueEmail.length > 0 && textValuePassword.length > 0) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }
    if (textValueEmail.length < 0) {
      setEmailValidation(true)
    }
    if (textValuePassword.length < 0) {
      setPasswordValidation(true)
    }

  }, [textValueEmail, textValuePassword]);
  const handleChange = (event, name) => {
    if (name === "email") {
      setTextValueEmail(event.target.value)
    }
    else {
      setTextValuePassword(event.target.value)
    }
  }
  console.log(emailValidation, "signin")
  return (
    <div>
      <InputBox emailValidation={emailValidation} name="Email" textValueEmail={textValueEmail} placeholder="Email" onChange={(text) => {
        handleChange(text, "email")
      }} />
      <InputBox name="Password" PasswordValidation={PasswordValidation} textValuePassword={textValuePassword} placeholder="Enter your password" onChange={(text) => {
        handleChange(text, "password")
      }} />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Buttons name="Sign In" variant="contained" disabled={disabled} />
        <Buttons name="Create account" type="CREATE_ACCOUNT" variant="outlined" />
      </div>
      <div style={{ justifyContent: "centre", marginLeft: "69px", marginTop: "12px" }}>
        <Buttons name="Forgot Password" styleName="touchable-opacity" />
      </div>
    </div>
  )
}
