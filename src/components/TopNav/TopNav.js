import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from "../../assets/images/profile-02.png";
import "../TopNav/top-nav.css";


function TopNav() {
  return (
    <div className="top__nav">

      <div className="top__nav-wrapper">

        <div className="search__box">
          <input type="text" placeholder='search or type' />
          <span><i className='ri-search-line'></i></span>
        </div>

        <div className="top__nav-right">
          <span className='notification'><i className='ri-notification-3-line'></i></span>
          <div className="profile">
            <Link to="/settings"><img src={profileImg} alt="" /></Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default TopNav