import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="Nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="Email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  )
}

export default Form
