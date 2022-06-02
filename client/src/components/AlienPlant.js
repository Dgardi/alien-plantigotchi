import React, { useState } from "react";
// import alienPlant_stage1 from "../../src/assets/alienPlant_stage1.png"
// import alienPlant_stage2 from "../../src/assets/alienPlant_stage2.png"
// import alienPlant_stage3 from "../../src/assets/alienPlant_stage3.png"
// import alienPlant_stage4 from "../../src/assets/alienPlant_stage4.png"
// import alienPlant_stage5 from "../../src/assets/alienPlant_stage5.png"

export default function AlienPlant ({stage}) {

    let photoArray = ["https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage1.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage2.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage3.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage4.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage5.png"]; 
    console.log(stage)
  
     // Declare a new state variable, which we'll call "count"
    const [lifePoints, setLifePoints] = useState(0);
    
    const expr = () => {
                switch ("AlienStage1") {
                case 'AlienStage1':
                    console.log('stage 1')
                    return(
                    <div>
                        <button type="button" onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Water</button>
                        <button type="button"onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Sun</button>
                        <button type="button"onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Fertilizer</button>
                        <button type="button"onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Sing</button>
                        <p>You have {lifePoints} life points</p>
                    </div>)
                case 'AlienStage2':
                    console.log('stage 2');
                    return(
                    <div>
                        <button type="button" onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Water</button>
                        <button type="button"onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Sun</button>
                        <button type="button"onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Fertilizer</button>
                        <button type="button"onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Sing</button>
                        <p>You have {lifePoints} life points</p>
                    </div>)
                case 'AlienStage3':
                    console.log('stage 3');
                    return(
                    <div>
                        <button type="button" onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Water</button>
                        <button type="button"onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Sun</button>
                        <button type="button"onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Fertilizer</button>
                        <button type="button"onClick={() => setLifePoints(lifePoints + Math.floor(Math.random()*5))}>Sing</button>
                        <p>Your plant has {lifePoints} life points</p>
                    </div>)
                default:
                    console.log(`Sorry, an error occured loading the actions.`);
                    }
                }
    

    return(
            <div>
              <img src={photoArray[stage]} className="alienPlantPic" alt="AlienPlant in various stages"></img>  
              {expr()}
            
            </div>

        )
}