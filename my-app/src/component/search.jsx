import React from 'react'

const search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder='Find a user' id='search'/>
      </div>
      <div className="userchat">
        <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userchatinfo">
          <span>jane</span>
        </div>
      </div>


    </div>
  )
}

export default search