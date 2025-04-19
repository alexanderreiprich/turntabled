import React from 'react';
import '../style/Home.css';
import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home">
      <h1>turntabled</h1>
      <h3>your personal vinyl collection</h3>
      <div className="home-buttons">
        {isAuthenticated ? (    
          <LoginButton />
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Home; 