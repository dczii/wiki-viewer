import React from 'react';

function SingleResult(props) {
  return (
    // eslint-disable-next-line
    <a href={props.url} target="_blank">
        <div className='single-result'>
            <h3>{props.title}</h3>
            <div dangerouslySetInnerHTML={{__html: props.desc}}>
            </div>
        </div>
    </a>
  );
}

export default SingleResult;
