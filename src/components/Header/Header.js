import React from 'react';
import { FaUserCircle, FaMapMarkerAlt, FaClock  } from 'react-icons/fa'

import styles from './Header.module.css'
import logo from '../../assets/fakeph_logo.png'

const Header = (props) => {
  return <header className={styles.header}>
    <img src={logo}></img>
    
    <div className={styles['header__toolbox']}>
      <small><FaUserCircle /> Login/Create your account</small>
      <span>|</span>
      <small><FaMapMarkerAlt /> Ordering for:</small>
      <span>|</span>
      <small><FaClock /> Time: ASAP</small>
      <span>|</span>
      <small>中文</small>
    </div>
  </header>
}

export default Header