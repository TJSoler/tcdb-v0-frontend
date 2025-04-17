"use client"

import { Printer } from "lucide-react"

export function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button
      onClick={handlePrint}
      className="flex items-center gap-2 text-sm font-bold hover:text-neon-green transition-colors print:hidden"
      aria-label="Print this page"
    >
      <Printer size={16} />
      <span>Print</span>
    </button>
  )
}
