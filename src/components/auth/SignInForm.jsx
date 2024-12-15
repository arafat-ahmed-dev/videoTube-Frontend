import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import FormDivider from "./FormDivider";
import SocialButtons from "./SocialButtons";
import { validateEmail, validatePassword } from "../../utils/auth/validation";
import { login as loginService } from "../../utils/auth/authService";
import { login, setError, clearError } from "../../store/Slice/AuthSilce"; // Import Redux actions

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector(state => state.auth.error); // Get error from Redux store
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    if (authError) {
      dispatch(clearError()); // Clear Redux error when user starts typing
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(clearError()); // Clear any existing errors

    const newErrors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await loginService(formData); // Call login service
      dispatch(login(response?.data)); // Update Redux store with user data
      navigate("/"); // Navigate to the home page
    } catch (error) {
      console.log(error);
      dispatch(setError(error)); // Store error in Redux
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          className="sm:text-sm md:text-base"
        />
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          className="sm:text-sm md:text-base"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
          className="w-4 h-4 rounded border-gray-700 bg-dark text-primary focus:ring-primary focus:ring-offset-0"
        />
        <label
          htmlFor="rememberMe"
          className="ml-2 text-sm text-gray-300 select-none"
        >
          Remember me
        </label>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </Button>
      <FormDivider text="or" />
      <SocialButtons />
    </form>
  );
};

export default SignInForm;
