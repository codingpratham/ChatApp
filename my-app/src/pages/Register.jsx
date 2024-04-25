import React from "react";

function Register(){
return(
<div className="fromcontainer">
    <div className="fromwrapper">
<span className="logo">Lama chat</span>
<span className="title">Register</span>

<form action="">
<input type="text" placeholder="displayname"/>
<input type="email"  placeholder="email"/>
<input type="password" placeholder="password" />
<input type="file" />
<button>sign up</button>
 </form>
 <p>do you have a account ?login </p>
    </div>
</div>

)
}

export default Register;