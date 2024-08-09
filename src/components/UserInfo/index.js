import './index.css'

const UserInfo = () => {
  return (
    <div className="user-info-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile-img"
      />
      <h1 className="profile-name">wade warren</h1>
      <p className="profile-description">Software developer at UK</p>
    </div>
  )
}

export default UserInfo
