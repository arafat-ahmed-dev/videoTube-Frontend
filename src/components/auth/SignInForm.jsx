import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import FormDivider from './FormDivider';
import SocialButtons from './SocialButtons';
import { validateEmail, validatePassword } from '../../utils/auth/validation';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
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
        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-300 select-none">
          Remember me
        </label>
      </div>

      <Button
        type="submit"
        className="transform transition-transform hover:scale-102"
      >
        Sign in
      </Button>

      <FormDivider text="or" />
      <SocialButtons />
    </form>
  );
};

export default SignInForm;