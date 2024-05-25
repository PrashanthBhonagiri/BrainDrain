import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

const WelcomeMessage: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <div>
      <p>Welcome, {user.signInDetails?.loginId}!</p>
      {/* Add any other content or functionality you want in the welcome message */}
    </div>
  );
};

export default WelcomeMessage;