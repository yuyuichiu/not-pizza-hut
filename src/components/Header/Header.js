import React from 'react';
import { FaUserCircle, FaMapMarkerAlt, FaClock  } from 'react-icons/fa'

import styles from './Header.module.css'
import logo from '../../assets/fakeph_logo.png'

const Header = (props) => {
  return <header className={styles.header}>
    <img src={logo} alt="logo"></img>
    
    <div className={styles['header__toolbox']}>
      <small><FaUserCircle /> Login/Create your account</small>
      <small><FaMapMarkerAlt /> Ordering for Pick up from: _</small>
      <small><FaClock /> Time: ASAP</small>
      <small>中文</small>
    </div>
  </header>
}

export default Header