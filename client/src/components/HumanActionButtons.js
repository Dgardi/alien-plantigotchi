import React from "react";

function HumanActionButtons(props) {
  const { setSelectedPage } = props;
  const clickHandler = (event) => {
    setSelectedPage(event.target.value);
    console.log(event.target.value);
  };
  return <div></div>;
}

export default HumanActionButtons;
