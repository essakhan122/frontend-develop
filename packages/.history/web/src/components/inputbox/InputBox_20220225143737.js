import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';


export default function InputBox({ name, placeholder, value, onChange, errorType, disabled, textValuePassword, textValueEmail }) {
    const [HelperText, setHelperText] = useState("")
    const handleOnBlur = () => {
        if (textValuePassword.length === 0) {
            setHelperText(name + " " + "is required");
            console.log("222222")
        }
        if (textValueEmail.length === 0) {
            setHelperText(name + " " + "is required");
            console.log("11111")

        }
    }
    return (
        <div>
            <TextField onBlur={handleOnBlur} disabled={disabled} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} error label={placeholder} variant="filled" onChange={onChange} helperText={helperText} />
        </div>
    )
}

