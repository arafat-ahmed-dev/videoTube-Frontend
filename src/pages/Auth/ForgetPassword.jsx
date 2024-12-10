import React, { useState } from 'react';
import FormFooter from '../../components/auth/FormFooter';
import Logo from '../../components/Logo';
import Input from '../../components/auth/Input'; // Assuming an Input component exists
import Button from '../../components/auth/Button';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleForgetPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/forget-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
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
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">Forgot Password</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">Check your email for recovery instructions.</p>}
        <form onSubmit={handleForgetPassword} className="space-y-4">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Button
          type="submit"
         
          >
            Send Recovery Email
          </Button>
        </form>
        <FormFooter uri={"/auth/login"} text={"Back to Login"} />
      </div>
    </div>
  );
};

export default ForgetPassword;
