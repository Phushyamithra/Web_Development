// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './Person';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Person render/>
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    </div>
  );
}

export default App;
