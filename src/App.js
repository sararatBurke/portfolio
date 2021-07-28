import './App.css';
import Menu from './components/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    <Router>
      
      <Menu />

      <Switch>
        <Route path= '/' exact component={Home}/>
        <Route path= '/about' component={About}/>
        <Route path= '/project' component={Project}/>
        <Route path= '/skills' component={Skills}/>
        <Route path= '/contact' component={Contact}/>
      </Switch>
    </Router>
    </>
  
  );
}

export default App;
