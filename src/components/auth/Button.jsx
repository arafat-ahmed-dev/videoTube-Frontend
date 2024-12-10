const Button = ({ children, variant = 'primary', onClick, className = '', icon: Icon }) => {
  const baseStyles = 'w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100',
    social: 'bg-dark border border-gray-700 text-white hover:bg-gray-900',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;