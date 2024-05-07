import React, { useContext } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; 
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className="Logo">CONNECTIFY</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" id='img'/>
        <span>{currentUser.displayName} </span>
        <button id='btn'  onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
