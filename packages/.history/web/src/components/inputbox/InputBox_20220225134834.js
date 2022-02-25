import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';


export default function InputBox({ name, placeholder, value, onChange, errorType, disabled, PasswordValidation, emailValidation }) {
    let helperText;
    console.log(PasswordValidation)
    const handleOnBlur = () => {
        if (PasswordValidation) {
            helperText = name + " " + "is required"
            console.log("password11")
        }
        else if (emailValidation) {
            helperText = name + " " + "is required"
            console.log("email22")

        }
    }
    return (
        <div>
            <TextField onBlur={handleOnBlur} disabled={disabled} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} label={placeholder} variant="filled" onChange={onChange} helperText={helperText} />
        </div>
    )
}

