import './index.css'
import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button onClick={onClickLogout} className="logout-btn" type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
