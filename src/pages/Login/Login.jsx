import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [singState, setSignState] = useState('Sign In')

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h2>{singState}</h2>
        <form>
          {singState==="Sign Up"?<input type="text" placeholder='Your Name' />:<></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>{singState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {singState==="Sign Up"?
          <p>Already have Account? <span onClick={()=>{
            setSignState("Sign In")
          }}>Sign In Now</span></p>:
          <p>New to Netflix?<span onClick={()=>{
            setSignState("Sign Up")
          }}>Sign Up Now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
