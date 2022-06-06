import React, { useState, useEffect } from "react";
import AlienPlant from "../components/AlienPlant";
import HumanPlant from "../components/HumanPlant";
import AlienActionButtons from "../components/AlienActionButtons";
import Character from "../components/Character";
import landscape from "../../src/assets/landscape.png";
import Footer from "../components/Footer";
// import Greenhouse from './components/Greenhouse';
// import LoginForm from "./components/LoginForm";
import LoginPage from "./LoginPage";
// import MainPage from "./components/MainPage"
import HumanActionButtons from "../components/HumanActionButtons";
import "../styles/index.css";
import { getUserPlants } from "../utils/plant-apis";
import Header from "../components/Header";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function MainPage() {
  const [alienPlantPhase, setAlienPlantPhase] = useState(0);
  const [humanPlantPhase, setHumanPlantPhase] = useState(0);

  const [plant1, setPlant1] = useState();
  const [plant2, setPlant2] = useState();

  useEffect(() => {
    async function getAndSetPlantData() {
      const getPlants = await getUserPlants("629a29249075dd2c1ac0e9d8");

      const userPlants = getPlants.json();

      userPlants.then((res) => {
        console.log(res);
        setPlant1(res[0]);
        setPlant2(res[1]);
      });
    }

    getAndSetPlantData();
  }, []);

  return (
    <>
      <Header />
      <div className="mainPageRender">
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
      <Footer />
    </>
  );
}




export default MainPage;
