type TextFieldType = {
  label: string
  placeholder: string
  className?: string
}

export function TextAreaField({
  label,
  placeholder,
  className,
}: TextFieldType) {
  return (
    <div className="w-full">
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className || ''} `}
      />
    </div>
  )
}
