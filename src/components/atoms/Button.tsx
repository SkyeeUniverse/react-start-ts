import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  label: string
  onClick: () => void
  type?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'primary',
}) => {
  const buttonClass = classNames('px-4 py-2 font-bold rounded', {
    'bg-blue-500 text-white': type === 'primary',
    'bg-gray-500 text-black': type === 'secondary',
  })

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
