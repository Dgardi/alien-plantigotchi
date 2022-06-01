// // import logo from './logo.svg';
// // import './App.css';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     <p> THIS IS A TEST</p>
//     // </div>
//   );
// }

// export default App;


import React,{ useState } from 'react';
import AlienPlant from './components/AlienPlant'; 
// import HumanPlant from './components/HumanPlant';
// import ActionButtons from "./components/ActionButtons"
// import Greenhouse from './components/Greenhouse';
// import LoginForm from "./components/LoginForm"; 
import LoginPage from "./components/LoginPage"; 
import MainPage from "./components/MainPage"

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  const [alienPlantPhase, setAlienPlantPhase] = useState(0)
  return (
    <div>
      <AlienPlant stage={alienPlantPhase} />
      <button id="mainButton" onClick={() => {setAlienPlantPhase(alienPlantPhase + 1)}}>Increase</button>
      {/* <NavTabs setSelectedPage = {setSelectedPage} sarah={"test"}/> */}
     {selectedPage === "LoginPage" && <LoginPage/>}
      {selectedPage === "MainPage" && <MainPage/>} */}
    </div>
  );
}

export default App;
