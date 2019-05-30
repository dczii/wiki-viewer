import React, { Component } from 'react';
// import Animate from 'react-animate.css'

class SingleResult extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <a href={this.props.url} target="_blank">
          <div className='single-result'>
              <h3>{this.props.title}</h3>
              <p>{this.props.desc}</p>
          </div>
      </a>
    );
  }
}

export default SingleResult;
