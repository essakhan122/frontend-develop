import React from 'react'
import './Button.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {handleClick} from '../../Utils';
export default function Buttons({name, type,variant,disabled}) {
  return (
    <div style={{display:"flex"}}>
          <Stack spacing={2} direction="row">
      <Button className disabled={disabled} variant={variant} onClick={() => handleClick(type)}>{name}</Button>
    </Stack>
    </div>
  )
}
