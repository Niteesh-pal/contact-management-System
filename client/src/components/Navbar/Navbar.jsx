import React from 'react'
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h1>Contact Management</h1>
        <h3>System</h3>
      </div>
      <div className={styles.user}>
        <div >
          <span>user logo</span>
          <span>user name</span>
        </div>
      </div>
    </section>
  )
}

export default Navbar