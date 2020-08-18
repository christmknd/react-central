//React
import React, {Component} from 'react';

//React Router
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


//Composants
import Calendar from './components/Calendar';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Slide from './components/Slideshow';
import VideoPlayer from './components/VideoPlayer';


//CSS
import './stylesheets/App.css';
import './stylesheets/calendar.css';
import './stylesheets/navbar.css';
import './stylesheets/slide.css';
import './stylesheets/videoplayer.css';


//Composant Racine
class App extends Component {

  render(){

    return (

    <div className="App">
      
      <Router>
        <Navbar/>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/slide"  component={Slide} />
            <Route path="/video"  component={VideoPlayer} />
            <Route path="/"  component={() => <div>ERREUR 404</div>} />
          </Switch>
        
        <Footer/>
      </Router>
    </div>

    )
   
  }
    
  
}

export default App;
