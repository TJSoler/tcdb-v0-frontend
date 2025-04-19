interface PasswordStrengthProps {
  strength: "weak" | "medium" | "strong" | "none"
}

export function PasswordStrength({ strength }: PasswordStrengthProps) {
  const getStrengthColor = () => {
    switch (strength) {
      case "weak":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "strong":
        return "bg-neon-green"
      default:
        return "bg-gray-200"
    }
  }

  const getStrengthWidth = () => {
    switch (strength) {
      case "weak":
        return "w-1/3"
      case "medium":
        return "w-2/3"
      case "strong":
        return "w-full"
      default:
        return "w-0"
    }
  }

  const getStrengthText = () => {
    switch (strength) {
      case "weak":
        return "Weak"
      case "medium":
        return "Medium"
      case "strong":
        return "Strong"
      default:
        return ""
    }
  }

  return (
    <div className="mb-4">
      <div className="h-2 w-full bg-gray-200 mb-1">
        <div className={`h-full ${getStrengthColor()} ${getStrengthWidth()} transition-all duration-300`}></div>
      </div>
      <div className="flex justify-between text-xs">
        <span>Password strength:</span>
        <span
          className={
            strength === "weak" ? "text-red-500" : strength === "medium" ? "text-yellow-500" : "text-neon-green"
          }
        >
          {getStrengthText()}
        </span>
      </div>
    </div>
  )
}
