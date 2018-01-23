import React from 'react'
import PropTypes from 'prop-types'

const Fragment = React.Fragment

/** 用来使用if语句 */
function If ({ condition, children }) {
  if (condition) return <Fragment>{children}</Fragment>
  return null
}

If.propTypes = {
  /** if condition */
  condition: PropTypes.bool.isRequired,
}

export default If
