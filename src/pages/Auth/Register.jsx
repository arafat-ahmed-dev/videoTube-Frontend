import FormFooter from '../../components/auth/FormFooter';
import Logo from '../../components/Logo';
import SignUpForm from '../../components/auth/SignUpForm';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Register() {
  const authStatus = useSelector((state) => state.auth?.error);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(authStatus);
  }, [authStatus]);
return (
  <div className="min-h-screen bg-[#0A1628] flex items-center justify-center p-4">
    <div className="w-full max-w-md space-y-8 bg-dark p-6 sm:p-8 rounded-2xl border border-gray-800 mx-auto transform transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-center">
        <Logo />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">Sign Up</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <SignUpForm/>
      <FormFooter uri={"/auth/login"} text={"Sign In"} />
    </div>
  </div>
);
}

export default Register;
