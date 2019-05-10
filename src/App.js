import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { Description, WelcomeTitle } from './components/Texts';

const buttons = [1,2,3,4,5];

const navigateToGoogle = () => {
  window.location.href = "https://google.com";
};

const showModal = () => {
  console.log('mostrar modal');
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeTitle />
        <Description />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/*buttons.map((button, index) =>
        <Button name={`GDL ${index}`} color={`background-${index}`} key={index} />)*/
      }
      <Button name="Mostrar Modal" action={showModal} extraClassName="shadow" />
      <Button name="Navega a Google" action={navigateToGoogle} />
    </div>
  );
}

export default App;
