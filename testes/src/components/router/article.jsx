 
import React from "react";
import styles from "./article.scss";
 
const Article = (props) => {
   return (
       <div className={styles.content}>
           <hr/>
           <h1>Article</h1>
           <div> { props.params.titleId } </div>
       </div>
   );
};
export default Article;