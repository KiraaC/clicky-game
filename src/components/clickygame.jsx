import React from "react";
import "./style.css";

function WarholCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">


                {/* <strong>Name:</strong> {props.name} */}
            </div>

        </div>
    );
}

export default WarholCard;
