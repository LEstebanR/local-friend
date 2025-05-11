type DividerProps = {
  className?: string
  text?: string
}

export function Divider({ className, text }: DividerProps) {
  return (
    <div className={`flex w-full items-center gap-4 ${className || ''}`}>
      <div className="h-px flex-1 bg-gray-200" />
      {text && <span className="text-sm text-gray-500">{text}</span>}
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  )
}
