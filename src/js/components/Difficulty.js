import React from 'react';

//Child Component off Game
export default class Difficulty extends React.Component {
  render(){
    return (
      <div className='btn-group'>
        <h3>Select Your Difficulty</h3>
        <div><button onClick={this.props.easy} type="button" class="btn btn-info btn-lg">Easy</button></div>
        <div><button onClick={this.props.medium} type="button" class="btn btn-success btn-lg">Medium</button></div>
        <div><button onClick={this.props.hard} type="button" class="btn btn-primary btn-lg">Hard</button></div>
      </div>
    )
  }
}
