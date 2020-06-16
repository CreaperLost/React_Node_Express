import React,{useState,useContext} from 'react'
import { MovieContext } from './MovieContext';

const AddMovie = () =>{
    const [Name,setName]  = useState(" ");
    const [Price,setPrice] = useState(" $");
    const [Movies,setMovies] = useContext(MovieContext);

    const UpdateName = (e)=>{
        setName(e.target.value);
    };

    const UpdatePrice = (e)=>{
        setPrice(e.target.value);
    };

    const addMovie = (e)=>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies,{name:Name,price:Price}]);
    };
    return (
        <form onSubmit={addMovie}>
            <input type = "text" name = "name" value = {Name} onChange={UpdateName}/>
            <input type = "text" name = "price" value = {Price} onChange={UpdatePrice}/>
            <button>Submit</button>
        </form>
    );
}

export default AddMovie;