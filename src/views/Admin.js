import React, { useState } from 'react'

const Admin = () => {
  const [titulo, setTitulo] = useState('')
  return (
    <form>
      <label>Titulo</label>
      <input />
      <label>Categoria</label>
      <input />
      <label>Imagem</label>
      <input />
      <button>Cadastrar</button>
    </form>
  )
}

export default Admin
