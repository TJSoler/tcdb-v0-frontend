"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

interface FormInputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  showPasswordToggle?: boolean
}

export function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  error,
  showPasswordToggle = false,
}: FormInputProps) {
  const [inputType, setInputType] = useState(type)

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password")
  }

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-bold mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className={`w-full border-2 ${
            error ? "border-red-500" : "border-black"
          } p-3 focus:outline-none focus:border-neon-green transition-colors`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-neon-green"
            aria-label={inputType === "password" ? "Show password" : "Hide password"}
          >
            {inputType === "password" ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
