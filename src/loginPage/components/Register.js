import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Register({regexes}) {
  const nameRef = useRef();
  const regEmailRef = useRef();
  const regPasswordRef = useRef();
  const rePasswordRef = useRef();

  const validateRegex = (value, regex) => {
    return regex.test(value);
  }

  const handleSubmit = () => {
    console.log(validateRegex(regEmailRef.current.value, regexes.emailRegex))
  }

  return (
    <>
      <span className='loginBox'>
        <h1>Create An Account</h1>
        <span className='inputContainer'>
          <p>Enter Your Name</p>
          <input type='text' name='name' ref={nameRef} placeholder='First and Last Name' />
        </span>
        <span className='inputContainer'>
          <p>Email adress</p>
          <input ref={regEmailRef} type='email' name='email' />
          <span className='warning'></span>
        </span>
        <span className='inputContainer'>
          <p>Password</p>
          <input ref={regPasswordRef} type='password' name='password' placeholder='At least 6 characters' />
        </span>
        <span className='inputContainer'>
          <p>Re-enter password</p>
          <input ref={rePasswordRef} type='password' name='password' />
        </span>
        <span className='continueButton' onClick={() => {handleSubmit()}}>Continue</span>
      </span>
      <div className='loginDownText'>
        <p>Have An account?</p>
      </div>
      <Link className='linkToOther' to={"/login/signin"}><p>Login To Your Account</p></Link>
    </>
  )
}

export default Register