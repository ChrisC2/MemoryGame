import React from 'react';
import classNames from 'classnames';

//Child Component off Board
export default class Tile extends React.Component{
  constructor(props){
    super(props)
  }
  //(Optimization) Only rerender component if it has been flipped
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.flipped !== this.props.flipped;
  }
  render(){
    let classes = classNames('tile', {'flipped': this.props.flipped})
    let tile = this.props.flipped ?
    <div className='face back'><img src={this.props.tile}/></div> :
    <div className='face front'></div>
    return(
      <div className={classes} onClick={this.props.onClick}>{tile}</div>
    )
  }
}
