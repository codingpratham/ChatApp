import React from "react"
import add from "../img/gallery.png"
function Register(){
return(
<div className="formcontainer">
    <div className="formwrapper">
<span className="logo">LAMA CHAT</span>
<span className="title">Register</span>

<form action="">
<input type="text" placeholder="Displayname"/>
<input type="email"  placeholder="email"/>
<input type="password" placeholder="password" />
<input style={{display:"none"}} type="file" id="file" />
<label htmlFor="file">
    <img src={add} alt="" />
    <span>Add an avatar</span>
</label>
<button>sign up</button>
 </form>
 <p>do you have a account ?login </p>
    </div>
</div>

)
}

export default Register;