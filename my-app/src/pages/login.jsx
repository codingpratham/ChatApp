import React from "react"
function login(){
return(
<div className="formcontainer">
    <div className="formwrapper">
<span className="logo">LAMA CHAT</span>
<span className="title">Register</span>

<form action="">
<input type="email"  placeholder="Email"/>
<input type="password" placeholder="Password" />
<button>sign in</button>
 </form>
 <p>dont  have an account ? Register here</p>
    </div>
</div>

)
}

export default login;