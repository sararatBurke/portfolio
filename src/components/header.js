import React from 'react';
import '../stylesheet/Header.css';
import headerImage from '../img/header.png';

function App() {
  return (
    <div className="App">
      
      <div className="header">
        <div className="nav">

        <p className="headerText">Sararat</p><br/>
        <p className="headerText">A Web</p><br/>
        <p className="headerText">developer</p><br/>
        <p className="headerText"><a className="link">About</a></p><br/>
        <p className="headerText"><a className="link">Project</a></p><br/>
        <p className="headerText"><a className="link">Education</a></p><br/>
        <p className="headerText"><a className="link">Resume</a></p><br/>
        <p className="headerText"><a className="link">Contect</a></p><br/>
        </div>
      </div>
     
      <div className="header"> 
        <img className="headerImage" src={headerImage}/>
      </div>
    </div>
  );
}

export default App;
