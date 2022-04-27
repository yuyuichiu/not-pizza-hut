import React from 'react';
import { FaUserCircle, FaServer/* FaMapMarkerAlt, FaClock */  } from 'react-icons/fa';

import styles from './Header.module.css';
import logo from '../../assets/fakeph_logo.png';
import useHttp from '../../hooks/use-http';

const Header = (props) => {
  const {isLoading, error, sendRequest} = useHttp();
  const fetchOrderHandler = () => {
    sendRequest({
      url: 'https://not-pizza-hut-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
      method: 'GET',
      header: { 'Content-type': 'application/json' }
    }, (data) => {
      if(error){
        console.log(error);
        return
      }
      alert('Order Data has been printed on the console. (Press F12 for developer tool, you will see it after you press confirm)');
      console.log('Order data (find ordered items on "items" key):',  Object.values(data));
    })
  }

  return <header className={styles.header}>
    <img src={logo} alt="logo"></img>
    
    <div className={styles['header__toolbox']}>
      {/* 
      <small><FaMapMarkerAlt /> Ordering for Pick up from: _</small>
      <small><FaClock /> Time: ASAP</small>
      <small>中文</small> */}
      <small><FaUserCircle /> Login/Create your account (WIP)</small>
      <small onClick={fetchOrderHandler}><FaServer /> {isLoading ? 'Fetching Data...' : 'See order on server'}</small>
    </div>
  </header>
}

export default Header