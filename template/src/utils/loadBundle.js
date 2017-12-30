import React from 'react'
import Bundle from 'components/Bundle'

export default (loadfn, config = {}) => props => (
  <Bundle
    {...props}
    load={loadfn}
    animate={config.animate}
    loadingElement={config.loadingElement}
  />
)
