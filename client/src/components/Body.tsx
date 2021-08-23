import { Route, Switch } from 'react-router-dom';
import Home from '../domain/Home';
import Projects from '../domain/Projects';

function Body() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/services'>
        <h1>Services</h1>
      </Route>
      <Route exact path='/projects'>
        <Projects />
      </Route>
      <Route exact path='/contact'>
        <h1>Contact</h1>
      </Route>
    </Switch>
  );
}

export default Body;
