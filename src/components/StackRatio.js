import React from 'react';
import ProgressBar from "./ProgressBar";

const StackRatio = ({valueFront, valueBack}) => (
  <div className="stack-ratio row">
    {
      valueFront ?
      <ProgressBar position="left" value={ valueFront } title="Front-end" />
      : ""
    }
    {
      valueBack ?
      <ProgressBar position="right" value={ valueBack } title="Back-end" />
      : ""
    }
  </div>
)

export default StackRatio;
