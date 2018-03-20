import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { increase, doubleAsync } from '../reducers/increase'
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

const mapDispatchToProps = {
  increase,
  doubleAsync,
}

const mapStateToProps = state => ({
  increaseResult: state.increase,
})

const enhance = compose(
  // hot(module),
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(IncreaseContainer)
