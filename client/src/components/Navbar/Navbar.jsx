import React from 'react'
import styles from "./Navbar.module.css";
import {FaUserAlt} from 'react-icons/fa';
const Navbar = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h1>Contact Management</h1>
        <h3>System</h3>
      </div>
      <div className={styles.user}>
        <div >
          <span><FaUserAlt size={23}/></span>
          
        </div>
      </div>
    </section>
  )
}

export default Navbar