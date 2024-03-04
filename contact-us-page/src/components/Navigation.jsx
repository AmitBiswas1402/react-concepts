import React from 'react'

function Navigation() {
  return (
    <nav className='flex justify-between'>
        <div>
            <img src="/images/logo.png" alt="logo" />
        </div>

        <ul className='flex justify-between gap-6 font-semibold'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation