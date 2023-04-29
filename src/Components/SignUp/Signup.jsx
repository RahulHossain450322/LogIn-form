import {  } from 'react'
import './Signup.css'
import { AiFillEyeInvisible } from 'react-icons/ai';

function login() {
  const show=()=>{
    const passIcon = document.querySelector('.passwordLabel');
    passIcon.classList.add('show')
  }
  const blur=()=>{
    const passIcon = document.querySelector('.passwordLabel');
    passIcon.classList.remove('show')
  }

  return (
    <section className='login'>
      <form className='signup'>
        <div className='loginLogo mb-5 mx-3'>
          <h2 className='football text-light'>FOOTBALL<span className='suru'>SHURU</span></h2>
        </div>
        <div className='mb-2'>
          <input name='name' className='form-control input' placeholder='Enter name' type='text' />
        </div>
        <div className='mb-2'>
          <input name='email' className='form-control input' placeholder='Enter email' type='email' />
        </div>
        <div className='mb-2'>
          <input name='phone' className='form-control input' placeholder='Enter phone' type='number' />
        </div>
        <div className='mb-3 form-password'>
          <label className='form-label passwordLabel'><AiFillEyeInvisible /></label>
          <input onBlur={blur} onFocus={show} className='form-control input passwordInput' name='password' placeholder='Pick a strong password' type='password'  />
        </div>
        <div className='mt-4'>
          <button className='loginBtn btn btn-danger w-100' type='submit'>Sign Up</button>
        </div>
      </form>
    </section>
  )
}

export default login;
