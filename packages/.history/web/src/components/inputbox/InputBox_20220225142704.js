import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';


export default function InputBox({ name, placeholder, value, onChange, errorType, disabled, passwordValidation, emailValidation }) {
    let helperText;
    const handleOnBlur = () => {
        if (passwordValidation) {
            helperText = name + " " + "is required"
            console.log("222222")
        }
        else if (emailValidation) {
            helperText = name + " " + "is required"
            console.log("11111")

        }
    }
    return (
        <div>
            <TextField onBlur={handleOnBlur} disabled={disabled} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} label={placeholder} variant="filled" onChange={onChange} helperText={helperText} />
        </div>
    )
}

