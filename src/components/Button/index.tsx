import React from 'react'
import { IButton } from './types';

function Button({text, extraStyle, ...rest}: IButton) {
  return (
    <button className={`bg-blue-400 max-w-xs w-full rounded-md text-white py-2 px-3 hover:bg-blue-500 ${extraStyle ? extraStyle : null} disabled:bg-blue-200`} {...rest}>
      {text}
    </button>
  )
}

export default Button;
