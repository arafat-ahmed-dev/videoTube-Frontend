import logo from "../assets/logo.svg"
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="logo"  className="w-6"/>
      <span className="text-white text-xl font-semibold">VideoTube</span>
    </div>
  );
};

export default Logo;