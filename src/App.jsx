import {  } from 'react'
import './App.css'
import logo from './Logo/FOOTBALLSHURU.png'
import { AiFillEyeInvisible } from 'react-icons/ai';

function App() {

  return (
    <section className='login'>
      <form className='logInForm'>
        <div className='loginLogo mb-5 mx-3'>
          <img src={logo} alt='logo' />
        </div>
        <div className='mb-2'>
          <input name='email' className='form-control input' placeholder='Enter email address' type='email' />
        </div>
        <div className='mb-3 form-password'>
          <label className='form-label passwordLabel'><AiFillEyeInvisible /></label>
          <input className='form-control input' name='password' placeholder='Enter password' type='password'  />
        </div>
        <div className='ms-2'>
          <input type='checkbox' className='form-check-input rounded-0 checkbox' />
          <span className='ms-3 text-light'>Remember me</span>
        </div>
        <div className='mt-4'>
          <button className='loginBtn btn btn-danger w-100' type='submit'>Log in</button>
        </div>
      </form>
    </section>
  )
}

export default App
