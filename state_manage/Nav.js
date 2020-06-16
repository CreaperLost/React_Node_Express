import React,{useContext}  from 'react';
import {MovieContext} from './MovieContext';


const Nav = () =>{
    const [Movies,useMovies] = useContext(MovieContext);
    return (
        <div>
            <h3>Navigation</h3>
            <p>List of Movies : {Movies.length}</p>
        </div>
    );

};

export default Nav;