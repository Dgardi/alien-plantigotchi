import React from 'react';
// Here we are importing a CSS file as a dependency
//need to add styling and link here
import '../styles/Header.css';
// import NavTabs from './NavTabs';

function Greenhouse({setSelectedPage}) {
  return (
    <header className="greenhouse">
      {/* <div className="headerDiv">
        <div className="nestedDivsAreGreat">
        <h1>Sarah Gilbreath</h1>
        <h3>Full-stack developer</h3>
        </div>
        <NavTabs setSelectedPage = {setSelectedPage}/>
      </div> */}
    </header>
  );
}

export default Greenhouse;