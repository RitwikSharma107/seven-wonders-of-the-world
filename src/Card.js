import React from 'react';
import "./Card.css";

const Card = (props) => {
    return(
        <div className='tc bg-light-yellow dib br4 pa3 ma5 grow bw2 shadow-5'>
            <img src={props.img} height="300px" width="500px"></img>
            <div className="tc">
                <h2><strong>{props.name}</strong></h2>
                <h3><strong><i>{props.loc}</i></strong></h3>
                <br></br>
                <p>{props.about}</p>
            </div>
        </div>
    );
}

export default Card;