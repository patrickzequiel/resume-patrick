import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import About from './pages/About';

import PageNotFound from './pages/PageNotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/"  component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/resume" component={Resume} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
