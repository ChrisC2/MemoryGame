import React from 'react';
import classNames from 'classnames';

export default class Tile extends React.Component{
  constructor(props){
    super(props)
  }
  //Only rerender component if it has been flipped
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.flipped !== this.props.flipped
  }
  render(){
    console.log('tile rendered')
    var classes = classNames('tile', {'flipped': this.props.flipped}, {'matched': this.props.matched})
    var tile = this.props.flipped ? this.props.tile : '?'
    return(
      <div className={classes} onClick={this.props.onClick}>{tile}</div>
    )
  }
}
