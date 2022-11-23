import React from 'react';
import './App.css';
import CareExpPAge from './CareExpPage/careExpPage';
import DemoPage from './demoPage/demoPage';
import Header from './Header/Header';
import HelpPage from './HelpPage/helpPage';
import Page1Footer from './Page1Footer/Page1Footer';
import Page2 from './Page2/Page2';
import StatsPage from './StatsPage/StatsPage';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header />
      <Page1Footer />
      <Page2 />
      <CareExpPAge />
      <StatsPage />
      <HelpPage />
      <DemoPage />
    </div>
  );
}

export default App;
