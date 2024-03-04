import React from 'react'

function Button3({...rest}) {
  return (
    <div 
    {...rest}
    className="flex font-bold bg-black py-4 px-8 rounded text-white cursor-pointer">
        Button
    </div>
  )
}

export default Button3