import React, { useState, useEffect } from "react";
// import humanflower_stage1 from "../../src/assets/humanflower_stage1.png"
// import humanflower_stage2 from "../../src/assets/humanflower_stage2.png"
// import humanflower_stage3 from "../../src/assets/humanflower_stage3.png"

export default function HumanPlant({ stage, setHumanPlantPhase }) {
  let photoArray = [
    "https://plantigotchi.s3.us-east-2.amazonaws.com/humanflower_stage1.png",
    "https://plantigotchi.s3.us-east-2.amazonaws.com/humanflower_stage2.png",
    "https://plantigotchi.s3.us-east-2.amazonaws.com/humanflower_stage3.png",
  ];

  let [lifePoints, setLifePoints] = useState(0);
  useEffect(() => {
    if (lifePoints < 5) {
      setHumanPlantPhase(0);
    } else if (lifePoints >= 5 && lifePoints < 10) {
      setHumanPlantPhase(1);
    } else if (lifePoints >= 10 && lifePoints < 20) {
      setHumanPlantPhase(2);
    } else if (lifePoints >= 20 && lifePoints < 30) {
      setHumanPlantPhase(3);
    } else if (lifePoints >= 30 && lifePoints < 40) {
      setHumanPlantPhase(4);
    } else if (lifePoints >= 40) {
      setHumanPlantPhase(5);
    }
  }, [lifePoints]);

  const expr = () => {
    switch ("HumanStage1") {
      case "HumanStage1":
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
              💦{" "}
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
            <p>This plant has: {lifePoints} life points</p>
          </div>
        );
      case "HumanStage2":
        console.log("stage 2");
        return (
          <div>
            <button className="emoji" type="button">
              💦{" "}
            </button>
            <button className="emoji" type="button">
              🌞
            </button>
            <button className="emoji" type="button">
              💩
            </button>
            <button className="emoji" type="button">
              🎶
            </button>
          </div>
        );
      case "HumanStage3":
        console.log("stage 3");
        return (
          <div>
            <button className="emoji" type="button">
              💦{" "}
            </button>
            <button className="emoji" type="button">
              🌞
            </button>
            <button className="emoji" type="button">
              💩
            </button>
            <button className="emoji" type="button">
              🎶
            </button>
          </div>
        );
      default:
        console.log(`Sorry, an error occured loading the actions.`);
    }
  };

  return (
    <div className="humanPlanDiv">
      <img
        src={photoArray[stage]}
        className="humanPlantPic"
        alt="HumanPlant in various stages"
      />
      {expr()}
    </div>
  );
}
