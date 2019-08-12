import React from "react";
import "./"
const Container = (props) => {
    return (
        <div className="container">
            <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}
export default Container;