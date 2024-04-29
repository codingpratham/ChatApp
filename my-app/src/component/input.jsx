import React from 'react'
import Img from "../img/image.png"
import Attach from "../img/attachment.png"

const input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type Something' />
      <div className="send">
        <img src={Attach} alt=""  className='attach'/>
        <input type='file' style={{ display: 'none' }} id='file' />
        <label htmlFor="file">
          <img src={Img} alt=""  className='attach'/>
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default input