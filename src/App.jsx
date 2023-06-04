import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>This page will be a landing page!</h1>
        If you want to go to dashboard then goto /dashboard after login
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
    </>
  );
}

export default App;
