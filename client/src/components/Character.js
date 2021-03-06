import React from "react";
// import blonk from "../../src/assets/blonk.png"
//https://plantigotchi.s3.us-east-2.amazonaws.com/blonk.png
function Character(props) {
  const { setSelectedPage } = props;
  const clickHandler = (event) => {
    setSelectedPage(event.target.value);
    console.log(event.target.value);
  };
  return (
    <img
      src="https://plantigotchi.s3.us-east-2.amazonaws.com/blonk.png"
      alt="Alien character"
      height="500"
    ></img>
  );
}

export default Character;
