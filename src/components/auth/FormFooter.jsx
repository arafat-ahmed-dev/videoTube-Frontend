import { Link } from "react-router-dom";

const FormFooter = ({ text , uri }) => {
  return (
    <div className="space-y-4 mt-6">
      <div className="text-center">
        <Link to="/auth/forget-password" className="text-gray-300 hover:text-white text-sm transition-colors">
          Forgot your password?
        </Link>
      </div>
      <div className="text-center">
        <span className="text-gray-500">Don't have an account? </span>
        <Link to={uri || "#"} className="text-white hover:text-gray-300 transition-colors">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default FormFooter;