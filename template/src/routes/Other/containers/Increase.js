import { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreatorMaps } from '../reducers/Increase'
import Increase from '../components/Increase'


class IncreaseContainer extends Component {
  increase = () => {
    this.props.increase()
  }
  doubleAsync = () => {
    this.props.doubleAsync()
  }
  render () {
    const { increaseResult } = this.props
    return Increase({
      increaseResult,
      increase: this.increase,
      doubleAsync: this.doubleAsync,
    })
  }
}

const mapDispatchToProps = actionCreatorMaps

const mapStateToProps = state => ({
  increaseResult: state.increaseResult,
})
const co = connect(mapStateToProps, mapDispatchToProps)(IncreaseContainer)
export default co
