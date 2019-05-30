import React, { Component } from 'react';
import SingleResult from './SingleResult';
import _ from 'lodash';

class ResultList extends Component {
    constructor(props) {
    super(props);
        this.state = { 

        } ;
    }

    render() {
        
        return (
            <div className="result-list">
              {_.map(this.props.results, (res, idx) => {
                return <SingleResult key={idx} title={this.props.results[1][idx]} desc={this.props.results[2][idx]} url={this.props.results[3][idx]} />
              })}
            </div>
        );
    }   

}

export default ResultList;
