import React, { useState, useEffect} from 'react';


const [testState, setTestState] = useState(
  {
    'name' : '' ,
    'owner' : '',
    'earthPlant': false,
    'lifePoints': 0,
    'cooldownTimer': Date(),
    'createdAt': Date(),
    })

function AlienActionButtons(props) {
  const {setSelectedPage} = props
  const clickHandler = (event) => {
    setSelectedPage(event.target.value)
    console.log(event.target.value)
  }
  return (
    <p>This plant's name is: </p>
  );
}

export default AlienActionButtons;
