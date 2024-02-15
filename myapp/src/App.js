import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
      </Routes>
    </Router>
  );
}

export default App;
