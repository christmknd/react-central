import React from 'react';
import Calendar from './Calendar';
import Slide from './Slide';
import Todolist from './Todolist';
import VideoPlayer from './VideoPlayer';
import Navbar from './NavBar';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/slide"  component={Slide} />
            <Route path="/todo"  component={Todolist} />
            <Route path="/video"  component={VideoPlayer} />
            <Route path="/"  component={() => <div>ERREUR 404</div>} />
          </Switch>
        
      </Router>
    </div>
  );
}

export default App;
