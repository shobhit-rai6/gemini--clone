import React from 'react';
import Sidebar from './components/sidebar/sidebar.js';
import Main from './components/main/main.js';
import './App.css'; // make sure you import the CSS

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
