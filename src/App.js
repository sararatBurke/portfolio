import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      
      <Menu />

      <Switch>
        <Route path= '/'/>
      </Switch>
        <Header />
    </Router>
    </>
  
  );
}

export default App;
