import React from 'react';
import './App.css'; // Global styles
import Header from './components/Header'; // Your reusable header component
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import TeamAndWork from './components/TeamAndWork';
import Booking from './components/Booking';
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <WhyUs />
      <TeamAndWork />
      <Booking />
      <Reviews />
      <div className="App-container">
      </div>
    </div>
  );
}

export default App;