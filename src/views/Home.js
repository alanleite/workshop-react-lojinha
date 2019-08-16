import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/elements/Button'

const Home = (prop) => (
  <div>
        Home <br />
    <Link to='/login'>Logue-se</Link>
    <br />
    <Button
      title='Clique aqui'
      description='asdasd'
      name='asd'
    />
    {JSON.stringify(prop, false, 2)}
  </div>
)

export default Home
