/**
 * @author: likun,
 * @from: https://reacttraining.com/react-router/web/guides/code-splitting
 * @description: split code with router;
 */

import React from 'react'
import PropTypes from 'prop-types'
import Animate from 'rc-animate'
import Loading from 'components/Loading'
import './Bundle.less'

class Bundle extends React.Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    animate: PropTypes.bool,
    loadingElement: PropTypes.node,
  }
  state = {
    WrapperComponent: null,
    errorMsg: false,
    errorCode: false,
  }

  componentWillMount () {
    this.load(this.props)
  }

  componentWillReceiveProps (nextProps) {
    // if (module.hot && this.props.load !== nextProps.load) {
    //   setImmediate(() => {
    //     this.load(nextProps)
    //   })
    // }
  }

  load = props => {
    props.load(props).then(
      mod => {
        this.setState({
          WrapperComponent: mod.default || mod,
          errorMsg: false,
        })
      },
      error => {
        this.setState({
          errorMsg: error.message || error,
          errorCode: error.code,
        })
      }
    )
  }

  render () {
    const { WrapperComponent, errorMsg, errorCode } = this.state
    const {
      animate = true,
      loadingElement,
      ...wrapperComponentProps
    } = this.props
    if (errorCode === '400') {
      return null
    }
    if (errorMsg) {
      return errorMsg
    }
    if (!WrapperComponent) {
      return loadingElement || <Loading />
    }
    if (!animate) {
      return <WrapperComponent {...wrapperComponentProps} />
    }
    return (
      <Animate
        component=""
        transitionAppear
        transitionName={{
          appear: 'animate-appear',
          appearActive: 'animate-appear-active',
        }}
      >
        <WrapperComponent {...wrapperComponentProps} key="bundle" />
      </Animate>
    )
  }
}

export default Bundle
