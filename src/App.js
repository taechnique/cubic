import React from 'react'
import './App.css';
import TopMenu from './components/TopMenu'
import 'antd/dist/antd.css';
import CubicCarousel from './components/CubicCarousel'
function App() {
  return (
    <div className="App">
      <TopMenu />
      <CubicCarousel />
    </div>
  );
}

export default App;
