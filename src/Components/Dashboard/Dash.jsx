import{ } from 'react'
import './Dash.css'
import logo from './DashboardImage/FOOTBALLSHURU.png'
import { FaBeer } from 'react-icons/fa';

function Dash() {
  return (
    <section className='dashboard-section'>
      <div className='container'>
      {/* dashboard content section starts here */}
        <div className='dash-content'>
      {/* left content starts here */}
            <div className='menu-section'>
        {/* left logo starts here */}
                <div className='menu-section-image'>
                    <img src={logo} alt='logo' />
                </div>
        {/* left logo ends here */}
        {/* left menu starts here */}
        <div className='left-menu'>
            <ul className='list'>
                <li className=''>
                    Dashboard
                </li>
                <li className=''>
                    User Management
                </li>
                <li className=''>
                    Manage Turfs
                </li>
                <li className=''>
                    Booking
                </li>
            </ul>
        </div>
        {/* left menu ends here */}
            </div>
      {/* left content ends here */}
        </div>
      {/* dashboard content section ends here */}
      </div>
    </section>
  )
}

export default Dash
