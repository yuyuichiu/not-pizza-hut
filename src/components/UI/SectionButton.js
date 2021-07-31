import React, { useEffect } from 'react';

import styles from './SectionButton.module.css'

const SectionButton = (props) => {
  const isActiveClass = props.active.toLowerCase() === props.title.toLowerCase() ? 'active' : ''

  return <button className={`${styles.sectionBtn} ${isActiveClass}`}>
    <img src={props.logo}/>
    <p>{props.title}</p>
  </button>
}

export default SectionButton