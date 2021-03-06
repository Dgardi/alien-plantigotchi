import React, { useState, useEffect } from "react";
import Auth from '../utils/auth'

// import alienPlant_stage1 from "../../src/assets/alienPlant_stage1.png"
// import alienPlant_stage2 from "../../src/assets/alienPlant_stage2.png"
// import alienPlant_stage3 from "../../src/assets/alienPlant_stage3.png"
// import alienPlant_stage4 from "../../src/assets/alienPlant_stage4.png"
// import alienPlant_stage5 from "../../src/assets/alienPlant_stage5.png"

export default function AlienPlant({
  stage,
  setAlienPlantPhase,
  alienPlantPhase,
}) {
  let photoArray = [
    "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage1.png",
    "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage2.png",
    "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage3.png",
    "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage4.png",
    "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage5.png",
  ];
  console.log(stage);

  // Declare a new state variable
  let [lifePoints, setLifePoints] = useState(0);
  useEffect(() => {
    if (lifePoints < 5) {
      setAlienPlantPhase(0);
    } else if (lifePoints >= 5 && lifePoints < 10) {
      setAlienPlantPhase(1);
    } else if (lifePoints >= 10 && lifePoints < 20) {
      setAlienPlantPhase(2);
    } else if (lifePoints >= 20 && lifePoints < 30) {
      setAlienPlantPhase(3);
    } else if (lifePoints >= 30) {
      setAlienPlantPhase(4);
    } 
  }, [lifePoints]);
  const expr = () => {
    switch ("AlienStage1") {
      case "AlienStage1":
        console.log("stage 1");
        return (
          <div>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              💦
            </button>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              🌞
            </button>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              💩
            </button>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              🎶
            </button>
            <p className="lifepoint">{lifePoints} life points</p>
          </div>
        );
      case "AlienStage2":
        console.log("stage 2");
        return (
          <div>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              💦
            </button>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              🌞
            </button>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              💩
            </button>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              🎶
            </button>
            <p className="lifepoint">{lifePoints} life points</p>
          </div>
        );
      case "AlienStage3":
        console.log("stage 3");
        return (
          <div>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              💦
            </button>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              🌞
            </button>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              💩
            </button>
            <button
              className="emoji"
              type="button"
              onClick={() =>
                setLifePoints(lifePoints + Math.floor(Math.random() * 5))
              }
            >
              🎶
            </button>
            <p className="lifepoint">{lifePoints} life points</p>
          </div>
        );
      default:
        console.log(`Sorry, an error occured loading the actions.`);
    }
  };

  return (
    <div>
      <img
        src={photoArray[stage]}
        className="alienPlantPic"
        alt="AlienPlant in various stages"
      ></img>
      {expr()}
    </div>
  );
}
