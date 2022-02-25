import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';


export default function InputBox({ name, placeholder, value, onChange, errorType, disabled, textValuePassword, textValueEmail }) {
    let helperText = "";
    let password = "";
    let email = "";
    useEffect(() => {
        password = textValuePassword;
        email = textValueEmail;


    }, [textValuePassword, textValueEmail])

    const handleOnBlur = () => {
        if (password && password.length < 0) {
            helperText = name + " " + "is required"
        }
        else if (email && email.length < 0) {
            helperText = name + " " + "is required"

        }
    }
    return (
        <div>
            <TextField onBlur={handleOnBlur} disabled={disabled} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} label={placeholder} variant="filled" onChange={onChange} helperText={helperText} />
        </div>
    )
}

