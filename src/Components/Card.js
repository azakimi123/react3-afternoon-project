import React, {Component} from 'react';


function Card(props) {
    console.log(props)
    return(
        <div>
            <h2>{props.info.firstName} {props.info.lastName}</h2>
            <p>From: </p> <p>{props.info.city} {props.info.country}</p>
            <p>Employer: <p>{props.info.employer}</p></p>
            <section>
                <h3>Favorite Movies: </h3>
                <ol>1.{props.info.favoriteMovies[0]}</ol>
                <ol>2.{props.info.favoriteMovies[1]}</ol>
                <ol>3.{props.info.favoriteMovies[2]}</ol>
            </section>
        </div>
    )
}

export default Card;