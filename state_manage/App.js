import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie_List from './movie_list';
import Nav from './Nav';
import {Movie_Provider} from './MovieContext';
import AddMovie from './AddMovie';
function App() {
  return (
    <Movie_Provider>
      <div className="App">
        <Nav/>
        <AddMovie/>
        <Movie_List/>
      </div>
    </Movie_Provider>
  );
}

export default App;
