import React from 'react';
import SingleResult from './SingleResult';
import _ from 'lodash';

function ResultList(props) {
  return (
    <div className="result-list">
      {_.map(props.results, (res, idx) => {
        return <SingleResult key={idx} title={res.title} desc={res.snippet} />
      })}
    </div>
  );
}

export default ResultList;
