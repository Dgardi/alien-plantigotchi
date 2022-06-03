import React from "react";
// import blonk from "../../src/assets/blonk.png"
//https://plantigotchi.s3.us-east-2.amazonaws.com/blonk.png
function Header(props) {
  //   const {setSelectedPage} = props
  //   const clickHandler = (event) => {
  //     setSelectedPage(event.target.value)
  //     console.log(event.target.value)
  //   }
  return (
    <div>
      <img
        className="header"
        src="https://plantigotchi.s3.us-east-2.amazonaws.com/plantagotchi_logo.png"
        alt="header logo"
      ></img>
    </div>
  );
}

export default Header;
