import React, {Component} from 'react';
// import NextButton from './NextButton';


function Card(props) {
    // console.log(props)
    return(
        <div className='card'>
            <section className='inner-text'>
            <h2>{props.info.firstName} {props.info.lastName}</h2>
            <h4>From: </h4> <p>{props.info.city} {props.info.country}</p>
            <h4>Employer: </h4><p>{props.info.employer}</p>
            <section>
                <h4>Favorite Movies: </h4>
                <ol>1.{props.info.favoriteMovies[0]}</ol>
                <ol>2.{props.info.favoriteMovies[1]}</ol>
                <ol>3.{props.info.favoriteMovies[2]}</ol>
            </section>
            </section>
        </div>
    )
}

export default Card;