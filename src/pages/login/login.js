import React from "react"
import "./login.css"

const Login = () => {
  return (
<div className="login-box">
  <h2>LOGIN</h2>
  <form>
    <div className="user-box">
      <input type="text" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="text" />
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      LOGIN
    </a>
  </form>
</div>
  )
}

export default Login


