import React, { Component } from 'react'

export class PersonCard extends Component {
  render() {
    return (
      <div className='card mb-3'>
        <div className='card-body'>
          <h2>{this.props.personName}</h2>
          <p className="card-text">Age: {this.props.age}</p>
          <p className="class-text">Hair Color: {this.props.personHair}</p>
        </div>
  
      </div>
    )
  }
}

export default PersonCard