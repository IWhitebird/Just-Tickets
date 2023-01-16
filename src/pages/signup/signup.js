import React from "react"
import "./signup.css"
import { Link } from "react-router-dom"
import axios from "axios"

const Signup = () => {
  const [user,setUser]= React.useState({
    uname:"",
    email:"",
    password:"",
    repassword:"",
  })
  const handleChange = e =>{
    const {name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  const register = ()=>{
    const {uname,email,password,repassword} = user
    if(uname && email && password && (password === repassword)){
      axios.post("http://localhost:8000/signup", user)
      .then(res => console.log('user registration successful'))
    }else{
      alert("Invalid Input")
    }
  }

  return (
<div className="signup-box">
  <h2>SIGN UP</h2>
  <form action="POST">
    <div className="user-box-signup">
      <input type="text" name="uname" value={user.uname} placeholder="Enter your username" onChange={handleChange}/>
      <label>Username</label>
    </div>
    <div className="user-box-signup">
      <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}/>
      <label>Email</label>
    </div>
    <div className="user-box-signup">
      <input type="text" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}/>
      <label>Password</label>
    </div>
    <div className="user-box-signup">
      <input type="text" name="repassword" value={user.repassword} placeholder="Re-enter your password" onChange={handleChange}/>
      <label>Confirm Password</label>
    </div>
    <div className="regButton" onClick={register}>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      SUBMIT
    </a>
    </div>
    <Link to="/pages/signup">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      BACK TO LOGIN
    </Link>
  </form>
</div>
  )
}

export default Signup


