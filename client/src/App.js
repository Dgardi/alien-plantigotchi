import React,{ useState } from 'react';
// import AlienPlant from './components/AlienPlant'; 
// import HumanPlant from './components/HumanPlant';
// import AlienActionButtons from "../components/AlienActionButtons"
// import Greenhouse from './components/Greenhouse';
// import LoginForm from "./components/LoginForm"; 
// import LoginPage from "./LoginPage"; 
import MainPage from "./Pages/MainPage"
// import HumanActionButtons from '../components/HumanActionButtons';
// import Style from '../styles/index.css';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  const [alienPlantPhase, setAlienPlantPhase] = useState(0)
  const [humanPlantPhase, setHumanPlantPhase] = useState(0)
  return (
    <div style={{height: "100%"}}> 
      <MainPage />
    </div>
  );
}

export default App;



