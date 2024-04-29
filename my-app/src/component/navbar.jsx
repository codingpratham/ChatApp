import React from 'react'

const navbar = () => {
  return (
    <div className='navbar'>
    
    <span className="Logo">Lama Chat</span>
    <div className="user">
     <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" id='img'/>
     <span>john </span>
     <button id='btn'>Logout</button>
    </div>
    </div>
  )
}

export default navbar