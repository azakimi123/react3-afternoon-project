import React, {Component} from 'react';
// import NextButton from './NextButton';


function Card(props) {
    // console.log(props)
    return(
        <div className='card'>
            <section className='inner-text'>
            <h2 className='person-name'>{props.info.firstName} {props.info.lastName}</h2>
            <p><span className='bold'>From: </span>{props.info.city} {props.info.country}</p>
            <p><span className='bold'>Job Title: </span>{props.info.title}</p>
            <p><span className='bold'>Employer: </span>{props.info.employer}</p>
            <section className='movies'>
                <h4>Favorite Movies: </h4>
                <ol>1. {props.info.favoriteMovies[0]}</ol>
                <ol>2. {props.info.favoriteMovies[1]}</ol>
                <ol>3. {props.info.favoriteMovies[2]}</ol>
            </section>
            </section>
        </div>
    )
}

export default Card;