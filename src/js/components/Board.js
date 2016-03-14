import React from 'react';
import Tile from './Tile';

export default class Board extends React.Component {
  state = {
    totalAttempts: 0,
    totalMatches: 0,
    prevTile: null
  }

  selectTile = (index) => {
    console.log('index selected: ', index)
    const tiles = this.props.tiles;
    tiles[index].flipped = true;
    if(!this.state.prevTile){
      this.setState({
        prevTile: { index, value: tiles[index].value }
      })
    } else {
      if(this.state.prevTile.value === tiles[index].value){
        tiles[index].matched = true;
        tiles[this.state.prevTile.index].matched = true;
        this.setState({
          totalMatches: this.state.totalMatches+1,
          prevTile: null
        })
      } else {
        setTimeout(() => {
          tiles[index].flipped = false;
          tiles[this.state.prevTile.index].flipped = false;
          this.setState({
            totalAttempts: this.state.totalAttempts+1,
            prevTile: null
          })
        }, 1000);
      }
    }
  }

  render(){
    console.log('board rendered')
     let tiles = this.props.tiles.map((tile, index) => {
      return (
        <Tile
        key={index}
        index={index}
        matched={tile.matched}
        flipped={tile.flipped}
        onClick={this.selectTile.bind(this, index)}
        tile={tile.value}/>
      )
    })
    return(
      <div>
        <h1>This is Board</h1>
        <button onClick={this.props.onRestart} type="button" className="btn btn-primary">Restart</button>
        {tiles}
      </div>
    )
  }
}
