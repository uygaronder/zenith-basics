import React from 'react'
import { Link } from 'react-router-dom'

function SignIn(emailRegex) {
  emailRegex = emailRegex.emailRegex
  const emailRef = React.useRef()
  const emailWarning = React.useRef()
  const passwordRef = React.useRef()
  const passwordWarning = React.useRef()
  const keepMeSignedInRef = React.useRef()

  let valid = false;
  let submitted = false;

  const checkIfValid = () => {
    if(!submitted) return;
    if (emailRef.current.value === '') {
      emailWarning.current.innerHTML = 'Please enter your email address.'
      emailWarning.current.classList.add('shown')
      emailRef.current.classList.add('invalid')
      valid = false
    } else if (!emailRegex.test(emailRef.current.value)) {
      emailWarning.current.innerHTML = 'Please enter a valid email address.'
      emailWarning.current.classList.add('shown')
      emailRef.current.classList.add('invalid')
      valid = false
    } else {
      emailWarning.current.innerHTML = ''
      emailWarning.current.classList.remove('shown')
      emailRef.current.classList.remove('invalid')
      valid = true
    }
  }

  const handleClick = () => {
    submitted = true;
    checkIfValid()
    if(valid){
      fetch(`${process.env.REACT_APP_APIURL}/user/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          keepMeSignedIn: keepMeSignedInRef.current.checked
        })
      })
      .then(res => res.json())
      .then(data => {
        if(data.message === 'success'){
          window.location.href = '/'
        } else {
          window.alert(data.message)
        }
      }
        
      )
    }
  }

  const handleAuthClick = () => {
    fetch(`${process.env.REACT_APP_APIURL}/user/testAuth`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      window.alert(data.message)
    })
  }
  
  return (
    <>
      <span className='loginBox'>
        <h1>Sign in</h1>
        <span className='inputContainer'>
          <p>Email</p>
          <input ref={emailRef} type='email' name='email' onChange={() => checkIfValid()} />
          <span ref={emailWarning} className='warning'></span>
        </span>
        <span className='inputContainer'>
          <p>Password</p>
          <input ref={passwordRef} type='password' name='password' />
          <span ref={passwordWarning} className='warning'></span>
        </span>
        <div id='keepSignedIn'>
          <p>Keep me signed in</p>
          <input type='checkbox' name='keepSignedIn' ref={keepMeSignedInRef} />
        </div>
        <span onClick={() => handleClick()} className='continueButton'>Continue</span>
        <span onClick={() => handleAuthClick()} className='continueButton'>Continue</span>
      </span>
      <div className='loginDownText'>
        <p>New to Zenith Basics?</p>
      </div>
      <Link className='linkToOther' to={"/login/register"}><p>Create a new account.</p></Link>
    </>
  )
}

export default SignIn