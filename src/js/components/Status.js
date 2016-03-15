import React from 'react'

export default class Status extends React.Component {
  render(){
    const status = this.props.tileLength/2 === this.props.matches ?
    <h2>Great Job! You Found Every Pair!</h2>:
    <h2>{this.props.message}</h2>
    return(
      <div className='text-center'>
    {status}
      </div>
    )
  }
}
