interface LabelProps {
  htmlFor: string
  label: string
  mandatory?: boolean
}
export const Label = ({ htmlFor, label, mandatory }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {label}
      {mandatory && <span className="text-red-500">*</span>}
    </label>
  )
}
