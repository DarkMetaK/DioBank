import { Controller } from 'react-hook-form';

import { IInput } from "./types";

function Input({label, name, labelStyles, control, errorMessage, ...rest}: IInput) {
    return (
      <>
      {label ? 
      <label htmlFor={name} className={labelStyles}>{label}</label>
      : null}
      <Controller
        name={name}
        control={control}
        render={({ field}) => <input {...field} {...rest} />}
      />
      {errorMessage ? 
        <p className='text-red-600 font-medium'>{errorMessage}</p>
        : null
      }
      </>
    )
  }
  
export default Input;