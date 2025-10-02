import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav >
      <div className='Nav-box'>
        <Link to="/" className='navlink'>Home</Link>
        <Link to="/todo" className='navlink'>To do list</Link>
        <Link to="/counter" className='navlink'>Counter</Link>
        <Link to="/stoper" className='navlink'>Stoper</Link>
      </div>
    </nav>
  
  )
}

export default Navbar