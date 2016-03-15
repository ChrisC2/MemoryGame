import React from 'react';
import classNames from 'classnames';
import Tile from './Tile';
import Status from './Status'

//Child Component off Game
export default class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      totalAttempts: 0,
      totalMatches: 0,
      prevTile: null,
      statusMessage: 'Choose a Tile!',
      totalSelected: 0
    }
  }

  selectTile = (index) => {
    console.log('running')
    const tiles = this.props.tiles;
    if(this.state.totalSelected === 2 || tiles[index].matched){
      return;
    }
    //Flip tile
    tiles[index].flipped = true;
    this.setState({totalSelected: this.state.totalSelected+1})
    //If no previous tile in state set selected tile to prevTile
    if(!this.state.prevTile){
      this.setState({
        prevTile: { index, value: tiles[index].value },
        statusMessage: 'Find the Matching Tile!'
      })
    } else {
      //If matching tile is selected set props to matched & increment matches
      if(this.state.prevTile.value === tiles[index].value){
        tiles[index].matched = true;
        tiles[this.state.prevTile.index].matched = true;
        this.setState({
          totalMatches: this.state.totalMatches+1,
          prevTile: null,
          statusMessage: "It's a Match!",
          totalSelected: 0
        })
      } else {
        //If matching tile isn't selected flip the tile back over & reset
        setTimeout(() => {
          tiles[this.state.prevTile.index].flipped = false;
          tiles[index].flipped = false;
          this.setState({
            totalAttempts: this.state.totalAttempts+1,
            prevTile: null,
            totalSelected: 0,
            statusMessage: 'Sorry Try Again'
          })
        }, 1300);
      }
    }
  }
  render(){
    //Responsive CSS based on Number of Tiles
    let tileLength = this.props.tiles.length;
    let classes = classNames('tile-container',
      {eight: tileLength === 8},
      {twenty: tileLength === 20},
      {thirty: tileLength === 30}
    )
    //Appends array of Tile Components
     let tiles = this.props.tiles.map((tile, index) => {
      return (
        <Tile
        key={index}
        index={index}
        flipped={tile.flipped}
        onClick={this.selectTile.bind(this, index)}
        tile={tile.value}/>
      )
    })
    return(
      <div>
        <div className='row text-center'>
          <div className='col-sm-4'>
            <button onClick={this.props.onRestart} type="button" className="btn btn-default">Restart</button>
          </div>
          <div className='col-sm-4'>
            <h2>Matches:<span className='matches'>{this.state.totalMatches}</span></h2>
          </div>
          <div className='col-sm-4'>
            <h2>Attempts:<span className='attempts'>{this.state.totalAttempts}</span></h2>
          </div>
        </div>
        <Status tileLength={this.props.tiles.length} matches={this.state.totalMatches} message={this.state.statusMessage}/>
        <div className={classes}>
          {tiles}
        </div>
      </div>
    )
  }
}
