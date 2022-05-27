import { TextField } from '@mui/material'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material/'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
  err: boolean
  errLabel: string
  register: UseFormRegisterReturn
  label?: string
}

function InputPassword({ err, errLabel, register, label }: Props) {
  const [hidden, setHidden] = useState(true)

  const toggleHidden = () => {
    setHidden(!hidden)
  }
  return (
    <fieldset
      style={{
        border: 'none',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 15,
      }}
    >
      <TextField
        variant="standard"
        error={err}
        type={hidden ? 'password' : 'text'}
        helperText={errLabel}
        {...register}
        required
        sx={{ width: '90%' }}
        label={label}
      />
      {hidden ? (
        <Visibility onClick={toggleHidden} />
      ) : (
        <VisibilityOff onClick={toggleHidden} />
      )}
    </fieldset>
  )
}

export default InputPassword
