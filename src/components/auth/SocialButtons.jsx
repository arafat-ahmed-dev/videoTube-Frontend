import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import Button from './Button';

const SocialButtons = () => {
  return (
    <div className="space-y-3">
      <Button 
        variant="social" 
        icon={FcGoogle}
        className="transition-transform hover:scale-102"
      >
        Sign in with Google
      </Button>
      <Button 
        variant="social" 
        icon={FaFacebook}
        className="transition-transform hover:scale-102"
      >
        Sign in with Facebook
      </Button>
    </div>
  );
};

export default SocialButtons;