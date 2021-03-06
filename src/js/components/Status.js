import React from 'react'

//Child Component off Board
export default class Status extends React.Component {
  render(){
    const status = this.props.pairs === 0 ?
    <h2>Great Job! You Found Every Pair!</h2>:
    <h2>{this.props.message}</h2>
    return(
      <div className='text-center'>
    {status}
      </div>
    )
  }
}
