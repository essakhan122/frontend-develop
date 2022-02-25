import React from 'react'
import './Button.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { handleClick } from '../../Utils';
import usePasswordToggle from '../../../components/PasswordToggle/PasswordToggle';

export default function Buttons({ name, type, variant, disabled }) {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  return (
    <div style={{ display: "flex" }}>
      <Stack spacing={2} direction="row">
        <Button style={{ height: "50px", width: "160px" }} type={PasswordInputType} disabled={disabled} variant={variant} onClick={() => handleClick(type)}>{name}</Button>
      </Stack>
      <span className="password-toogle-icon">
        {ToggleIcon}
      </span>
    </div>
  )
}
