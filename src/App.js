import React from 'react';
import { GoogleLogin } from 'react-google-login';
import InvoiceList from './components/InvoiceList';
import AutomationButton from './components/AutomationButton';

function App() {
  return (
    <div>
      <h1>SaaS Platform</h1>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={(response) => console.log(response)}
        onFailure={(error) => console.error(error)}
        cookiePolicy={'single_host_origin'}
      />
      <InvoiceList />
      <AutomationButton />
    </div>
  );
}

export default App;
