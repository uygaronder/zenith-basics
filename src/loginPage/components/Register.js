import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
      <span className='loginBox'>
        <h1>Create An Account</h1>
        <span className='inputContainer'>
          <p>Enter Your Name</p>
          <input type='text' name='name' placeholder='First and Last Name' />
        </span>
        <span className='inputContainer'>
          <p>Email adress</p>
          <input type='email' name='email' placeholder='First and Last Name' />
        </span>
        <span className='inputContainer'>
          <p>Password</p>
          <input type='password' name='password' placeholder='At least 6 characters' />
        </span>
        <span className='inputContainer'>
          <p>Re-enter password</p>
          <input type='password' name='password' />
        </span>
        <span className='continueButton'>Continue</span>
      </span>
      <div className='loginDownText'>
        <p>Have An account?</p>
      </div>
      <Link className='linkToOther' to={"/login/signin"}><p>Login To Your Account</p></Link>
    </>
  )
}

export default Register