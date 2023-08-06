import './index.css'
import LogoutButton from '../LogoutButton'
import Header from '../Header'

const Home = () => (
  <div className="home-container">
    <Header />

    <h1>Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home