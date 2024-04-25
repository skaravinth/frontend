import React from 'react';
import styles from'./User.module.css';
import noteImages from "./images/notes.png";
import logoImage from './images/logo.png';

import { IoIosNotificationsOutline } from "react-icons/io";
import { PiUser } from "react-icons/pi";


const User = () => {
  return (
    <div>
    <div className={styles.navbar}>
      <div><img src={logoImage} alt="Logo" /></div>
      <div className={styles.tar}><span className="styles.team">Project Manager</span></div>
      <div className={styles.input}><input type="search" placeholder="Search" /></div>
      <div className={styles.tin}>
     
      <IoIosNotificationsOutline className={styles.moa}/>
       <PiUser  className={styles.moa}/>
       
        
        <i className={styles.moa} ></i>
      </div>
    </div>
    <div className={styles.leftsidebar}>
      <div className={styles.era}>
        <div className={styles.plo}>Project</div>
        <div className={styles.it}>
          <div><img className={styles.note} src={noteImages} alt="Notes" /></div>
          <div className={styles.wer}>Worklog</div>
        </div>
      </div>

      <div className={styles.sura}>
        <div className={styles.we}><p>Students Worklog</p></div>
        <hr />
        <div className={styles.search}>
          <input type="search" placeholder="Search" />
        </div>
        <div className={styles.button}>
          <input value="Checkin" type="text" />
        </div>
        <div className={styles.niga}>
          <table className={styles.poga}>
            <thead>
              <tr>
                <th>S.no</th>
                <th>User.className</th>
                <th>Name</th>
                <th>Checkin</th>
                <th>Checkout</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2023UAD1178</td>
                <td>Aravinth.SK</td>
                <td>2024:04:13 08:43:38</td>
                <td>2024:04:13 16:23:38</td>
                <td>WAITING FOR CHECKOUT</td>
                <td><input className={styles.val} value="Checkout" type="text" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default User;