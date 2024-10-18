import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import Form from '../organisms/Form'

const HomePage: React.FC = () => {
  return (
    <PageTemplate>
      <h2 className="text-xl mb-4">Welcome to the Home Page</h2>
      <Form />
    </PageTemplate>
  )
}

export default HomePage
