import React from "react";
// this is a stateless component    ra
// state is a class
const ImageCard = (props) => {
    return (
            <div className="col-md-4">
                <div class="card" style={{ width: "18em" }}>
                    <img class="card-img-top" src={props.imgUrl} alt="Card image cap" />

                    {/* <div class="card-body">
              <h5 class="card-title">{props.imgUrl}</h5> */}
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> 
    )
}
export default ImageCard;