import React from 'react';
import Tile from './Tile';

export default class Board extends React.Component {
  state = {
    totalAttempts: 0,
    totalMatches: 0,
    prevCard: null,
    waiting: false
  }

  selectTile = (value, index) => {
    console.log('tile selected : ', value)
    console.log('index : ', index)
    if(this.state.waiting){
      console.log('inside')
      return
    }
    let tiles = this.props.tiles;
    tiles[index].flipped = true;

    this.setState({waiting: true,function () {console.log('waiting',this.state.waiting)}})

    if(!this.state.prevCard){
      this.setState({
        prevCard: { index, value },
        waiting: false
      })
    } else {
      if(this.state.prevCard.value === value){
        tiles[index].matched = true;
        tiles[this.state.prevCard.index].matched = true;
        this.setState({
          totalMatches: this.state.totalMatches+1,
          prevCard: null,
          waiting: false
        })
      } else {
        setTimeout(() => {
          tiles[index].flipped = false;
          tiles[this.state.prevCard.index].flipped = false;
          this.setState({
            totalAttempts: this.state.totalAttempts+1,
            prevCard : null,
            waiting: false
          })
        }, 1000);
      }
    }
  }

  render(){
    const tiles = this.props.tiles.map((tile, index) => {
      return (
        <Tile
        onClick={this.selectTile.bind(this, tile.value, index)}
        key={index}
        index={index}
        matched={tile.matched}
        flipped={tile.flipped}
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
