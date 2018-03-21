import React from 'react'
import { Button } from 'antd'

export const Increase = props => {
  return (
    <div>
      <h2>reduxStateCount: {props.increaseResult}</h2>
      <h3>reactStateCount: {props.count}</h3>
      <Button onClick={props.addState}>addStateCount</Button>
      <Button className="btn btn-default" onClick={props.increase}>
        Increment
      </Button>
      <Button className="btn btn-default" onClick={props.doubleAsync}>
        Double (Async)
      </Button>
    </div>
  )
}

export default Increase
