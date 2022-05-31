// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React,{ useState } from 'react';
// import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm'; 
import ActionButtons from './components/ActionButtons';
import AlienPlant from "./components/AlienPlant"
import HumanPlant from './components/HumanPlant';
import Greenhouse from "./components/Greenhouse"; 
import LoginPage from "./components/LoginPage"; 

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  const [selectedPage, setSelectedPage] = useState("LoginPage")
  return (
    <div>
      <Header setSelectedPage={setSelectedPage} />
      {/* <NavTabs setSelectedPage = {setSelectedPage} sarah={"test"}/> */}
      {selectedPage === "Portfolio" && <Portfolio/>}
      {selectedPage === "About" && <About/>}
      {selectedPage === "Resume" && <Resume />}
      {selectedPage === "Contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;

