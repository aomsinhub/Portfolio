import logo from './logo.svg';
import './App.css';
import Home from './component/Home.js';
import Works from './component/Works.js';
import Certificates from './component/Certificates.js';
import Activities from './component/Activities.js';
import Navbar from './navbar/Navbar';
import ParticlesConfig from './component/ParticlesConfig';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <ParticlesConfig/>
      <Navbar/>
      <Routes>
        <Route path="/Profile" element={<Home/>}/>
        <Route path="/Works" element={<Works/>}/>
        <Route path="/Certificates" element={<Certificates/>}/>
        <Route path="/Activities" element={<Activities/>}/>
      </Routes>
    </div>
  );
}

export default App;
