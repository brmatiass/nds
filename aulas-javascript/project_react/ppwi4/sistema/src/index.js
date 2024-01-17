import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "bootstrap/dist/css/bootstrap.css";
import "./Assets/font-awesome/css/font-awesome.css";
import { AuthProvider } from './Components/Context/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

