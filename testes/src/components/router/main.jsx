import React from "react";
import styles from "./main.scss";
 
const Main = (props) => {
   return (
       <div className={styles.content}>
           <h1>Main</h1>
           { props.children }
       </div>
   );
};
export default Main;