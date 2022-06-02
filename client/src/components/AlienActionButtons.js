import React from 'react';

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
