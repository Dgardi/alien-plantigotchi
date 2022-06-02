import React,{ useState } from 'react';
import AlienPlant from '../components/AlienPlant'; 
import HumanPlant from '../components/HumanPlant';
import AlienActionButtons from "../components/AlienActionButtons"
import Character from '../components/Character';
import landscape from "../../src/assets/landscape.png"
// import Greenhouse from './components/Greenhouse';
// import LoginForm from "./components/LoginForm"; 
import LoginPage from "./LoginPage"; 
// import MainPage from "./components/MainPage"
import HumanActionButtons from '../components/HumanActionButtons';
import '../styles/index.css';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function MainPage() {
  const [alienPlantPhase, setAlienPlantPhase] = useState(0)
  const [humanPlantPhase, setHumanPlantPhase] = useState(0)
  return (
    <div className="mainPageRender">
        <div className="characterBox">
          <Character />
        </div>
        <div className="alienBox">
          <AlienPlant stage={alienPlantPhase} />
          <button id="mainButton" onClick={() => {setAlienPlantPhase(alienPlantPhase + 1)}}>Increase</button>
          <AlienActionButtons />
        </div>
        <div className="humanBox">
          <HumanPlant stage={humanPlantPhase} />
          <button id="mainButton" onClick={() => {setHumanPlantPhase(humanPlantPhase + 1)}}>Increase</button>
          <HumanActionButtons />
        </div>
      {/* <MainPage /> */}
      {/* <NavTabs setSelectedPage = {setSelectedPage} sarah={"test"}/> */}
     {/* {selectedPage === "LoginPage" && <LoginPage/>}
      {selectedPage === "MainPage" && <MainPage/>} */} 
    </div>
  );
}

export default MainPage;



