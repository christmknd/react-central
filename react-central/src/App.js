import React from 'react';
import Calendar from './Calendar';
import Slide from './Slide';
import Todolist from './Todolist';
import VideoPlayer from './VideoPlayer';
import Navbar from './NavBar';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Route path="/" exact component={Home} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/slide" exact component={Slide} />
        <Route path="/todo" exact component={Todolist} />
        <Route path="/video" exact component={VideoPlayer} />
      </Router>
    </div>
  );
}

export default App;
