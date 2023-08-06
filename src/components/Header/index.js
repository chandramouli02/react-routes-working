import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="link-style">
      <h1>Home</h1>
    </Link>
    <Link to="/about" className="link-style">
      <h1>About</h1>
    </Link>
  </div>
)

export default Header
