import { useState } from 'react'
import './Login.css'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
function Login() {
  const auth = getAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
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
  const checkBox  = document.querySelector('.checkbox');
  if (!email && !password) {
    setErr("Please fill out this filed as it is required!");
  }else if (!email) {
    setErr("Email filed is required!");
  } else if (!password) {
    setErr("Password filed is required!");
  }else if(password.length > 8){
    setErr("Password can't be a 9 charecters!")
  }else if(password.length < 8){
    setErr("Password must be a 8 charecters!")
  }else if(!checkBox.checked){
    setErr('Please check the filed')
  }else{
    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    // Signed in 
    setEmail('')
    setPassword('')
    setErr('')
    navigate('/')
  })
  .catch((error) => {
    if(error.code==='auth/wrong-password'){
      setErr('Wrong password!')
    }else if(error.code==='auth/user-not-found'){
      setErr('User Not Found!')
    }
  });
  }
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    navigate('/')
  }
});
  return (
    <section className="login">
      <form onSubmit={submit} className="logInForm">
        <div className="loginLogo mb-5 mx-3">
          <h2 className="football text-light">
            FOOTBALL<span className="suru">SHURU</span>
          </h2>
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
        <div className="mb-3 form-password">
          <label className="form-label passwordLabel">
            <AiFillEyeInvisible />
          </label>
          <input
            onBlur={blur}
            onFocus={show}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control input passwordInput mb-2"
            name="password"
            placeholder="Enter password"
            type="password"
          />
          <span className='text-danger'>{err}</span>
        </div>
        <div className="ms-2">
          <input
            type="checkbox"
            className="form-check-input rounded-0 checkbox"
          />
          <span className="ms-3 text-light">Remember me</span>
        </div>
        <div className="mt-4 text-center">
          <button className="loginBtn btn btn-danger w-100 mb-3" type="submit">
            Log in
          </button>
          <span className="text-success text-center">
            Don,t have an account?<Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </form>
    </section>
  );
}

export default Login;
