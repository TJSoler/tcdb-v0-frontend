"use client"

import type { LucideIcon } from "lucide-react"

interface SocialButtonProps {
  icon: LucideIcon
  provider: string
  onClick?: () => void
}

export function SocialButton({ icon: Icon, provider, onClick }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 border-2 border-black p-3 font-bold hover:border-neon-green hover:text-neon-green transition-colors"
    >
      <Icon size={20} />
      <span>Continue with {provider}</span>
    </button>
  )
}
