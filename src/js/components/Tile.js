import React from 'react';
import classNames from 'classnames';

export default class Tile extends React.Component{
  //Only rerender component if it has been flipped
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.flipped !== this.props.flipped
  }
  //select the tile to flip
  selectTile = () => {
    this.props.onClick(this.props.tile, this.props.index)
  }
  render(){
    var classes = className('tile', {'flipped': this.props.flipped}, {'matched': this.props.matched})
    var tile = this.props.flipped ? this.props.tile : '?'
    return(
      <div className={classes} onClick={this.selectTile}>{tile}</div>
    )
  }
}
