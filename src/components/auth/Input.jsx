const Input = ({ 
  type, 
  name,
  placeholder, 
  value, 
  onChange, 
  label,
  error,
  className = '' 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-gray-300 text-sm">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full bg-dark border rounded-lg px-4 py-3 
          text-white placeholder-gray-500 
          transition-all duration-200
          ${error ? 'border-red-500' : 'border-gray-700 focus:border-primary'}
          focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50
          ${className}
        `}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;