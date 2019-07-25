import React from "react";
import "./Stlye.css";

const Warhol = props => (
  <div className="warhol" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Warhol;