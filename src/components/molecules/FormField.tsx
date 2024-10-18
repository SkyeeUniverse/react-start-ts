import React from 'react'

interface FormFieldProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-2 py-1 w-full"
      />
    </div>
  )
}

export default FormField
