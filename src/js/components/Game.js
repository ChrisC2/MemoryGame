import React from 'react';
import Difficulty from './Difficulty';
import Board from './Board';

const getData = () => {
  return [
    {value: 'one', matched: false, flipped: false},
    {value: 'two', matched: false, flipped: false},
    {value: 'three', matched: false, flipped: false},
    {value: 'four', matched: false, flipped: false},
    {value: 'five', matched: false, flipped: false},
    {value: 'six', matched: false, flipped: false},
    {value: 'seven', matched: false, flipped: false},
    {value: 'eight', matched: false, flipped: false},
    {value: 'nine', matched: false, flipped: false},
    {value: 'ten', matched: false, flipped: false},
    {value: 'eleven', matched: false, flipped: false},
    {value: 'twelve', matched: false, flipped: false},
    {value: 'thirteen', matched: false, flipped: false},
    {value: 'fourteen', matched: false, flipped: false},
    {value: 'fifteen', matched: false, flipped: false}
  ]
}

export default class Game extends React.Component {
  state = {
    selected: false,
    tiles: null
  }
  selectEasy = () => {

    let sliceTiles = getData().slice(0,4);
    this.setState({
      tiles: sliceTiles.concat(sliceTiles),
      selected: true
    })
  }
  selectMedium = () => {
    let sliceTiles = getData().slice(0,10)
    this.setState({
      tiles: sliceTiles.concat(sliceTiles),
      selected: true
    })
  }
  selectHard = () => {
    this.setState({
      tiles: getData().concat(tileData),
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
      <Board onRestart={this.restartGame} tiles={this.state.tiles}/> :
      <div>
        <h1>Memory Game!</h1>
        <Difficulty easy={this.selectEasy} medium={this.selectMedium} hard={this.selectHard} className='wrapper'/>
      </div>
    );
  }
}
