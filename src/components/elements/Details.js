import React, { useContext } from 'react'
import SessionContext from '../../common/SessionContext'

const Details = ({ title, description }) => {
  const session = useContext(SessionContext)
  return (
    <React.Fragment>
      <p>{session.usuarioLogado}</p>
      <p>{description}</p>
      <button onClick={() => {
        session.update({
          usuarioLogado: 'Giorgin'
        })
      }}>alterar nome</button>
    </React.Fragment>
  )
}
export default Details
