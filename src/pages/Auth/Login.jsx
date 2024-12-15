import { useSelector } from "react-redux";
import FormFooter from "../../components/auth/FormFooter";
import Logo from "../../components/Logo";
import SignInForm from "../../components/auth/SignInForm";

function Login() {
  const authError = useSelector(state => state.auth?.error); // Access Redux error state

  return (
    <div className="min-h-screen bg-[#0A1628] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-dark p-6 sm:p-8 rounded-2xl border border-gray-800 mx-auto transform transition-all duration-300 hover:shadow-xl">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Sign in
        </h1>
        {authError && <p className="text-red-500 text-center">{authError}</p>}
        <SignInForm />
        <FormFooter uri={"/auth/register"} text={"Sign Up"} />
      </div>
    </div>
  );
}

export default Login;
