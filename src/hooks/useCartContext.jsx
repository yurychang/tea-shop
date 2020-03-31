import React from 'react'

const ctx = React.createContext()

export const { Provider, Consumer } = ctx

export const withCart = Component => props => (
  <Consumer>{value => <Component {...props} cart={value} />}</Consumer>
)

export default ctx
