import React, { useState, useEffect } from 'react'
import Buttons from '../../../components/Button/Button'
import InputBox from '../../../components/inputbox/InputBox'
import usePasswordToggle from '../../../components/PasswordToggle/PasswordToggle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignIn() {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const [textValueSignIn, setTextValueSignIn] = useState('');
  const [textValuePassword, setTextValuePassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (textValueSignIn.length > 0 && textValuePassword.length > 0) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }

  }, [textValueSignIn, textValuePassword]);
  const handleChange = (event, name) => {
    if (name === "email") {
      setTextValueSignIn(event.target.value)
    }
    else {
      setTextValuePassword(event.target.value)
    }
  }


  return (
    <div>
      <InputBox name="Email" placeholder="Email" onChange={(text) => {
        handleChange(text, "email")
      }} />
      <InputBox name="Password" placeholder="Enter your password" onChange={(text) => {
        handleChange(text, "password")
      }} />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Buttons name="Sign In" variant="contained" disabled={disabled} />
        <Buttons name="Create account" type="CREATE_ACCOUNT" variant="outlined" />
      </div>
      <div style={{ justifyContent: "centre", marginLeft: "69px", marginTop: "12px" }}>
        <Buttons name="Forgot Password" styleName="touchable-opacity" />
      </div>
      <span className="password-toogle-icon" style={{ position: "absolute", top: "8px", right: "10px", zIndex: "1000" }}>
        {ToggleIcon}
      </span>

    </div>
  )
}
