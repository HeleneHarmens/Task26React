import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './header.css';

const myHeader = (props) => {
   return (
      <header className="header">
         <div id="TopText">
           <h1>Review Website</h1>
           <h3>Wokk, Mathias and Helene</h3>
         </div>
      </header>
   );
}

export default myHeader;