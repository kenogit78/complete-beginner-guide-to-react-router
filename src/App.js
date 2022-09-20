import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1> A Complete Beginners Guide To React Router</h1>

      <Link to='/'> <button> Home </button> </Link>
      <Link to='/about'> <button>About</button> </Link>
      <Link to='/contact'><button> Contact </button> </Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
