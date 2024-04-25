import React from 'react';
import styles from'./Login.module.css';
import {Link} from "react-router-dom";
import authImage from './images/auth.png';
import logoImage from './images/logo.png';

const Login = () => {
   
  return (
    <body className={styles.negi}>
        
    
    <div className={styles.ngh}>
    <div className={styles.homepage}>
      <div className={styles.left}>
        <p className={styles.para}>
          <span className={styles.project}>
            Project manager
          </span>
          <br />
          <br />
          it's not just about the numbers, but the story they tell and the decisions they empower!
        </p>
        <img className={styles.bird} src={authImage} alt="" />
      </div>
      <div className={styles.right}>
        <img className={styles.bit} src={logoImage} alt="" />
        <p className={styles.bold}>
          Sign In<br />
          Get Access to your account
        </p>
        <hr className={styles.karr} />
        <p className={styles.input}>
          <span className={styles.info}>User Name</span><br />
          <input type="text" placeholder="Enter your username" />
        </p>
        <p className={styles.input}>
          <span className={styles.info}>Password</span><br />
          <input type="password" placeholder="Enter your password" maxLength="10" />
        </p>
       <Link to="/User">
          <input className={styles.submit} type="submit" value="Sign In" />
          </Link>
      </div>
    </div>
   </div>
    </body>
  );
}

export default Login;