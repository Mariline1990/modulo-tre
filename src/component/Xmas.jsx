import React from "react";

function Xmas(props) {
  return (
    <div style={{ displayFlex: "flex" }}>
      <img
        src="https://images.unsplash.com/photo-1576344333128-4682ea1e9970?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={props.altroAlt}
        style={props.imgStyle}
      />
      <p style={{ fontSize: "2rem", color: "white", fontWeight: " 700" }}> {props.content}</p>
    </div>
  );
}

export default Xmas;
