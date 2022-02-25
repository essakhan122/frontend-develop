import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';


export default function InputBox({ name, placeholder, value, onChange, errorType, disabled, textValuePassword, textValueEmail }) {
    //     const [HelperText, setHelperText] = useState("")
    //     const handleOnBlur = () => {
    //         if (textValuePassword.length === 0) {
    //             setHelperText(name + " " + "is required");
    //         }
    //         if (textValuePassword.length > 0) {
    //             setHelperText("");
    //         }
    //         if (textValueEmail.length === 0) {
    //             setHelperText(name + " " + "is required");
    //         }
    //         if (textValueEmail.length > 0) {
    //             setHelperText("");
    //         }

    //     }
    //     return (
    //         <div>
    //             <TextField onBlur={handleOnBlur} disabled={disabled} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} label={placeholder} variant="filled" onChange={onChange} helperText={HelperText} />
    //         </div>
    //     )
    // }


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
    const [HelperText, setHelperText] = useState("")
    const handleOnBlur = () => {
        if (textValuePassword.length === 0) {
            setHelperText(name + " " + "is required");
        }
        if (textValuePassword.length > 0) {
            setHelperText("");
        }
        if (textValueEmail.length === 0) {
            setHelperText(name + " " + "is required");
        }
        if (textValueEmail.length > 0) {
            setHelperText("");
        }
    }
    switch (type) {



        case 'password':

            return (<div>

                <TextField disabled={disabled} type={values.showPassword ? 'text' : type} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} label={placeholder} variant="filled"

                    onChange={onChange} error={false} helperText={name + " " + "is required"}

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

                <TextField onBlur={handleOnBlur} disabled={disabled} id="filled-basic" style={{ paddingBottom: "10px", width: "350px" }} label={placeholder} variant="filled" onChange={onChange} helperText={HelperText} />

            </div>)





    }
}