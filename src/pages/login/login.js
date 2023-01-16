import React from "react"
import "./login.css"
import { Link } from "react-router-dom"
import axios from "axios"

const Login = () => {

  const [ user, setUser] = React.useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("http://localhost:9002/login", user)
      .then(res => {
          alert(res.data.message)
      })
  }


  return (
<div className="login-box">
  <h2>LOGIN</h2>
  <form>
    <div className="user-box">
      <input type="text" name="email" value={user.email} placeholder="Enter your username" onChange={handleChange} />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="text" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}/>
      <label>Password</label>
    </div>
    <div className="regButton" onClick={login}>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      LOGIN
    </a>
    </div>
    <Link to="/pages/signup">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      SIGNUP
    </Link>
  </form>
</div>
  )
}

export default Login


