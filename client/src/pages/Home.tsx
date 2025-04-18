import React from 'react';
import '../style/Home.css';
import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>turntabled</h1>
      <h3>your personal vinyl collection</h3>
      <div className="home-buttons">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  );
};

export default Home; 