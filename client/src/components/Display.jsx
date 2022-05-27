import React from 'react';

const Display = (props) => {
  return (
    <div>

      {props.selectCow !== null ? (props.selectCow.name + ':' + props.selectCow.description) : null}
    </div>
  )
}


export default Display;