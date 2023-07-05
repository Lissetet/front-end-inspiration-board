const InputField = ({label, value, setValue}) => {
  return (
    <>
      <label 
        htmlFor={label} 
        className="text-sm text-right font-medium capitalize"
      >
        {label}
      </label>
      <input
        type="text"
        name={label}
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-gray-300 rounded-md p-1 w-full \
          focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </>
  )
}

export default InputField