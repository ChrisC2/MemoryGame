import React from 'react';

export default class Difficulty extends React.Component {
  render(){
    return (
      <div className='row'>
        <h3>Select Your Difficulty</h3>
        <div className='col-sm-4'><button onClick={this.props.easy} type="button" class="btn btn-primary btn-lg">Easy</button></div>
        <div className='col-sm-4'><button onClick={this.props.medium} type="button" class="btn btn-primary btn-lg">Medium</button></div>
        <div className='col-sm-4'><button onClick={this.props.hard} type="button" class="btn btn-primary btn-lg">Hard</button></div>
      </div>
    )
  }
}
