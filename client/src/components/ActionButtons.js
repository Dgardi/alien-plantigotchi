import React from 'react';

function ActionButtons(props) {
  const {setSelectedPage} = props
  const clickHandler = (event) => {
    setSelectedPage(event.target.value)
    console.log(event.target.value)
  }
  return (
    <ul className="action-buttons">
      <li className="action-item" onClick = {() => setSelectedPage("Water")}>
          Water
      </li>
      <li className="action-item" onClick = {() => setSelectedPage("Sunlight")}>
          Sunlight
      </li>
      <li className="action-item" onClick = {() => setSelectedPage("Fertilizer")}>
          Fertilizer
      </li>
      <li className="action-item" onClick = {() => setSelectedPage("Singing")}>
          Singing
      </li>
      {/* <li className="action-item" onClick = {() => setSelectedPage("Decorate")}>
          Decorate
      </li> */}
    </ul>
  );
}

export default ActionButtons;
