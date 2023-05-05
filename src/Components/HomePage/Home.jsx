import {} from 'react'
import { getAuth, signOut,onAuthStateChanged   } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
function Home() {
  const auth = getAuth();

  const navigate = useNavigate();

  const logOut=()=>{
    signOut(auth).then(() => {
        navigate('/login')
      }).catch((error) => {
        console.log(error)
      });
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log()
    } else {
      navigate('/login')
    }
  });
  return (
    <div className='container'>
      <div className='d-flex justify-content-between bg-primary mb-4'>
        <h1 className=''>Home pages</h1>
        <button onClick={logOut} className='btn btn-danger'>Log Out</button>
      </div>
      <p className=''>
            Ea sea justo justo sea sea dolor sed dolor invidunt dolores, sadipscing ipsum lorem est rebum et et eirmod diam. Dolore diam gubergren rebum ut elitr dolore. Invidunt et at sed labore eos, labore labore sadipscing ipsum gubergren, diam sadipscing kasd invidunt lorem ipsum, sadipscing magna lorem elitr justo sed sanctus invidunt sit. Voluptua invidunt vero at consetetur sed no, justo voluptua et lorem amet, lorem sadipscing sed voluptua justo sed et. Elitr vero kasd ipsum diam erat et. Dolores accusam stet diam elitr sea sadipscing eirmod tempor. Diam sit aliquyam et lorem lorem sea dolores. Dolore erat justo labore sit kasd lorem aliquyam, sea erat eos justo stet. Elitr et sit tempor sed sed. Accusam dolore diam et ea. Ipsum sea erat erat sanctus lorem et, magna vero ea at amet sed et, gubergren gubergren et stet sed, takimata sit dolor vero diam accusam, no sanctus sanctus kasd dolor vero vero et lorem at. Ipsum diam consetetur magna sadipscing. Sit sit gubergren ea lorem ipsum sed at rebum, justo magna lorem sit ut dolore, eirmod magna et lorem et elitr accusam no takimata diam. Sanctus ut eos at est est invidunt, dolor ut clita elitr ea, sit sit ipsum.
        </p>
    </div>
  )
}

export default Home
