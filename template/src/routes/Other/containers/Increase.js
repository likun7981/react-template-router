import { Component } from 'react'
// import connect from 'utils/connect'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { actionCreatorMaps } from '../reducers/increase'
import Increase from '../components/Increase'

class IncreaseContainer extends Component {
  state = {
    count: 0,
  }
  increase = () => {
    this.props.increase()
  }
  doubleAsync = () => {
    this.props.doubleAsync()
  }
  addState = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render () {
    return Increase({
      count: this.state.count,
      addState: this.addState,
      increase: this.increase,
      doubleAsync: this.doubleAsync,
      increaseResult: this.props.increaseResult,
    })
  }
}

const mapDispatchToProps = actionCreatorMaps

const mapStateToProps = state => ({
  increaseResult: state.increase,
})

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(IncreaseContainer)
)
