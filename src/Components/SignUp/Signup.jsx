import { useState } from 'react'
import './Signup.css'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword,updateProfile,onAuthStateChanged } from "firebase/auth";
import firebaseConfig from '../firebaseConfig.jsx';
console.log(firebaseConfig)
function SignUp() {
  const auth = getAuth();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const show=()=>{
    const passIcon = document.querySelector('.passwordLabel');
    passIcon.classList.add('show')
  }
  const blur=()=>{
    const passIcon = document.querySelector('.passwordLabel');
    passIcon.classList.remove('show')
  }
const submit=(e)=>{
  e.preventDefault();
  if (!name && !email && !phone && !password) {
    setErr("Please fill out this filed as it is required!");
  } else if (!name) {
    setErr("Name filed is required!");
  } else if (!email) {
    setErr("Email filed is required!");
  } else if (!phone) {
    setErr("Phone filed is required!");
  } else if (!password) {
    setErr("Password filed is required!");
  }else if(password.length > 8){
    setErr("Password can't be a 9 charecters!")
  }else if(password.length < 8){
    setErr("Password must be a 8 charecters!")
  }else{

    // Signed in 
    createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    // Signed in 
    updateProfile(auth.currentUser,{
      displayName:name,
    })
  })
  .then(()=>{
    setErr('')
    setEmail('')
    setPassword('')
    setPhone('')
    navigate('/login')
  })
  .catch((error) => {
    console.log(error.code)
    if(error.code==='auth/email-already-in-use'){
      setErr('Email Already in useed!')
    }else{
      setErr('')
    }
    
    // ..
  });
  }
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    navigate('/login')
  }
});
  return (
    <section className="login">
      <form onSubmit={submit} className="signup">
        <div className="loginLogo mb-5 mx-3">
          <h2 className="football text-light">
            FOOTBALL<span className="suru">SHURU</span>
          </h2>
        </div>
        <div className="mb-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="form-control input"
            placeholder="Enter name"
            type="text"
          />
        </div>
        <div className="mb-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="form-control input"
            placeholder="Enter email"
            type="email"
          />
        </div>
        <div className="mb-2">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            className="form-control input"
            placeholder="Enter phone"
            type="number"
          />
        </div>
        <div className="mb-3 form-password">
          <label className="form-label passwordLabel">
            <AiFillEyeInvisible />
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={blur}
            onFocus={show}
            className="form-control input passwordInput mb-2"
            name="password"
            placeholder="Pick a strong password"
            type="password"
          />
          <span className='text-danger'>{err}</span>
        </div>
        <div className="mt-4 text-center">
          <button className="mb-3 loginBtn btn btn-danger w-100" type="submit">
            Sign Up
          </button>
          <span className="text-success">
            Already have an account?<Link to="/login">Log In</Link>
          </span>
        </div>
      </form>
    </section>
  );
}

export default SignUp;

