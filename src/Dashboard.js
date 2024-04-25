import React from 'react';
import styles from'./Dash.module.css'
import {Link} from "react-router-dom";
import homelogo from "./images/home.png";
import noteslogo from "./images/notes.png";
import bitlogo from "./images/logo.png";

const Dashboard = () => {
  return (
    <div>
      <div className={styles.navbar}>
    <div className={styles.logoplacing}>
    <div><img src={bitlogo} alt=""/></div>
    <div className={styles.tar}><span className="styles.team">project manager</span></div></div>
    <div className={styles.input}><input type="text" placeholder="      search"/></div>

 </div>
 <div className={styles.leftsidebar}>
   
 <div className={styles.era}>
    <div className={styles.home}>
        <img className={styles.homeimage}src={homelogo} alt=""/>
     <div className={styles.plo}>dashboard</div>
     </div>
    <div className={styles.it}>
    <Link to="/"><div><img className={styles.note}src={noteslogo} alt=""/></div>
     <div className={styles.wer}>worklog</div>
     </Link> 
    
   </div>
   
    </div>

    <div>
    <div className={styles.students}>
        <div><h1>Students Dashboard<br />
        <span className={styles.paragraph}>Here what going on at your performance right now</span> </h1> 
        </div>
    </div>
    <div>
        <table>
            <th>
                DAILY WORKING HOURS                
            </th>
            <tr>

            </tr>
        </table>
    </div>
</div>

</div>
    </div>
  );
}
export default Dashboard;
