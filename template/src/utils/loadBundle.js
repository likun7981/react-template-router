import React, { Component } from 'react'
import Loading from 'components/Loading'

class Bundle extends Component {
  state = {
    Mod: null,
  }

  componentWillMount () {
    this.load(this.props)
  }
  componentDidMount () {
    this.mounted = true
  }
  componentWillUnmount () {
    this.mounted = false
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load (props) {
    if (this.mounted) return
    props.load().then(mod => {
      this.setState({
        Mod: mod.default ? mod.default : mod,
      })
    })
  }

  render () {
    const { Mod } = this.state
    const { placeholder: Placeholder = Loading } = this.props
    return Mod ? <Mod {...this.props} /> : <Placeholder />
  }
}

export default (loadfn, config = {}) => props => (
  <Bundle {...props} load={loadfn} placeholder={config.placeholder} />
)
