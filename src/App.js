import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Trending from './components/trending'
import Home from './components/Home'
import Auth from './components/auth'
import Try from './components/Try';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/auth'} className="nav-link">Authorization</Link></li>
            <li><Link to={'/trending'} className="nav-link">Trending</Link></li>
          </ul>
          </nav>
          <hr/>
          <Routes>
            <Route exact path = "/" element = {<Home/>} />
            <Route path = "/auth" element = {<Auth/>}/>
            <Route path = "/trending" element = {<Trending/>}/>
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
