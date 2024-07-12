'use client'
import React, { useState } from 'react'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        <h1>FileS</h1>
        {
            isLoggedIn ? 
            <div>
            <button>My Files</button>
            <button>Share</button>
            <button>Logout</button>
        </div> : 
            <div>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        }
       
    </div>
  )
}

export default Navbar