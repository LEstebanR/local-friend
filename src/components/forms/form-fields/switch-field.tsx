type SwitchFieldType = {
  label: string
  name?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  error?: string | null
}

export function SwitchField({
  label,
  name,
  checked,
  onChange,
  className,
  error,
}: SwitchFieldType) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="flex items-center">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="peer sr-only"
          />
          <div
            className={`peer-checked:bg-primary peer-focus:ring-primary/20 h-6 w-11 rounded-full bg-gray-200 peer-focus:ring-2 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white ${error ? 'border-red-500' : ''} ${className || ''}`}
          />
        </label>
      </div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
