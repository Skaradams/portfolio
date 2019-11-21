import React from 'react';
import ProgressBar from "./ProgressBar";

const StackRatio = ({position, value, title}) => (
  <div className="stack-ratio row">
    <ProgressBar position="left" value="75" title="Front-end" />
    <ProgressBar position="right" value="35" title="Back-end" />
  </div>
)

export default StackRatio;
