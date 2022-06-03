import React, { useState, useEffect } from "react";
import AlienPlant from "../components/AlienPlant";
import HumanPlant from "../components/HumanPlant";
import AlienActionButtons from "../components/AlienActionButtons";
import Character from "../components/Character";
import landscape from "../../src/assets/landscape.png";
// import Greenhouse from './components/Greenhouse';
// import LoginForm from "./components/LoginForm";
import LoginPage from "./LoginPage";
// import MainPage from "./components/MainPage"
import HumanActionButtons from "../components/HumanActionButtons";
import "../styles/index.css";
import Header from "../components/Header";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function MainPage() {
  const [alienPlantPhase, setAlienPlantPhase] = useState(0);

  const [humanPlantPhase, setHumanPlantPhase] = useState(0);
  return (
    <div>
      <Header />
      <div className="mainPageRender">
        <div className="characterBox">
          <Character className="character" />
        </div>
        <div className="alienBox">
          <AlienPlant
            stage={alienPlantPhase}
            setAlienPlantPhase={setAlienPlantPhase}
            alienPlantPhase={alienPlantPhase}
          />
          {/* <button id="mainButton" onClick={() => {setAlienPlantPhase(alienPlantPhase + 1)}}>Increase</button> */}
          <AlienActionButtons />
        </div>
        <div className="humanBox">
          <HumanPlant
            stage={humanPlantPhase}
            setHumanPlantPhase={setHumanPlantPhase}
            humanPlantPhase={humanPlantPhase}
          />
          {/* <button id="mainButton" onClick={() => {setHumanPlantPhase(humanPlantPhase + 1)}}>Increase</button> */}
          <HumanActionButtons />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
