import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <>
      <span className='loginBox'>
        <h1>Sign in</h1>
        <span className='inputContainer'>
          <p>Email</p>
          <input type='email' name='email' placeholder='First and Last Name' />
        </span>
        <span className='inputContainer'>
          <p>Password</p>
          <input type='password' name='password' placeholder='At least 6 characters' />
        </span>
        <span className='continueButton'>Continue</span>
      </span>
      <div className='loginDownText'>
        <p>New to Zenith Basics?</p>
      </div>
      <Link className='linkToOther' to={"/login/register"}><p>Create a new account.</p></Link>
    </>
  )
}

export default SignIn