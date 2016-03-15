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
    let tile = this.props.flipped ? this.props.tile : ''
    return(
      <div className='item'>
        <figure>
          <div className={classes} onClick={this.props.onClick}><img src={tile}/></div>
        </figure>
      </div>
    )
  }
}
