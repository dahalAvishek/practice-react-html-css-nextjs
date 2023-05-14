import './styles.css'
import React from 'react'
import {FaTwitter, FaHashtag} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'

const NavSection = () => {
  return (
    <div className='side-section nav-section'>
      <div className='all-elements'>
        <div className='logo nav-element'><FaTwitter /></div>
        <nav className="nav-elements">
          <ul>
            <li><div className='nav-element'><FaHashtag /><span>Explore</span></div></li>
            <li><div className='nav-element'><AiFillSetting /><span>Settings</span></div></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavSection