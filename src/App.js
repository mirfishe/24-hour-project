import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NASA from './components/NASA/NASA';
import OpenWeather from  './components/OpenWeather/OpenWeather';
import Zomato from './components/Zomato/Zomato';

function App() {
  return (
    <div className="App">
      <NASA />
      <OpenWeather />
      <Zomato />
    </div>
  );
}

export default App;
