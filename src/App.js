import './App.css';
import Menu from './components/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Education from './components/pages/Education';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    <Router>
      
      <Menu />

      <Switch>
        <Route path= '/' exact component={Home}/>
        <Route path= '/project' component={Project}/>
        <Route path= '/about' component={About}/>
        <Route path= '/resume' component={Resume}/>
        <Route path= '/contact' component={Contact}/>
      </Switch>
    </Router>
    </>
  
  );
}

export default App;
