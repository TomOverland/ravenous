import React from 'react';
import './App.css';
import '../BusinessList/BusinessList';
import '../SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
        <SeachBar />
        <BusinessList />
    </div>
  );
}

export default App;
