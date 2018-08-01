import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: 'Matrix',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The.Matrix.glmatrix.2.png/300px-The.Matrix.glmatrix.2.png'
  },
  {
    title: 'Oldboy',
    poster: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2SaY/image/Bqx0WFKTpvrxal3QiYNotjUAN6o.jpg'
  },
  {
    title: 'Star Wars',
    poster: 'https://pbs.twimg.com/profile_images/948859666049548290/qF3xKg3X_400x400.jpg'
  }
]

class App extends Component {

  componentWillMount(){
    console.log('will');
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        {movies.map((movie,index) => {

          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
  componentDidMount(){
    console.log('did')
  }
};

export default App;
