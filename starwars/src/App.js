import React, { Component } from 'react';
import './App.css';
import CharCard from './components/CharCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          {this.state.starwarsChars.map(char => (
          <CharCard
                name={char.name}
                gender={char.gender}
                birthYear={char.birth_year}
                eye_color={char.eye_color}
                hair={char.hair_color}
                height={char.height}
                mass={char.mass}
                skin_color={char.skin_color}
                starships={char.starships}
          />
          ))}
      </div>
    );
  }
}

export default App;
