import React from 'react';

const ProgressBar = ({position, value, title}) => (
  <div
    className={`stack-bar ${ position }-bar`}
    style={{width: `${value}%`}}
    data-title={ title }
  />
)

export default ProgressBar;
