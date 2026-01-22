import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite foods here</h2>
            <p>Discover a wide variety of cuisines made with love and delivered hot and fresh.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header