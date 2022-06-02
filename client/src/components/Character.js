import React from 'react';
import blonk from "../../src/assets/blonk.png"
function Character(props) {
  const {setSelectedPage} = props
  const clickHandler = (event) => {
    setSelectedPage(event.target.value)
    console.log(event.target.value)
  }
  return (
    <img src={blonk} alt="Alien character" width="500" height="600"></img> 
  );
}

export default Character;
