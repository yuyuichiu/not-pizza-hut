import React from 'react';

import styles from './SectionButton.module.css'

const SectionButton = (props) => {
  const isActiveClass = props.active.toLowerCase() === props.title.toLowerCase() ? styles.active : ''

  return <button className={`${styles.sectionBtn} ${isActiveClass}`} onClick={props.onClick}>
    <img src={props.logo} alt={props.title}/>
    <p>{props.title}</p>
  </button>
}

export default SectionButton