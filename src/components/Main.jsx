import React from "react";

const Main = (props) => {
  
  console.log("I was rendered");

  return (
    //Styles for dividing blocks
    // <div style={mainStyle}>
    //   <div style={{ flex: "2", backgroundColor: "teal" }}>MAIN!</div>
    //   <div style={{ flex: "1", backgroundColor: "fuchsia" }}>
    //     {props.insider}
    //   </div>
    // </div>

    <div style={{ flex: "2", backgroundColor: "teal" }}>MAIN!</div>
  );
};

Main.propTypes = {};

export default Main;
