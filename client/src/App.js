import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import NoMatch from './components/NoMatch';
import { Container } from 'semantic-ui-react';


const App = () => (
  <>
    <Navbar />

    <Container>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/register' component={ Register } />
        <Route exact path='/account' component={ Account } />
        <Route component={ NoMatch } />
      </Switch>
    </Container>
  </>
)

export default App;
