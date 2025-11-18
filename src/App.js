import { Routes } from "react-router-dom";
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import Javascript from './pages/javascript';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'red'}}>Welcome to react router!</h1>
      <Routes>
        <Routes path="/" element={<Home />} />
        <Routes path="/html" element={<Html />} />
        <Routes path="/css" element={<Css />} />
        <Routes path="/javascript" element={<Javascript />} />  
      </Routes>
    </div>
  );
}

export default App;
