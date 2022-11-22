import React from 'react';
import './App.css';
import Header from './Header/Header';
import Page1Footer from './Page1Footer/Page1Footer';
import Page2 from './Page2/Page2';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header />
      <Page1Footer />
      <Page2 />
    </div>
  );
}

export default App;
