import React from 'react';
import './App.css'; // Global styles
import Header from './components/Header'; // Your reusable header component
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import TeamAndWork from './components/TeamAndWork';
import Booking from './components/Booking';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <WhyUs />
      <TeamAndWork />
      <Booking />
      <div className="App-container">
      </div>
    </div>
  );
}

export default App;