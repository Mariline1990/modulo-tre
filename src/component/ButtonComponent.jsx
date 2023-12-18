import React from "react";

function ButtonComponent(props) {
  return (
    <>
      <button style={props.style}>{props.content}</button>
    </>
  );
}

export default ButtonComponent;
