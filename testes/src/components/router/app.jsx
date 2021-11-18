 
import React from 'react';
import { Home, Main, Article, Faq, About } from "./index.jsx.js";
import { Router, Route, browserHistory } from "react-router-3";
 
class App extends React.Component {
   render() {
       return (
           <Router history={browserHistory}>
               <Route path="/" component={Home}>
                   <Route path="/main" component={Main}>
                       <Route path="/main/article/" component={Article}/>
                   </Route>
                   <Route path="/faq" component={Faq}/>
                   <Route path="/about" component={About}/>
               </Route>
           </Router>
       );
   }
}
export default App;