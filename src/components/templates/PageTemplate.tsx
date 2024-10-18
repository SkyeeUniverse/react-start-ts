import React from 'react'

interface PageTemplateProps {
  children: React.ReactNode
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>
      <main>{children}</main>
      <footer className="mt-4">
        <p>Footer Content</p>
      </footer>
    </div>
  )
}

export default PageTemplate
