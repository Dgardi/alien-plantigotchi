import humanflower_stage1 from "../../src/assets/humanflower_stage1.png"
import humanflower_stage2 from "../../src/assets/humanflower_stage2.png"
import humanflower_stage3 from "../../src/assets/humanflower_stage3.png"

export default function HumanPlant ({stage}) {

    let photoArray = ["https://plantigotchi.s3.us-east-2.amazonaws.com/humanflower_stage1.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/humanflower_stage2.png", "https://plantigotchi.s3.us-east-2.amazonaws.com/humanflower_stage3.png"]; 
    const expr = () => {
        switch ("HumanStage1") {
        case 'HumanStage1':
            console.log('stage 1')
            return(
            <div>
                <button type="button">Water</button>
                <button type="button">Sun</button>
                <button type="button">Fertilizer</button>
                <button type="button">Sing</button>
            </div>)
        case 'HumanStage2':
            console.log('stage 2');
            return(
            <div>
                <button type="button">Water</button>
                <button type="button">Sun</button>
                <button type="button">Fertilizer</button>
                <button type="button">Sing</button>
            </div>)
        case 'HumanStage3':
            console.log('stage 3');
            return(
            <div>
                <button type="button">Water</button>
                <button type="button">Sun</button>
                <button type="button">Fertilizer</button>
                <button type="button">Sing</button>
            </div>)
        default:
            console.log(`Sorry, an error occured loading the actions.`);
            }
        }


return(
    <div className="humanPlanDiv">
      <img src={photoArray[stage]} className="humanPlantPic" alt="HumanPlant in various stages" />
      {expr()}
    
    </div>

)
}
