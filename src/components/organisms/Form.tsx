import React, { useState } from 'react'
import FormField from '../molecules/FormField'
import Button from '../atoms/Button'

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    console.log('Form Submitted:', inputValue)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormField
        label="Input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
    </form>
  )
}

export default Form
