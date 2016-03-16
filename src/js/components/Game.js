import React from 'react';
import Difficulty from './Difficulty';
import Board from './Board';

//Shuffles & gets Data
const getData = () => {
  return [
    {value: 'img/ducati-logo.png', matched: false, flipped: false},
    {value: 'img/Ferrari-Logo.jpg', matched: false, flipped: false},
    {value: 'img/mvagusta.jpg', matched: false, flipped: false},
    {value: 'img/lamb.jpg', matched: false, flipped: false},
    {value: 'img/porsche.jpg', matched: false, flipped: false},
    {value: 'img/Pagani_logo.jpg', matched: false, flipped: false},
    {value: 'img/mclaren.jpg', matched: false, flipped: false},
    {value: 'img/maserati.jpg', matched: false, flipped: false},
    {value: 'img/Lotus.gif', matched: false, flipped: false},
    {value: 'img/audi-logo.png', matched: false, flipped: false},
    {value: 'img/alfa.jpg', matched: false, flipped: false},
    {value: 'img/bmwlogo.jpg', matched: false, flipped: false},
    {value: 'img/aston-martin.jpg', matched: false, flipped: false},
    {value: 'img/bentley.png', matched: false, flipped: false},
    {value: 'img/jaguar.jpg', matched: false, flipped: false}
  ]
}

const shuffleData = function (data) {
    for(var i = 0; i < data.length; i++) {
        var indexToSwap = Math.floor(Math.random() * (i + 1));
        var temp = data[i];
        data[i] = data[indexToSwap];
        data[indexToSwap] = temp;
    }
    return data;
}

//Main Parent Component
export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false,
      tiles: null
    }
  }
  //Select Difficulty Easy
  selectEasy = () => {
    let sliceTiles = getData().slice(0,4);
    let copy = getData().slice(0,4);
    let duplicated = sliceTiles.concat(copy);
    this.setState({
      tiles: shuffleData(duplicated),
      selected: true
    })
  }
  //Select Difficulty Medium
  selectMedium = () => {
    let sliceTiles = getData().slice(0,10)
    let copy = getData().slice(0,10)
    let duplicated = sliceTiles.concat(copy);
    this.setState({
      tiles: shuffleData(duplicated),
      selected: true
    })
  }
  //Select Difficulty Hard
  selectHard = () => {
    let copy = getData()
    let duplicated = getData().concat(copy);
    this.setState({
      tiles: shuffleData(duplicated),
      selected: true
    })
  }
  //Restart Game
  restartGame = () => {
    this.setState({
      selected: false,
      tiles: null
    })
  }
  render() {
    return(
      this.state.selected ?
      <Board className='text-center' onRestart={this.restartGame} tiles={this.state.tiles}/> :
      <div className='text-center'>
        <h1>Memory Game!</h1>
        <Difficulty easy={this.selectEasy} medium={this.selectMedium} hard={this.selectHard}/>
      </div>
    );
  }
}
