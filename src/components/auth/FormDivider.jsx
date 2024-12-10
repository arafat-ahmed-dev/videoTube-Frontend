const FormDivider = ({ text }) => {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-700"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 text-gray-500 bg-[#0A1628]">{text}</span>
      </div>
    </div>
  );
};

export default FormDivider;