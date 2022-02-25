import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

export default function InputBox({ name, placeholder, value, onChange, disabled, textValuePassword, textValueEmail, textValueFullName, type }) {

    const [values, setValues] = useState({

        showPassword: false,

    });
    const handleClickShowPassword = () => {

        setValues({

            ...values,

            showPassword: !values.showPassword,

        });

    };
    const handleMouseDownPassword = (event) => {

        event.preventDefault();


    };
    const [HelperTextPassword, setHelperTextPassword] = useState("")
    const [HelperTextEmail, setHelperTextEmail] = useState("")
    const [HelperTextName, setHelperTextName] = useState("")
    const handleOnBlur = () => {
        if (textValuePassword.length === 0 && type === "password") {
            setHelperTextPassword("Password is required");
        }
        else {
            setHelperTextPassword("");
        }
        if (textValueEmail.length === 0 && type === "email") {
            setHelperTextEmail("Email is required");
        }
        else {
            setHelperTextEmail("");
        }
        if (textValueFullName.length === 0 && type === "name")

    }
    switch (type) {


        case 'password':

            return (<div>

                <TextField onBlur={handleOnBlur} disabled={disabled} type={values.showPassword ? 'text' : type} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} label={placeholder} variant="filled"

                    onChange={onChange} error={false} helperText={HelperTextPassword}

                    InputProps={{

                        endAdornment: (

                            <InputAdornment position="end" >

                                <IconButton

                                    aria-label="Toggle password visibility"

                                    onClick={handleClickShowPassword}

                                    onMouseDown={handleMouseDownPassword}

                                >

                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}

                                </IconButton>

                            </InputAdornment>

                        )

                    }}

                />



            </div>)



        default:

            return (<div>

                <TextField onBlur={handleOnBlur} disabled={disabled} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} label={placeholder} variant="filled" onChange={onChange} helperText={HelperTextEmail} />

            </div>)

    }
}