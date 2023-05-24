import React from 'react'

function TopNav() {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder='search or type' />
          <span><i className='ri-search-line'></i></span>
        </div>
      </div>
    </div>
  )
}

export default TopNav