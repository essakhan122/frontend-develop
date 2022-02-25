import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';


export default function InputBox({ name, placeholder, value, onChange, errorType, disabled, textValuePassword, textValueEmail }) {
    let helperText = "";
    handleOnBlur = () => {
        if (textValuePassword.length < 0) {
            helperText = name + " " + "is required"
        }
        else if (textValueEmail.length < 0) {
            helperText = name + " " + "is required"
        }
    }
    return (
        <div>
            <TextField onBlur={handleOnBlur} disabled={disabled} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} label={placeholder} variant="filled" onChange={onChange} helperText={helperText} />
        </div>
    )
}

