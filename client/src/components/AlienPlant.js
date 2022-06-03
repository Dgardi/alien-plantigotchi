import React, { useState, useEffect } from "react";

export default function AlienPlant ({stage, setAlienPlantPhase, alienPlantPhase}) {

    let photoArray = ["https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage1.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage2.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage3.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage4.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/alienPlant_stage5.png"]; 
    console.log(stage)
  
     // Declare a new state variable
    let [lifePoints, setLifePoints] = useState(0);
    useEffect(() => {
        if (lifePoints <5){
            setAlienPlantPhase(0)
        } else if  (lifePoints>=5 && lifePoints <10){
        setAlienPlantPhase(1)
        } else if (lifePoints>=10 && lifePoints <20){
            setAlienPlantPhase(2)
        } else if (lifePoints>=20 && lifePoints <30){
            setAlienPlantPhase(3)
        } else if (lifePoints>=30 && lifePoints <40){
            setAlienPlantPhase(4)
        } else if (lifePoints>=40){
            setAlienPlantPhase(5) } 
    }, [lifePoints])
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