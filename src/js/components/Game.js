import React from 'react';
import Difficulty from './Difficulty';
import Board from './Board';

//Shuffles & gets Data
var getData = () => {
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

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false,
      tiles: null
    }
  }
  selectEasy = () => {
    let sliceTiles = getData().slice(0,4);
    let copy = getData().slice(0,4);
    this.setState({
      tiles: sliceTiles.concat(copy),
      selected: true
    })
  }
  selectMedium = () => {
    let sliceTiles = getData().slice(0,10)
    let copy = getData().slice(0,10)
    this.setState({
      tiles: sliceTiles.concat(copy),
      selected: true
    })
  }
  selectHard = () => {
    let copy = getData()
    this.setState({
      tiles: getData().concat(copy),
      selected: true
    })
  }
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
