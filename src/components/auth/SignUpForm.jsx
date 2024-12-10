import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import FormDivider from './FormDivider';
import SocialButtons from './SocialButtons';
import { validateEmail, validatePassword } from '../../utils/auth/validation';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    password: '',
    avatar: null,
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for the field being modified
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    // Safely check if files are available and not empty
    const file = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    setFormData((prev) => ({
      ...prev,
      avatar: file, // Set avatar to the selected file or null if no file selected
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    const newErrors = {};

    // Validate fields
    if (!formData.email) {
      newErrors.email = 'Email is required!';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email!';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required!';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password does not meet the required criteria!';
    }

    if (!formData.username) {
      newErrors.username = 'Username is required!';
    }

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required!';
    }

    if (!formData.avatar) {
      newErrors.avatar = 'Avatar image is required!';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.avatar && <p className="text-red-500 text-center">{errors.avatar}</p>}
      <div className="space-y-4">
        <Input
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <Input
          type="text"
          name="username"
          label="Username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded p-2 text-white"
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

      <Button type="submit" className="transform transition-transform hover:scale-102">
        Sign Up
      </Button>

      <FormDivider text="or" />
      <SocialButtons />
    </form>
  );
};

export default SignUpForm;
