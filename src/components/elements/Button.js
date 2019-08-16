import React from 'react'
import Details from './Details'

const Button = ({ name, ...others }) => (
  <div>
    <Details {...others} />
    <button>{name}</button>
  </div>
)

export default Button
