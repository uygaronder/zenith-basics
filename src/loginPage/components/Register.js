import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Register({regexes}) {
  const nameRef = useRef();
  const nameWarning = useRef();
  const regEmailRef = useRef();
  const reqEmailWarning = useRef();
  const regPasswordRef = useRef();
  const regPasswordWarning = useRef();
  const rePasswordRef = useRef();
  let submitted = false;
  let valid = false;

  const validateRegex = (value, regex) => {
    if(value === "" && !regex) return false;
    return regex.test(value);
  }

  const handleSubmit = () => {
    submitted = true;
    checkAll()
    console.log(valid)
    if(valid){
      console.log(process.env.REACT_APP_APIURL)
      fetch(`${process.env.REACT_APP_APIURL}/user/newUser`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: nameRef.current.value,
          email: regEmailRef.current.value,
          password: regPasswordRef.current.value
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if(response.message === 'success'){
          window.location.href = 'http://localhost:3000/login/signin'
        }
        else if(response.message === 'User already exists'){
          window.alert("User already exists");
        }
      })
    }
  }


  const checkAll = () => {
    const regex = [regexes.fullnameRegex, regexes.emailRegex, regexes.passwordRegex]
    const ids = ['nameInput', 'reqEmailInput', 'reqPasswordInput']
    const warnings =[nameWarning, reqEmailWarning, regPasswordWarning]
    const refs = [nameRef, regEmailRef, regPasswordRef]
    const warningTexts = ['Enter a valid name', 'Enter a valid email', 'Enter a valid password']
    valid = true;
    checkRePassword(true);
    for (let i = 0; i < ids.length; i++) {
      if (validateRegex(refs[i].current.value, regex[i])) {
        warnings[i].current.innerText = '';
        warnings[i].current.classList.remove('shown');
        refs[i].current.classList.remove('invalid');
      } else {
        warnings[i].current.innerText = warningTexts[i];
        warnings[i].current.classList.add('shown');
        refs[i].current.classList.add('invalid');
        valid = false;
      }
    }
  }

  const toBeChecked = (e) => {
    if (!submitted) return;
    const regex = [regexes.fullnameRegex, regexes.emailRegex, regexes.passwordRegex]
    const ids = ['nameInput', 'reqEmailInput', 'reqPasswordInput']
    const warnings =[nameWarning, reqEmailWarning, regPasswordWarning]
    const refs = [nameRef, regEmailRef, regPasswordRef]
    const warningTexts = ['Enter a valid name', 'Enter a valid email', 'Enter a valid password']
    valid = true;
    for (let i = 0; i < ids.length; i++) {
      if (e.target.id === ids[i]) {
        if (validateRegex(e.target.value, regex[i])) {
          warnings[i].current.innerText = '';
          warnings[i].current.classList.remove('shown');
          refs[i].current.classList.remove('invalid');
        } else {
          warnings[i].current.innerText = warningTexts[i];
          warnings[i].current.classList.add('shown');
          refs[i].current.classList.add('invalid');
          valid = false;
        }
      }
    }
    checkRePassword(false);
  }

  const checkRePassword = (render) => {
    valid = regPasswordRef.current.value == rePasswordRef.current.value;
    if(!render) return;
    if (regPasswordRef.current.value !== rePasswordRef.current.value) {
      regPasswordWarning.current.innerText = 'Passwords do not match';
      regPasswordWarning.current.classList.add('shown');
      regPasswordRef.current.classList.add('invalid');
      rePasswordRef.current.classList.add('invalid');
    } else {
      regPasswordWarning.current.innerText = '';
      regPasswordWarning.current.classList.remove('shown');
      regPasswordRef.current.classList.remove('invalid');
      rePasswordRef.current.classList.remove('invalid');
    }
  }

  return (
    <>
      <span className='loginBox'>
        <h1>Create An Account</h1>
        <span className='inputContainer'>
          <p>Enter Your Name</p>
          <input type='text' id='nameInput' name='name' ref={nameRef} onChange={(e) => toBeChecked(e)} placeholder='First and Last Name' />
          <span ref={nameWarning} className='warning'></span>
        </span>
        <span className='inputContainer'>
          <p>Email adress</p>
          <input ref={regEmailRef} id='reqEmailInput' onChange={(e) => toBeChecked(e)} type='email' name='email' />
          <span ref={reqEmailWarning} className='warning'></span>
        </span>
        <span className='inputContainer'>
          <p>Password</p>
          <input ref={regPasswordRef} onChange={(e) => toBeChecked(e)} id='reqPasswordInput' type='password' name='password' placeholder='At least 6 characters' />
          <span ref={regPasswordWarning} className='warning'></span>
        </span>
        <span className='inputContainer'>
          <p>Re-enter password</p>
          <input ref={rePasswordRef} id='rePasswordInput' onChange={() => checkRePassword(true)} type='password' name='password' />
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