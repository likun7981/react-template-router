import React from 'react';
import { Button } from 'antd';

export const Increase = props => {
  return (
    <div>
      <h2>Counter: {props.increaseResult}</h2>
      <Button className="btn btn-default" onClick={props.increase}>
        Increment
      </Button>
      <Button className="btn btn-default" onClick={props.doubleAsync}>
        Double (Async)
      </Button>
    </div>
  );
};

export default Increase;
