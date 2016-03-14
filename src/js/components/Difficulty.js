import React from 'react';

export default class Difficulty extends React.Component {
  render(){
    return (
      <div>
        <h3>Select Your Difficulty</h3>
        <button onClick={this.props.easy} type="button" class="btn btn-primary btn-lg btn-block">Easy</button>
        <button onClick={this.props.medium} type="button" class="btn btn-primary btn-lg btn-block">Medium</button>
        <button onClick={this.props.hard} type="button" class="btn btn-primary btn-lg btn-block">Hard</button>
      </div>
    )
  }
}
