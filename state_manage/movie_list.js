import React , {useState,useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const Movie_List = () =>{
    
    const [Movies,setMovies] = useContext(MovieContext);
    return (
        <div>
            {Movies.map(movie => (
                <Movie name={movie.name} price = {movie.price} key = {movie.id}/>
            ))}
        </div>
    );

};

export default Movie_List;