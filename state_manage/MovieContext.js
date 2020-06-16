import React,{useState,createContext} from 'react';

export const MovieContext = createContext();

export const Movie_Provider = (props) =>{
    const [Movies,setMovies] = useState([
        {
            name : 'Harry Potter 1',
            id :  1 ,
            price: '10$'
        },
        {
            name : 'Harry Potter 2',
            id :   2,
            price: '20$'
        },
        {
            name : 'Harry Potter 3',
            id :  3 ,
            price: '30$'
        }
        ]);

    return (
        <MovieContext.Provider value = {[Movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}