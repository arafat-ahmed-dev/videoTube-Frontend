import React, { useState } from 'react';
import FormFooter from '../../components/auth/FormFooter';
import Logo from '../../components/Logo';
import Input from '../../components/auth/Input'; // Assuming an Input component exists
import Button from '../../components/auth/Button';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password })
      });
      if (response.ok) {
        setSuccess(true);
        setError(null);
        return;
      }
      const data = await response.json();
      setError(data.error);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1628] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-dark p-6 sm:p-8 rounded-2xl border border-gray-800 mx-auto transform transition-all duration-300 hover:shadow-xl">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">Reset Password</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">Password reset successfully. You can now log in.</p>}
        <form onSubmit={handleResetPassword} className="space-y-4">
          <Input 
            type="password" 
            placeholder="Enter new password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <Input 
            type="password" 
            placeholder="Confirm new password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
          <Button
            type="submit"
          >
            Reset Password
          </Button>
        </form>
        <FormFooter uri={"/auth/login"} text={"Back to Login"} />
      </div>
    </div>
  );
};

export default ResetPassword;
